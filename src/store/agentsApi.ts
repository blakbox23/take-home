import axios from "axios";

class AgentsApi {

  async getAgents() {
      const response = await axios.get('/agents/')
      return (response.data)
    }

  async getAgentById(id:string | number){
      const response = await axios.get(`/agents/${id}`)
      return (response.data)
  }
  
  //  async searchAgents(){
  //     const response = await axios.get('/search')
  //     return (response.data)
  // }
}


export const agentsApi: any = new AgentsApi(); 