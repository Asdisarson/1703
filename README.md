# 1703 Census API

A RESTful API providing access to the 1703 Icelandic census data, including detailed statistics about population, farms, and livestock.

## Features

- Population statistics by district and county
- Detailed farm information and statistics
- Comprehensive livestock data
- Demographic statistics
- Interactive API documentation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/1703-census-api.git
   cd 1703-census-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your database credentials and other configuration.

4. Start the server:
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

The API will be available at `http://localhost:3000/api/v1`
API documentation will be available at `http://localhost:3000/api-docs`

## API Documentation

### Base URL
All API endpoints are prefixed with `/api/v1`

### Available Endpoints

#### Population
- `GET /population/total` - Get total population count
- `GET /population/by-district` - Get population by district
- `GET /population/by-county` - Get population by county

#### Farms
- `GET /farms/occupancy` - Get farm occupancy statistics
- `GET /farms/rental-terms` - Get rental terms statistics
- `GET /farms/property-types` - Get property type statistics
- `GET /farms/property-values` - Get property value statistics
- `GET /farms/ownership` - Get ownership statistics
- `GET /farms/distribution` - Get property distribution statistics
- `GET /farms/:byliNr` - Get detailed information about a specific farm

#### Livestock
- `GET /livestock/cattle` - Get cattle statistics
- `GET /livestock/sheep` - Get sheep statistics
- `GET /livestock/goats` - Get goat statistics
- `GET /livestock/horses` - Get horse statistics
- `GET /livestock/owners` - Get livestock owner statistics
- `GET /livestock/value` - Get livestock value statistics
- `GET /livestock/summary` - Get summary of all livestock types

#### Statistics
- `GET /statistics/demographics/age-gender` - Get age and gender statistics
- `GET /statistics/demographics/marital-status` - Get marital status statistics
- `GET /statistics/households/sizes` - Get household size statistics
- `GET /statistics/households/types` - Get household type statistics
- `GET /statistics/status/household` - Get household status statistics
- `GET /statistics/status/occupational` - Get occupational statistics

## Development

### Running Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Code Style
This project uses ESLint for code style enforcement. Run the linter:
```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data source: National Archives of Iceland
- Historical context: [1703 Census of Iceland](https://en.wikipedia.org/wiki/1703_census_of_Iceland) 