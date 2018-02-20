function PaymentsView(parentId) {
  this.parentId = parentId;
  this.paymentsListId = 'paymentsList';
  this.paymentDashboardId = 'paymentDashboard';

  this.paymentsList = new PaymentsList(this.paymentsListId);
  this.paymentDashboard = new PaymentDashboard(this.paymentDashboardId);
}

PaymentsView.prototype.render = function() {
  var paymetsViewWrappers = this.createPaymentsViewWrappers();
  $('#' + this.parentId).append(paymetsViewWrappers);
  this.paymentsList.render();
  this.paymentDashboard.render();
};

PaymentsView.prototype.createPaymentsViewWrappers = function() {
  var wrapper = document.createElement('div');
  $(wrapper).addClass('dev-border');
  $(wrapper).append(this.createPaymentsDashboardWrapper());
  $(wrapper).append(this.createPaymentsListWrapper());
  return wrapper;
};

PaymentsView.prototype.createPaymentsListWrapper = function() {
  var listWrapper = document.createElement('div');
  $(listWrapper).attr('id', this.paymentsListId);
  return listWrapper;
};

PaymentsView.prototype.createPaymentsDashboardWrapper = function() {
  var dashboardWrapper = document.createElement('div');
  $(dashboardWrapper).attr('id', this.paymentDashboardId);
  return dashboardWrapper;
};
