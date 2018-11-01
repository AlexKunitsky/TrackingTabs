// import Api object based on axios
import Api from '@/services/Api'

// export js object to register end-point in backend (src/app.js)
export default {
  register (credentials) {
    // used Api and post method
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
