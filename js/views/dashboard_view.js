function DashboardView() {
  this.mainContent = new PostsView();
}

DashboardView.prototype.render = function() {
  var element = document.createElement('div');
  var navigation = this.createNavigationElement();
  var mainContent = this.createMainContentElement();
  $(element).append(navigation);
  $(element).append(mainContent);
  $('#application').append(element);
  this.mainContent.render();
}

DashboardView.prototype.createNavigationElement = function() {
  var navigation = document.createElement('div');
  $(navigation).attr('id', 'navigation');
  $(navigation).append(this.createNavbarHeader());
  $(navigation).append(this.createTopBar());

  return navigation;
}
DashboardView.prototype.createTopBar = function() {
  var navigation = document.createElement('div');
  $(navigation).addClass('navbar navbar-inverse');
  $(navigation).append(this.createContainer());

  return navigation;
}

DashboardView.prototype.createContainer = function() {
  console.log('jajebe')
  var navigation = document.createElement('div');
  $(navigation).addClass('container-fluid');
  $(navigation).append(this.createNavbarHeader());

  return navigation;
}
DashboardView.prototype.createNavbarHeader = function() {
  var navigation = document.createElement('div');
  $(navigation).addClass('navbar-header');
  $(navigation).append(this.createLogo());

  return navigation;
}
DashboardView.prototype.createLogo = function() {
  var navigation = document.createElement('a');
  $(navigation).addClass('navbar-brand');
  $(navigation).text('ePayment');

  return navigation;
}
DashboardView.prototype.createNavbarTopNavbarList = function() {
  var navigation = document.createElement('ul');
  $(navigation).addClass('nav navbar-nav');
  $(navigation).append(this.createNavbarHome());
  $(navigation).append(this.createNavbarMessages());
  $(navigation).append(this.createNavbarPeople());

  return navigation;
}
DashboardView.prototype.createNavbarHome = function() {
  var navigation = document.createElement('li');
  $(navigation).addClass('active');
  $(navigation).text('Home');

  return navigation;
}
DashboardView.prototype.createNavbarMessages = function() {
  var navigation = document.createElement('li');
  $(navigation).text('Messages');

  return navigation;
}
DashboardView.prototype.createNavbarPeople = function() {
  var navigation = document.createElement('li');
  $(navigation).text('People');

  return navigation;
}
DashboardView.prototype.createMainContentElement = function() {
  var mainContent = document.createElement('div');
  $(mainContent).attr('id', 'mainContent');
  mainContent.innerText = "Main Content";
  return mainContent;
}
