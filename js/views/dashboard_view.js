function DashboardView() {
  this.mainContent = new PostsView();
}

DashboardView.prototype.render = function() {
  var element = document.createElement('div');
  var navigation = this.createNavigationElement();
  var row = this.createRowNavbarLeftMainContent();
  var navigationLeft = this.createNavbarLeft();
  var mainContent = this.createMainContentElement();
  $(row).append(navigationLeft);
  $(row).append(mainContent);
  $(element).append(navigation);
  $(element).append(row);
  $('#application').append(element);
  this.mainContent.render();
}

DashboardView.prototype.createNavigationElement = function() {
  var navigation = document.createElement('div');
  $(navigation).attr('id', 'navigation');
  $(navigation).append(this.createTopBar());
  $(navigation).append(this.createRowNavbarLeftMainContent());
  

  return navigation;
}
DashboardView.prototype.createTopBar = function() {
  var navigation = document.createElement('div');
  $(navigation).addClass('navbar navbar-inverse');
  $(navigation).append(this.createContainer());

  return navigation;
}

DashboardView.prototype.createContainer = function() {
  var navigation = document.createElement('div');
  $(navigation).addClass('container-fluid');
  $(navigation).append(this.createNavbarHeader());
  $(navigation).append(this.createNavbarTopNavbarList());
  $(navigation).append(this.createNavbarRight());
  

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
  var homeA = document.createElement('a');
  $(homeA).text('Home');
  $(navigation).append(homeA);
  return navigation;
}
DashboardView.prototype.createNavbarMessages = function() {
  var navigation = document.createElement('li');
  var messagesA = document.createElement('a');
  var badgeSpan = document.createElement ('span');
  $(badgeSpan).addClass('label label-danger');
  $(badgeSpan).text('13');
  $(messagesA).text('Messages ');
  $(messagesA).append(badgeSpan);
  $(navigation).append(messagesA);

  return navigation;
}
DashboardView.prototype.createNavbarPeople = function() {
  var navigation = document.createElement('li');
  var peopleA = document.createElement('a');
  var badgeSpan = document.createElement ('span');
  $(badgeSpan).addClass('label label-danger');
  $(badgeSpan).text('26');
  $(peopleA).text('People ');
  $(peopleA).append(badgeSpan);
  $(navigation).append(peopleA);

  return navigation;
}
DashboardView.prototype.createNavbarRight = function() {
  var navigation = document.createElement('ul');
  $(navigation).addClass('nav navbar-nav navbar-right');
  $(navigation).append(this.createNavbarProfile());
  $(navigation).append(this.createNavbarLogOut());
  
  return navigation;
}
DashboardView.prototype.createNavbarProfile = function() {
  var navigation = document.createElement('li');
  var profileA = document.createElement('a');
  var profileSpan = document.createElement('span');
  $(profileSpan).addClass('glyphicon glyphicon-user');
  $(profileA).append(profileSpan);
  $(profileA).append(' Profile');
  $(navigation).append(profileA);

  return navigation;
}
DashboardView.prototype.createNavbarLogOut = function() {
  var navigation = document.createElement('li');
  var logOutA = document.createElement('a');
  var logOutSpan = document.createElement('span');
  $(logOutSpan).addClass('glyphicon glyphicon-log-out');
  $(logOutA).append(logOutSpan);
  $(logOutA).append(' Log out');
  $(navigation).append(logOutA);
  
  return navigation;
}
DashboardView.prototype.createRowNavbarLeftMainContent = function() {
  var navigation = document.createElement('div');
  $(navigation).addClass('row');
  var row = document.createElement('div');
  $(navigation).addClass('container-fluid');
  $(navigation).append(row);
  
  return navigation;
}
DashboardView.prototype.createNavbarLeft = function() {
  var navigationL = document.createElement('ul');
  $(navigationL).addClass('col-lg-3 col-md-3 col-sm-3 nav-sidebar');
  $(navigationL).append(this.createNavbarLeftComments());
  $(navigationL).append(this.createNavbarLeftPayments());
  $(navigationL).append(this.createNavbarLeftCalendar());
  $(navigationL).append(this.createNavbarLeftStuff());
  
  return navigationL;
}
DashboardView.prototype.createNavbarLeftComments = function() {
  var navigationL = document.createElement('a');
  var commentsSpan = document.createElement('span');
  $(commentsSpan).addClass('glyphicon glyphicon-comment');
  $(navigationL).addClass('list-group-item');
  $(navigationL).append(commentsSpan);
  $(navigationL).append(' Comments');
  
  return navigationL;
}
DashboardView.prototype.createNavbarLeftPayments = function() {
  var navigationL = document.createElement('a');
  var paymentSpan = document.createElement('span');
  $(paymentSpan).addClass('glyphicon glyphicon-stats');
  $(navigationL).addClass('list-group-item');
  $(navigationL).append(paymentSpan);
  $(navigationL).append(' Payments');
  
  return navigationL;
}
DashboardView.prototype.createNavbarLeftCalendar = function() {
  var navigationL = document.createElement('a');
  var calendarSpan = document.createElement('span');
  $(calendarSpan).addClass('glyphicon glyphicon-calendar');
  $(navigationL).addClass('list-group-item');
  $(navigationL).append(calendarSpan);
  $(navigationL).append(' Calendar');
  
  return navigationL;
}
DashboardView.prototype.createNavbarLeftStuff = function() {
  var navigationL = document.createElement('a');
  var stuffSpan = document.createElement('span');
  $(stuffSpan).addClass('glyphicon glyphicon-question-sign');
  $(navigationL).addClass('list-group-item');
  $(navigationL).append(stuffSpan);
  $(navigationL).append(' Some stuff');
  
  return navigationL;
}
DashboardView.prototype.createMainContentElement = function() {
  var mainContent = document.createElement('div');
  $(mainContent).attr('id', 'mainContent');
  mainContent.innerText = "Main Content";
  return mainContent;
}
