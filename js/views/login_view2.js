function LoginView() {
  const login = document.createElement('div');
  $(login).addClass('container');
  $(login).append(createColumn());

  return login;
}
createColumn = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-4 col-md-6 col-sm-8');
  $(login).append(createLogo());
  $(login).append(createRowLoginBox());

  return login;
}
createLogo = function() {
  const login = document.createElement('div');
  $(login).addClass('logo');
  $(login).append('<img src="#">');

  return login;
}
createRowLoginBox = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-4 col-md-6 col-sm-8');
  $(login).append(createSignInBox());
  $(login).append(createInputLoginBox());
  $(login).append(createInputPasswordBox());
  $(login).append(createSubmitButtonBox());

  return login;
}
createSignInBox = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-12');
  $(login).append(createSignInSpan());

  return login;
}
createSignInSpan = function() {
  const login = document.createElement('span');
  $(login).addClass('signtext');
  $(login).append();

  return login;
}
createInputLoginBox = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-12 col-md-12 col-sm-12');
  $(login).append(createInputLogin());

  return login;
}
createInputLogin = function() {
  const login = document.createElement('input');
  $(login).addClass('form-control');
  $(login).append();

  return login;
}
createInputPasswordBox = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-12 col-md-12 col-sm-12');
  $(login).append(createInputPassword());

  return login;
}
createInputPassword = function() {
  const login = document.createElement('input');
  $(login).addClass('form-control');
  $(login).append();

  return login;
}
createSubmitButtonBox = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-12 col-md-12 col-sm-12');
  $(login).append(createSubmitButton);

  return login;
}
createSubmitButton = function() {
  const login = document.createElement('input');
  $(login).addClass('btn submitButton');
  login.innerHTML = "Submit"
  $(login).append();

  return login;
}


LoginView.prototype.render = function() {
  $('#application').append(LoginView);
}


LoginView.prototype.login = function() {
  app.api_client.login("kubix","pass",this.loginResult)
}

LoginView.prototype.loginResult = function(loginResult) {

}