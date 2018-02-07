function LoginView() {    /* konstruktor*/

}  

LoginView.prototype.render = function() {
  var login = document.createElement('div');
  $(login).addClass('container');
  $(login).append(this.createColumn());
  $('#application').append(login);
}
LoginView.prototype.createColumn = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12');
  $(login).append(this.createLogo());
  $(login).append(this.createRowLoginBox());

  return login;
}
LoginView.prototype.createLogo = function() {
  const login = document.createElement('div');
  $(login).addClass('logo');
  $(login).append('<img src="https://s16.postimg.org/3wg150ysl/download.jpg">');

  return login;
}
LoginView.prototype.createRowLoginBox = function() {
  const login = document.createElement('div');
  $(login).addClass('row loginbox');
  $(login).append(this.createSignInBox());
  $(login).append(this.createInputLoginBox());
  $(login).append(this.createInputPasswordBox());
  $(login).append(this.createSubmitButtonBox());

  return login;
}
LoginView.prototype.createSignInBox = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-12');
  $(login).append(this.createSignInSpan());

  return login;
}
LoginView.prototype.createSignInSpan = function() {
  const login = document.createElement('span');
  $(login).addClass('singtext');
  $(login).text("Sing in");

  return login;
}
LoginView.prototype.createInputLoginBox = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-12 col-md-12 col-sm-12');
  $(login).append(this.createInputLogin());

  return login;
}
LoginView.prototype.createInputLogin = function() {
  const login = document.createElement('input');
  $(login).addClass('form-control');
  $(login).attr("placeholder", "login");

  return login;
}
LoginView.prototype.createInputPasswordBox = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-12 col-md-12 col-sm-12');
  $(login).append(this.createInputPassword());

  return login;
}
LoginView.prototype.createInputPassword = function() {
  const login = document.createElement('input');
  $(login).addClass('form-control');
  $(login).append();
  $(login).attr("placeholder", "password");

  return login;
}
LoginView.prototype.createSubmitButtonBox = function() {
  const login = document.createElement('div');
  $(login).addClass('col-lg-12 col-md-12 col-sm-12');
  $(login).append(this.createSubmitButton());

  return login;
}
LoginView.prototype.createSubmitButton = function() {
  const login = document.createElement('button');
  $(login).addClass('btn submitButton');
  login.innerHTML = "Submit"
  $(login).append();

  return login;
}
