require('dotenv').config();

const {
    DB_PORT,
    DB_HOST,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_TYPE
} = process.env;

module.exports = {
    "development": {
      "username": DB_USERNAME,
      "password": DB_PASSWORD,
      "database": DB_DATABASE,
      "host": DB_HOST,
      "dialect": DB_TYPE
    },
    "test": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_DATABASE,
        "host": DB_HOST,
        "dialect": DB_TYPE
    },
    "production": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_DATABASE,
        "host": DB_HOST,
        "dialect": DB_TYPE
    }
}