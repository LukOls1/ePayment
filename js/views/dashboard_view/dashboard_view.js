function DashboardView() {
  this.mainContentId = 'mainContent';
  this.navigation = new Navigation('navigation');
  this.mainContent = new PaymentsView(this.mainContentId);
}

DashboardView.prototype.render = function() {
  var element = document.createElement('div');
  var navigation = this.createNavigationElement();
  var row = this.createRowNavbarLeftMainContent();
  var mainContent = this.createMainContentElement();
  $(row).append(mainContent);
  $(element).append(navigation);
  $(element).append(row);
  $('#application').append(element);
  this.navigation.render();
  this.mainContent.render();
};

DashboardView.prototype.createNavigationElement = function() {
  var navigation = document.createElement('div');
  $(navigation).attr('id', 'navigation');
  return navigation;
};

DashboardView.prototype.createRowNavbarLeftMainContent = function() {
  var navigation = document.createElement('div');
  $(navigation).addClass('row');
  var row = document.createElement('div');
  $(navigation).addClass('container-fluid');
  $(navigation).append(row);

  return navigation;
};
DashboardView.prototype.createContentNavigation = function() {
  var navigationL = document.createElement('div');
  $(navigationL).attr('id', 'contentNavigation');
  $(navigationL).append(this.createNavbarLeft());

  return navigationL;
};
DashboardView.prototype.createNavbarLeft = function() {
  var navigationL = document.createElement('ul');
  $(navigationL).attr('id, navLeft');
  $(navigationL).addClass(
    'col-lg-3 col-md-3 col-sm-3 collapse navbar-collapse nav-sidebar'
  );
  $(navigationL).append(this.createNavbarLeftComments());
  $(navigationL).append(this.createNavbarLeftPayments());
  $(navigationL).append(this.createNavbarLeftCalendar());
  $(navigationL).append(this.createNavbarLeftStuff());

  return navigationL;
};
DashboardView.prototype.createNavbarLeftComments = function() {
  var navigationL = document.createElement('a');
  var commentsSpan = document.createElement('span');
  $(commentsSpan).addClass('glyphicon glyphicon-comment');
  $(navigationL).addClass('list-group-item');
  $(navigationL).append(commentsSpan);
  $(navigationL).append(' Comments');

  return navigationL;
};
DashboardView.prototype.createNavbarLeftPayments = function() {
  var navigationL = document.createElement('a');
  var paymentSpan = document.createElement('span');
  $(paymentSpan).addClass('glyphicon glyphicon-stats');
  $(navigationL).addClass('list-group-item');
  $(navigationL).append(paymentSpan);
  $(navigationL).append(' Payments');

  return navigationL;
};
DashboardView.prototype.createNavbarLeftCalendar = function() {
  var navigationL = document.createElement('a');
  var calendarSpan = document.createElement('span');
  $(calendarSpan).addClass('glyphicon glyphicon-calendar');
  $(navigationL).addClass('list-group-item');
  $(navigationL).append(calendarSpan);
  $(navigationL).append(' Calendar');

  return navigationL;
};
DashboardView.prototype.createNavbarLeftStuff = function() {
  var navigationL = document.createElement('a');
  var stuffSpan = document.createElement('span');
  $(stuffSpan).addClass('glyphicon glyphicon-question-sign');
  $(navigationL).addClass('list-group-item');
  $(navigationL).append(stuffSpan);
  $(navigationL).append(' Some stuff');

  return navigationL;
};
DashboardView.prototype.createColapseButtonLeft = function() {
  var navigationL = document.createElement('div'); //not button
  var buttonSpan = document.createElement('span');

  $(navigationL).addClass('navbar-default navbar'); //button as another navbar

  $(buttonSpan).addClass('glyphicon glyphicon glyphicon-chevron-down');
  $(navigationL).addClass(
    'sidebar-toggle col-xs-12 hidden-lg hidden-md hidden-sm text-center '
  );
  $(navigationL).attr('id', 'sideCollapseButton');
  $(navigationL).attr('data-toggle', 'collapse');
  $(navigationL).attr('data-target', '.nav-sidebar');
  $(navigationL).append(buttonSpan);
  $(navigationL).append(this.createContentNavigation());
  $(navigationL).click(function() {
    $('.nav-sidebar').removeClass('hidden-xs');
    if (buttonSpan.classList.contains('glyphicon-chevron-down')) {
      buttonSpan.classList.remove('glyphicon-chevron-down');
      buttonSpan.classList.add('glyphicon-chevron-up');
    } else if (buttonSpan.classList.contains('glyphicon-chevron-up')) {
      buttonSpan.classList.remove('glyphicon-chevron-up');
      buttonSpan.classList.add('glyphicon-chevron-down');
    }
  });

  return navigationL;
};

DashboardView.prototype.createMainContentElement = function() {
  var mainContent = document.createElement('div');
  $(mainContent).addClass('col-sm-9 col-xs-12');
  $(mainContent).attr('id', this.mainContentId);
  return mainContent;
};
