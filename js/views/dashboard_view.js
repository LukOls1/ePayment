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
  navigation.innerText = "Navigation";
  return navigation;
}

DashboardView.prototype.createMainContentElement = function() {
  var mainContent = document.createElement('div');
  $(mainContent).attr('id', 'mainContent');
  mainContent.innerText = "Main Content";
  return mainContent;
}
