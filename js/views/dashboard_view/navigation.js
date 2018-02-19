function Navigation(parentId) {
  this.parentId = parentId;
  this.topNavigationId = 'topNavigation';
  this.contentNavigationId = 'contentNavigation';

  this.topNavigation = new TopNavigation(this.topNavigationId);
  this.contentNavigation = new ContentNavigation(this.contentNavigationId);
}

Navigation.prototype.render = function() {
  this.createNavigationContainers();
  this.topNavigation.render();
  this.contentNavigation.render();
};

Navigation.prototype.createNavigationContainers = function() {
  var topNavigation = document.createElement('div');
  $(topNavigation).attr('id', this.topNavigationId);
  $('#' + this.parentId).append(topNavigation);

  var contentNavigation = document.createElement('div');
  $(contentNavigation).attr('id', this.contentNavigationId);
  $('#' + this.parentId).append(contentNavigation);
};
