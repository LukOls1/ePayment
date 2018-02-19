function TopNavigation(parentId) {
  this.parentId = parentId;
}

TopNavigation.prototype.render = function() {
  var topBar = this.createTopNavigation();
  $('#' + this.parentId).append(topBar);
};

TopNavigation.prototype.createTopNavigation = function() {
  var topNavigation = document.createElement('div');
  $(topNavigation).addClass('navbar');
  $(topNavigation).append(this.createTopNav());
  $(topNavigation).append(this.createToggleButton());
  //$(navigation).append(this.createColapseButtonLeft());
  return topNavigation;
};

TopNavigation.prototype.createToggleButton = function() {
  var toggleBtn = document.createElement('div');
  $(toggleBtn).addClass('navbar-default visible-xs btn');
  $(toggleBtn).append('Menu');
  $(toggleBtn).click(this.toggleNav);
  return toggleBtn;
};

TopNavigation.prototype.toggleNav = function() {
  $('#contentNav-wrapper').toggleClass('hidden-xs');
};

TopNavigation.prototype.createTopNav = function() {
  var navigation = document.createElement('div');
  $(navigation).addClass('navbar-inverse container-fluid');
  $(navigation).append(this.createNavbarHeader());
  $(navigation).append(this.createColapseContainer());

  return navigation;
};

TopNavigation.prototype.createNavbarHeader = function() {
  var navigation = document.createElement('div');
  var collapseButton = document.createElement('button');
  var glyphiconSpan = document.createElement('span');
  $(glyphiconSpan).addClass('glyphicon glyphicon-chevron-down');
  $(glyphiconSpan).attr('style', 'color: white;');
  $(glyphiconSpan).attr('id', 'changeSpan');
  $(collapseButton).addClass('navbar-toggle turnWhite');
  $(collapseButton).attr('data-toggle', 'collapse');
  $(collapseButton).attr('data-target', '#collapseNavTop');
  $(collapseButton).attr('id', 'collapseBut');
  $(collapseButton).attr('aria-expanded', 'false');
  $(collapseButton).append(glyphiconSpan);
  $(navigation).addClass('navbar-header');
  $(navigation).append(collapseButton);
  $(navigation).append(this.createLogo());

  $(collapseButton).click(function() {
    if (glyphiconSpan.classList.contains('glyphicon-chevron-down')) {
      glyphiconSpan.classList.remove('glyphicon-chevron-down');
      glyphiconSpan.classList.add('glyphicon-chevron-up');
    } else if (glyphiconSpan.classList.contains('glyphicon-chevron-up')) {
      glyphiconSpan.classList.remove('glyphicon-chevron-up');
      glyphiconSpan.classList.add('glyphicon-chevron-down');
    }
  });

  return navigation;
};

TopNavigation.prototype.createLogo = function() {
  var navigation = document.createElement('a');
  $(navigation).addClass('navbar-brand');
  $(navigation).text('ePayment');

  return navigation;
};

TopNavigation.prototype.createColapseContainer = function() {
  var navigation = document.createElement('div');
  $(navigation).addClass('collapse navbar-collapse');
  $(navigation).attr('id', 'collapseNavTop');
  $(navigation).append(this.createNavbarTopNavbarList());
  $(navigation).append(this.createNavbarRight());

  return navigation;
};

TopNavigation.prototype.createNavbarTopNavbarList = function() {
  var navigation = document.createElement('ul');
  $(navigation).addClass('nav navbar-nav');
  $(navigation).append(this.createNavbarHome());
  $(navigation).append(this.createNavbarMessages());
  $(navigation).append(this.createNavbarPeople());

  return navigation;
};

TopNavigation.prototype.createNavbarRight = function() {
  var navigation = document.createElement('ul');
  $(navigation).addClass('nav navbar-nav navbar-right');
  $(navigation).append(this.createNavbarProfile());
  $(navigation).append(this.createNavbarLogOut());

  return navigation;
};

TopNavigation.prototype.createNavbarHome = function() {
  var navigation = document.createElement('li');
  var homeA = document.createElement('a');
  $(homeA).text('Home');
  $(navigation).append(homeA);
  return navigation;
};

TopNavigation.prototype.createNavbarProfile = function() {
  var navigation = document.createElement('li');
  var profileA = document.createElement('a');
  var profileSpan = document.createElement('span');
  $(profileSpan).addClass('glyphicon glyphicon-user');
  $(profileA).append(profileSpan);
  $(profileA).append(' Profile');
  $(navigation).append(profileA);

  return navigation;
};

TopNavigation.prototype.createNavbarLogOut = function() {
  var navigation = document.createElement('li');
  var logOutA = document.createElement('a');
  var logOutSpan = document.createElement('span');
  $(logOutSpan).addClass('glyphicon glyphicon-log-out');
  $(logOutA).append(logOutSpan);
  $(logOutA).append(' Log out');
  $(navigation).append(logOutA);

  return navigation;
};

TopNavigation.prototype.createNavbarMessages = function() {
  var navigation = document.createElement('li');
  var messagesA = document.createElement('a');
  var badgeSpan = document.createElement('span');
  $(badgeSpan).addClass('label label-danger');
  $(badgeSpan).text('13');
  $(messagesA).text('Messages ');
  $(messagesA).append(badgeSpan);
  $(navigation).append(messagesA);

  return navigation;
};
TopNavigation.prototype.createNavbarPeople = function() {
  var navigation = document.createElement('li');
  var peopleA = document.createElement('a');
  var badgeSpan = document.createElement('span');
  $(badgeSpan).addClass('label label-danger');
  $(badgeSpan).text('26');
  $(peopleA).text('People ');
  $(peopleA).append(badgeSpan);
  $(navigation).append(peopleA);

  return navigation;
};
TopNavigation.prototype.createNavbarRight = function() {
  var navigation = document.createElement('ul');
  $(navigation).addClass('nav navbar-nav navbar-right');
  $(navigation).append(this.createNavbarProfile());
  $(navigation).append(this.createNavbarLogOut());

  return navigation;
};
