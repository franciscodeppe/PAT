import axios from "axios";

export default {
  getUser: function() {
    return axios.get('/getUser');
  },
  auth: function(email, pass) {
    return axios.post('/api/login/email/pass');
  }
};
