function ApiClient() {

}

ApiClient.prototype.login = function(login, password, callback) {
  if (login === "Kubix") {
    loginResult = {};
    loginResult.status = "SUCCESS";
    loginResult.data = {token: "auth_token_001"};
  } else {
    loginResult = {};
    loginResult.status = "FAILURE";
    loginResult.data = {error: "The information you entered does not match our records. Please verify your information."};
  }
  callback(loginResult);
}
