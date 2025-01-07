# 1703 Census API

A RESTful API providing access to historical records from the 1703 Icelandic census, the first complete census of any population in history.

## Features

- Demographic statistics (population by district, age groups, gender distribution)
- Property information (land ownership, rental terms, property types)
- Livestock data (cattle, sheep, goats, horses)
- Error handling and logging
- API rate limiting
- Swagger documentation
- Mock data support in development mode

## Prerequisites

- Node.js >= 14.0.0
- MySQL >= 8.0
- npm >= 6.0.0

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd 1703-api
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`

5. Initialize the database:
```bash
mysql -u root -p < 1703.sql
```

## Development

Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## API Documentation

Access the Swagger documentation at `http://localhost:3000/api-docs`

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload
- `npm test` - Run tests with coverage
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run build` - Build for production
- `npm run docs` - Generate API documentation

## API Endpoints

### Demographics
- `GET /api/demographics/population/districts` - Population by district
- `GET /api/demographics/population/counties` - Population by county
- `GET /api/demographics/age-gender` - Gender and age group statistics
- `GET /api/demographics/marital-status` - Marital status statistics
- `GET /api/demographics/household-size` - Household size statistics
- `GET /api/demographics/household-type` - Household type statistics
- `GET /api/demographics/household-heads` - Household heads statistics
- `GET /api/demographics/household-status` - Household status statistics
- `GET /api/demographics/occupational-status` - Occupational status statistics

### Properties
- `GET /api/properties/occupancy` - Land occupancy statistics
- `GET /api/properties/rental-terms` - Property rental terms
- `GET /api/properties/property-types` - Property types
- `GET /api/properties/property-value` - Property values
- `GET /api/properties/ownership` - Property ownership
- `GET /api/properties/distribution` - Property distribution

### Livestock
- `GET /api/livestock/cattle` - Cattle statistics
- `GET /api/livestock/sheep` - Sheep statistics
- `GET /api/livestock/goats` - Goat statistics
- `GET /api/livestock/horses` - Horse statistics
- `GET /api/livestock/owners` - Livestock owners
- `GET /api/livestock/value` - Livestock value

## Error Handling

The API uses standard HTTP response codes:
- 200: Success
- 400: Bad request
- 401: Unauthorized
- 403: Forbidden
- 404: Not found
- 500: Internal server error

## Development Mode

When running in development mode, if the database connection fails, the API automatically falls back to mock data.

## Testing

Run the test suite:
```bash
npm test
```

## License

ISC