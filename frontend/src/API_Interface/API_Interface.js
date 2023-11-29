import axios from 'axios';

/**
 * Configures Axios with common settings for API requests.
 */
const configureAxios = () => {
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  // axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api/';
  axios.defaults.baseURL ='http://localhost:8000/api';
  axios.defaults.withCredentials = true;  // Set to true if you need to send cookies for auth
};

configureAxios();

/**
 * Represents the interface for communicating with the API.
 */
export default class APIInterface {

  /**
   * Logs in a user.
   * 
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {Promise<Object>} - A promise that resolves with the user information or an error.
   */
  async login(email, password) {
    try {
      const response = await axios.post('/user/login/', { email, password });
      return response.data;
    } catch (error) {
      console.error(`Login error: ${error}`);
      throw error;
    }
  }

  /**
   * Fetches a user by their ID.
   * 
   * @param {string} id - The user's ID.
   * @returns {Promise<Object>} - A promise that resolves with user data.
   */
  async getUserById(id) {
    try {
      const response = await axios.get(`user/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user by ID: ${error}`);
      throw error;
    }
  }



    /**
   * Registers a new user.
   * 
   * @param {Object} userData - The user's data.
   * @returns {Promise<Object>} - A promise that resolves with the registration response or an error.
   */
    async register(userData) {
      try {
        const response = await axios.post('/user/register', userData);
        return response.data;
      } catch (error) {
        console.error(`Registration error: ${error}`);
        throw error;
      }
    }


    async createListing(listingData) {
      try {
        const response = await this.api.post('/listing/create', listingData);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  
    // Get a specific listing by its ID
    async getListingById(listingId) {
      try {
        const response = await this.api.get(`/listing/ ${listingId}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  
    // Update a specific listing by its ID
    async updateListing(listingId, updatedData) {
      try {
        const response = await this.api.put(`listing/${listingId}/update`, updatedData);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  
    // Delete a specific listing by its ID
    async deleteListing(listingId) {
      try {
        const response = await this.api.delete(`/listing/${listingId}/delete`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  
    // List all listings
    async listListings() {
      try {
        const response = await this.api.get('/listing/list');
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  // Add more methods as needed...
}

