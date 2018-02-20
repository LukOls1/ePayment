function PaymentDashboard(parentId) {
  this.parentId = parentId;
}

PaymentDashboard.prototype.render = function() {
  var paymentsDashboard = this.createPaymentsDashboard();
  $('#' + this.parentId).append(paymentsDashboard);
};

PaymentDashboard.prototype.createPaymentsDashboard = function() {
  var container = document.createElement('div');
  $(container).addClass('container-fluid');
  var row = document.createElement('div');
  $(row).addClass('row');
  $(container).append(row);

  var dashboard = document.createElement('div');
  $(dashboard).addClass('dev-border');

  for (i = 0; i < 4; i++) {
    $(dashboard).append(this.createDashboardElement());
  }

  $(row).append(dashboard);
  return container;
};

PaymentDashboard.prototype.createDashboardElement = function() {
  var dbElement = document.createElement('div');
  $(dbElement).addClass('well col-sm-3');
  $(dbElement).append(
    '<img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/10_pie_chart.svg" alt="Lights" style="width:90%">'
  );
  return dbElement;
};
