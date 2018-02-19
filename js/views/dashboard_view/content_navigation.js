function ContentNavigation(parentId) {
  this.parentId = parentId;
}

ContentNavigation.prototype.render = function() {
  var contentNav = this.createContentNavigation();
  // var toggleButton = this.createToggleButton();
  // $('#' + this.parentId).append(toggleButton);
  $('#' + this.parentId).append(contentNav);
};

ContentNavigation.prototype.createContentNavigation = function() {
  var contentNav = this.createWrapper();
  return contentNav;
};

ContentNavigation.prototype.createWrapper = function() {
  var navWrapper = document.createElement('div');
  $(navWrapper).attr('id', 'contentNav-wrapper');
  $(navWrapper).addClass('col-sm-3 hidden-xs');
  $(navWrapper).append(this.createNavSpy());

  return navWrapper;
};

ContentNavigation.prototype.createNavSpy = function() {
  var navSpy = document.createElement('nav');
  $(navSpy).attr('id', 'spy');
  $(navSpy).append(this.createSidebarNav());
  return navSpy;
};

ContentNavigation.prototype.createSidebarNav = function() {
  var sidebarNav = document.createElement('ul');
  $(sidebarNav).addClass('sidebar-nav nav');
  this.populateNavigation(sidebarNav);
  return sidebarNav;
};

ContentNavigation.prototype.populateNavigation = function(navigation) {
  for (i = 0; i < 6; i++) {
    $(navigation).append(this.createNavElement('Title ' + i));
  }
};

ContentNavigation.prototype.createNavElement = function(title) {
  var navElementLi = document.createElement('li');
  var navElementA = document.createElement('a');
  var navElementSpan = document.createElement('span');
  $(navElementSpan).addClass('fa fa-anchor solo');
  $(navElementSpan).append(title);

  $(navElementA).append(navElementSpan);
  $(navElementLi).append(navElementA);

  return navElementLi;
};
