import axios from "axios";

class AgentsApi {
// getMovies = (values: string) => {
//     return this.apiClient.get(ENDPOINTS.MOVIES);  
// }
  async getAgents() {
      const response = await axios.get('/agents/')
      return (response.data)
    }
}

export const agentsApi: any = new AgentsApi(); 