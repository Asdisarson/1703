# 1703 Census API

API for accessing the 1703 Icelandic census data, providing detailed statistics about population, farms, and livestock.

## Features

- Population statistics (total, by district, by county)
- Farm information (occupancy, rental terms, property types, values)
- Livestock statistics (cattle, sheep, goats, horses)
- Demographic statistics (age, gender, marital status)
- Household statistics (sizes, types, status)
- Comprehensive API documentation with Swagger UI

## Getting Started

### Prerequisites

- Node.js >= 14.0.0
- npm or yarn
- MySQL (for production)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Asdisarson/1703.git
   cd 1703
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3000` with documentation at `http://localhost:3000/api-docs`.

## Available Endpoints

### Population

- `GET /api/v1/population/total` - Get total population count
- `GET /api/v1/population/by-district` - Get population by district
- `GET /api/v1/population/by-county` - Get population by county

### Farms

- `GET /api/v1/farms/occupancy` - Get farm occupancy statistics
- `GET /api/v1/farms/rental-terms` - Get rental terms statistics
- `GET /api/v1/farms/property-types` - Get property type statistics
- `GET /api/v1/farms/property-values` - Get property value statistics
- `GET /api/v1/farms/ownership` - Get ownership statistics
- `GET /api/v1/farms/distribution` - Get property distribution
- `GET /api/v1/farms/:byliNr` - Get detailed information about a specific farm

### Livestock

- `GET /api/v1/livestock/cattle` - Get cattle statistics
- `GET /api/v1/livestock/sheep` - Get sheep statistics
- `GET /api/v1/livestock/goats` - Get goat statistics
- `GET /api/v1/livestock/horses` - Get horse statistics
- `GET /api/v1/livestock/owners` - Get livestock owner statistics
- `GET /api/v1/livestock/value` - Get livestock value statistics
- `GET /api/v1/livestock/summary` - Get summary of all livestock types

### Statistics

- `GET /api/v1/statistics/demographics/age-gender` - Get age and gender statistics
- `GET /api/v1/statistics/demographics/marital-status` - Get marital status statistics
- `GET /api/v1/statistics/households/sizes` - Get household size statistics
- `GET /api/v1/statistics/households/types` - Get household type statistics
- `GET /api/v1/statistics/status/household` - Get household status statistics
- `GET /api/v1/statistics/status/occupational` - Get occupational status statistics

## Development

### Running Tests

```bash
npm test
```

For watching mode:
```bash
npm run test:watch
```

For coverage report:
```bash
npm run test:coverage
```

### Code Style

The project uses ESLint and Prettier for code formatting. Run:

```bash
npm run lint     # Check for issues
npm run lint:fix # Fix issues automatically
npm run format   # Format code with Prettier
```

## API Documentation

The API documentation is available through Swagger UI at the root route (`/`) or `/api-docs`. The documentation includes:

- Detailed endpoint descriptions
- Request/response schemas
- Example responses
- Try-it-out functionality

You can also view the documentation on SwaggerHub: [1703 Census API Documentation](https://app.swaggerhub.com/apis-docs/Islandsvefir/1703/1.0.0)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data source: [1703 Icelandic Census](https://www.manntal.is/leit/thjodhagir-1703)
- Built with Express.js and Node.js
- Documentation powered by Swagger/OpenAPI 