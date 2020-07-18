// Update with your config settings.
require("dotenv").config();
const path = require('path');

module.exports = {
  development: {
    client: process.env.DB_DEVELOPMENT_CLIENT,
    connection: {
      filename: process.env.DB_DEVELOPMENT_FILE
    },
    migrations: {
      directory: process.env.DB_DEVELOPMENT_MIGRATION
    },
    useNullAsDefault: true
  },

  staging: {
    client: process.env.DB_STAGING_CLIENT,
    connection: {
      database: process.env.DB_STAGING_DATABASE,
      user: process.env.DB_STAGING_USER,
      password: process.env.DB_STAGING_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: process.env.DB_STAGING_MIGRATION_TABLE
    }
  },

  production: {
    client: process.env.DB_PRODUCTION_CLIENT,
    connection: {
      host: process.env.DB_PRODUCTION_HOST,
      port: process.env.DB_PRODUCTION_PORT,
      database: process.env.DB_PRODUCTION_DATABASE,
      user: process.env.DB_PRODUCTION_USER,
      password: process.env.DB_PRODUCTION_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: process.env.DB_PRODUCTION_MIGRATION_TABLE
    }
  }
};
