var app;
$(document).ready(function() {
  app = new App();
  app.render()
});

function App() {
  this.state = new State();
  this.apiClient = new ApiClient();
  this.dashboardView;
  this.currentView;
  this.initView();
}

App.prototype.initView = function() {
  if (this.state.isLoggedOn()){
    this.currentView = new DashboardView();
  }
  else {
    this.currentView = new LoginView();
  }
}

App.prototype.render = function() {
  this.currentView.render();

}
