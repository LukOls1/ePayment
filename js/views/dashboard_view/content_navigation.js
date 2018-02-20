function ContentNavigation(parentId) {
  this.parentId = parentId;
  this.content = [
    { name: 'Comments', glyphicon: 'glyphicon glyphicon-comment', id: '' },
    { name: 'Payments', glyphicon: 'glyphicon glyphicon-stats', id: '' },
    { name: 'Calendar', glyphicon: 'glyphicon glyphicon-calendar', id: '' }
  ];
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
  $(sidebarNav).addClass('dashboard-nav');
  $(sidebarNav).addClass('sidebar-nav col-xs-12');
  this.populateNavigation(sidebarNav);
  return sidebarNav;
};

ContentNavigation.prototype.populateNavigation = function(navigation) {
  for (i = 0; i < this.content.length; i++) {
    $(navigation).append(this.createNavElement(this.content[i]));
  }
};

ContentNavigation.prototype.createNavElement = function(elementData) {
  var name = elementData.name;
  var glyphicon = elementData.glyphicon;
  var id = elementData.id;
  var navElementLi = document.createElement('li');
  $(navElementLi).addClass('list-group-item dashboard-nav');
  if (id !== '') {
    $(navElementLi).attr('id', id);
  }
  var navElementA = document.createElement('a');
  $(navElementLi).addClass('list-group-item text-center');

  var navElementSpan = document.createElement('span');
  $(navElementSpan).addClass(glyphicon);

  $(navElementLi).append(navElementA);
  $(navElementA).append(navElementSpan);
  $(navElementA).append(' ' + name);

  return navElementLi;
};
