// API utility for Digital Farmer Twin
import config from '../config';

const API_BASE_URL = config.API_BASE_URL;

// API endpoints
export const API_ENDPOINTS = {
  // Auth
  REGISTER: '/api/auth/register',
  LOGIN: '/api/auth/login',
  ME: '/api/auth/me',

  // AI Features
  ASK_TWIN: '/api/ask-twin',
  ANALYZE_EMOTION: '/api/analyze-emotion',
  ANALYZE_VOICE_EMOTION: '/api/analyze-voice-emotion',
  WHAT_IF_VIEW: '/api/what-if-view',

  // Cold Storage
  COLD_STORAGE_SEARCH: '/api/cold-storage/search',
  COLD_STORAGE_ROUTE: '/api/cold-storage/route',

  // Intrusion Detection
  INTRUSION_REPORT: '/api/intrusion/report',
  INTRUSION_STREAM: '/api/intrusion/stream',

  // Push Notifications
  PUSH_SUBSCRIBE: '/api/push/subscribe',
  PUSH_VAPID_KEY: '/api/push/vapid-public-key',

  // Weather
  WEATHER_CURRENT: '/api/weather/current',
  WEATHER_FORECAST: '/api/weather/forecast',
  WEATHER_ADVICE: '/api/weather/advice',

  // User
  UPLOAD_PROFILE: '/api/user/upload-profile',

  // Health Check
  HEALTH: '/api/health'
};

// Helper function to build full URL
export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Export base URL for direct usage
export { API_BASE_URL };
export default API_BASE_URL;
