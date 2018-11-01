// axios for connecting client with server
import axios from 'axios'

// used axios module to connect client and server endpoints by url
export default () => {
  // point to backend url
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
