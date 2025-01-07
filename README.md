# 1703 Census API

A Node.js API for accessing the 1703 Icelandic census data.

## Features

- Read-only access to historical census data
- Error handling and logging
- Mock data support
- MySQL database integration
- RESTful API endpoints

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 1703
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
- Copy `.env.example` to `.env`
- Update the database configuration in `.env`

## Database Setup

1. Import the database schema:
```bash
mysql -u your_username -p your_database_name < 1703.sql
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Individuals
- GET `/api/v1/individuals` - Get all individuals
- GET `/api/v1/individuals/:id` - Get individual by ID
- GET `/api/v1/individuals/age?age=30` - Get individuals by age
- GET `/api/v1/individuals/gender?gender=1` - Get individuals by gender

### Households
- GET `/api/v1/households` - Get all households
- GET `/api/v1/households/:id` - Get household by ID
- GET `/api/v1/households/district/:districtId` - Get households by district
- GET `/api/v1/households/with-residents` - Get households with resident information

### Regions
- GET `/api/v1/regions/counties` - Get all counties
- GET `/api/v1/regions/counties/:id` - Get county by ID
- GET `/api/v1/regions/counties/:countyId/districts` - Get districts by county
- GET `/api/v1/regions/districts/:id` - Get district details

## Error Handling

The API includes comprehensive error handling:
- Validation errors
- Database errors
- 404 Not Found
- 500 Internal Server Error

## Logging

Logs are stored in the `logs` directory:
- `error.log` - Error logs
- `combined.log` - All logs

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request 