// API Configuration for Digital Farmer Twin
const config = {
  // API Base URL - defaults to localhost for development
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',

  // Environment
  NODE_ENV: import.meta.env.NODE_ENV || 'development',
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development'
};

// Validate configuration
if (!config.API_BASE_URL) {
  console.warn('Warning: API_BASE_URL not set, using default localhost:5000');
}

export default config;
