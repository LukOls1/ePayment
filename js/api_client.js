function ApiClient() {
  this.serverUrl = 'http://epaymentbema.pythonanywhere.com/';
}

ApiClient.prototype.setRequestHeaders = function(request) {
  request.setRequestHeader(
    'Authorization',
    'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6IkhpcGV4IiwiZXhwIjoxNTE5NzQ3MTg3LCJlbWFpbCI6IiJ9.3NGmQrklMpKUfTwN1K-ZAEFthczA3w-iAGg-AZlG2xE'
  );
  request.setRequestHeader('Content-Type', 'application/json');
};

ApiClient.prototype.getPosts = function(callback) {
  $.ajax({
    type: 'GET',
    url: this.serverUrl + 'posts/',
    beforeSend: this.setRequestHeaders,
    success: function(data) {
      callback(data);
    }
  });
};

ApiClient.prototype.createPost = function(post, callback) {
  $.ajax({
    type: 'POST',
    url: this.serverUrl + 'posts/',
    beforeSend: this.setRequestHeaders,
    data: JSON.stringify({ post: post }),
    success: function(data) {
      callback(data);
    }
    // error: function(ajaxContext) {
    //   callback(ajaxContext.responseText);
    // }
  });
};

ApiClient.prototype.login = function(login, password, callback) {
  if (login === 'Kubix') {
    loginResult = {};
    loginResult.status = 'SUCCESS';
    loginResult.data = { token: 'auth_token_001' };
  } else {
    loginResult = {};
    loginResult.status = 'FAILURE';
    loginResult.data = {
      error:
        'The information you entered does not match our records. Please verify your information.'
    };
  }
  callback(loginResult);
};
