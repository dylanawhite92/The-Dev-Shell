import axios from "axios";

// If there is a token in local storage, set it in global headers
// Else if not a token, delete it from global headers

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
