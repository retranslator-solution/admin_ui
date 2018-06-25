import * as axios from 'axios'

export class ResourceService {
  static saveResource (resource) {
    return axios.post('/retranslator/v1/resources/', resource)
  }

  static async getListResources () {
    const response = await axios.get('/retranslator/v1/resources/')
    return response.data
  }

  static async getResource (resourceName) {
    const response = await axios.get('/retranslator/v1/resources/' + resourceName)
    return response.data
  }
}
