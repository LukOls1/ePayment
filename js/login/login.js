function Login(appState, apiClient) {
  this.appState = appState;
  this.apiClient = apiClient;
  this.dupa = 'dupa';
}

Login.prototype.login = function(username, password) {
  this.apiClient.login(
    username,
    password,
    $.proxy(app.loginProvider.loginResult, app.loginProvider)
  );
};

Login.prototype.loginResult = function(loginResultFromApi) {
  if (!loginResultFromApi.token) {
    console.log('Failure: ' + loginResultFromApi);
  } else {
    this.appState.token = loginResultFromApi.token;

    app.initView();
    app.render();
  }
};

Login.prototype.logout = function() {
  app.state.token = null;

  app.initView();
  app.render();
};
