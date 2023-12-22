require("dotenv").config();

const config = {
  API_ROOT: process.env.API_ROOT,
  // MONGODB_URI: process.env.MONGODB_URI_DEV,
  MONGODB_URI: process.env.MONGODB_URI_PROD,
  PORT: process.env.PORT || 8080,
  SECRET_KEY: process.env.JWT_SECRET_KEY,
};

module.exports = config;
