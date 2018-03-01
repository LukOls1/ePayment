function ApiClient() {
  this.serverUrl = 'http://epaymentbema.pythonanywhere.com/';
}

ApiClient.prototype.setRequestHeadersAuth = function(request) {
  request.setRequestHeader(
    'Authorization',
    'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6IkhpcGV4IiwiZXhwIjoxNTE5OTg4MjY1LCJlbWFpbCI6IiJ9.mxr9KJtKE63g955Qf-2MdiyUhf1fxEDiFMpfNGiyUE8'
  );
  request.setRequestHeader('Content-Type', 'application/json');
};

ApiClient.prototype.setRequestHeaders = function(request) {
  request.setRequestHeader('Content-Type', 'application/json');
};

ApiClient.prototype.login = function(login, password, callback) {
  $.ajax({
    type: 'POST',
    url: this.serverUrl + 'api-token-auth/',
    beforeSend: this.setRequestHeaders,
    data: JSON.stringify({ username: login, password: password }),
    success: callback,
    error: callback
  });
};

ApiClient.prototype.getPosts = function(callback) {
  $.ajax({
    type: 'GET',
    url: this.serverUrl + 'posts/',
    beforeSend: this.setRequestHeadersAuth,
    success: function(data) {
      callback(data);
    }
  });
};

ApiClient.prototype.createPost = function(post, callback) {
  $.ajax({
    type: 'POST',
    url: this.serverUrl + 'posts/',
    beforeSend: this.setRequestHeadersAuth,
    data: JSON.stringify({ post: post }),
    success: function(data) {
      callback(data);
    }
  });
};

// ApiClient.prototype.login = function(login, password, callback) {
//   if (login === 'Kubix') {
//     loginResult = {};
//     loginResult.status = 'SUCCESS';
//     loginResult.data = { token: 'auth_token_001' };
//   } else {
//     loginResult = {};
//     loginResult.status = 'FAILURE';
//     loginResult.data = {
//       error:
//         'The information you entered does not match our records. Please verify your information.'
//     };
//   }
//   callback(loginResult);
// };
