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
  $(sidebarNav).addClass('sidebar-nav col-xs-12');
  this.populateNavigation(sidebarNav);
  return sidebarNav;
};

var arrayOfContent = [
  {name: 'Comments', glyphicon: 'glyphicon glyphicon-comment', id: ''},
  {name: 'Payments', glyphicon: 'glyphicon glyphicon-stats', id: ''},
  {name: 'Calendar', glyphicon: 'glyphicon glyphicon-calendar', id: ''}
]

ContentNavigation.prototype.populateNavigation = function(navigation) {
  for (i = 0; i < arrayOfContent.length; i++) {
    $(navigation).append(this.createNavElement(arrayOfContent [i,i,i].name,arrayOfContent [i,i,i].glyphicon,arrayOfContent [i,i,i].id));
  }
};

ContentNavigation.prototype.createNavElement = function(name,glyphicon,id) {
  var name = name;
  var glyphicon = glyphicon;
  var id = id;
  var navElementLi = document.createElement('li');
  $(navElementLi).addClass('list-group-item');
  if (id !== ''){
    $(navElementLi).attr('id', id);
  }
  var navElementA = document.createElement('a');
  var navElementSpan = document.createElement('span');
  $(navElementSpan).addClass(glyphicon);
  
  $(navElementLi).append(navElementA);
  $(navElementA).append(navElementSpan);
  $(navElementA).append(' ' + name);

  return navElementLi;
};
