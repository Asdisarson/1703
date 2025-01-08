const os = require('os');
const chalk = require('chalk');

function getIpAddresses() {
  const networkInterfaces = os.networkInterfaces();
  const addresses = [];

  Object.keys(networkInterfaces).forEach(name => {
    networkInterfaces[name].forEach(addr => {
      // Skip internal and non-IPv4 addresses
      if (!addr.internal && addr.family === 'IPv4') {
        addresses.push({
          name: name,
          address: addr.address
        });
      }
    });
  });

  return addresses;
}

function getEndpoints(app) {
  const endpoints = [];
  
  function processRoute(route, basePath = '') {
    if (route.route) {
      // It's a leaf route
      const methods = Object.keys(route.route.methods)
        .filter(method => route.route.methods[method])
        .join(', ')
        .toUpperCase();
      endpoints.push({
        method: methods,
        path: basePath + route.route.path
      });
    } else if (route.handle && route.handle.stack) {
      // It's a router
      const newBasePath = basePath + (route.regexp.toString().match(/^\/\^(.*?)\\/)?.[1] || '');
      route.handle.stack.forEach(handler => processRoute(handler, newBasePath));
    }
  }

  app._router.stack.forEach(middleware => {
    if (middleware.route || (middleware.handle && middleware.handle.stack)) {
      processRoute(middleware);
    }
  });

  return endpoints;
}

function displayServerInfo(app, port) {
  const addresses = getIpAddresses();
  const endpoints = getEndpoints(app);

  console.log(chalk.cyan('\n=== 1703 Census API Server Information ===\n'));
  
  // Server URLs
  console.log(chalk.yellow('Server URLs:'));
  console.log(chalk.green('Local:'), `http://localhost:${port}`);
  addresses.forEach(addr => {
    console.log(chalk.green(`Network (${addr.name}):`), `http://${addr.address}:${port}`);
  });

  // Documentation URL
  console.log(chalk.yellow('\nAPI Documentation:'));
  console.log(`http://localhost:${port}/api-docs`);

  // Available Endpoints
  console.log(chalk.yellow('\nAvailable Endpoints:'));
  
  // Group endpoints by their base path
  const groupedEndpoints = endpoints.reduce((acc, endpoint) => {
    const basePath = endpoint.path.split('/')[1] || 'root';
    if (!acc[basePath]) acc[basePath] = [];
    acc[basePath].push(endpoint);
    return acc;
  }, {});

  Object.keys(groupedEndpoints).sort().forEach(group => {
    console.log(chalk.cyan(`\n${group.toUpperCase()}:`));
    groupedEndpoints[group]
      .sort((a, b) => a.path.localeCompare(b.path))
      .forEach(endpoint => {
        console.log(
          chalk.green(endpoint.method.padEnd(8)),
          endpoint.path
        );
      });
  });

  console.log(chalk.cyan('\n=== Server Started Successfully ===\n'));
}

module.exports = displayServerInfo; 