var app;
$(document).ready(function() {
  app = new App();
  app.render()
});

function App() {
  this.state = new State();             /*przypisuje do pola state obiekt state  */
  this.apiClient = new ApiClient();     /*przypisuje do pola state obiekt apiclient  */
  this.currentView;                     /*przetrzymuje obiekt obecnego widoku  */
  this.initView();
}

App.prototype.initView = function() {
  if (this.state.isLoggedOn()){
    this.currentView = new DashboardView(); /*wywołanie konstruktora*/
  }
  else {
    this.currentView = new DashboardView();
  }
}

App.prototype.render = function() {
  this.currentView.render();

}
