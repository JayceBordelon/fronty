
export const apiHelper = async (endpoint, method = 'GET', body = null, customHeaders = {}) => {
    const BASE_SERVER_URL = "http://localhost:3000";
  
    const headers = {
      'Content-Type': 'application/json',
      ...customHeaders, // Spread in custom headers
    };
  
    const config = {
      method: method,
      headers: headers,
    };
  
    if (body) {
      config.body = JSON.stringify(body);
    }
  
    try {
      const response = await fetch(`${BASE_SERVER_URL}/${endpoint}`, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // or response.text() if your API sends non-JSON data
    } catch (error) {
      console.error('Error in apiHelper:', error);
      throw error; // Re-throw to let the calling function handle it
    }
  }
  