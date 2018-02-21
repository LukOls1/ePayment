function PaymentsList(parentId) {
  this.parentId = parentId;
}

PaymentsList.prototype.render = function() {
  var paymetsList = this.createPaymentsList();
  $('#' + this.parentId).append(paymetsList);
};

PaymentsList.prototype.createPaymentsList = function() {
  console.log('PaymentsList create');
  var list = document.createElement('ul');
  $(list).addClass(' panel panel-default list-group dev-border');

  $(list).append(this.createPaymentsListTitle());

  $(list).append(this.createPaymentsListHeader());
  for (i = 0; i < 4; i++) {
    $(list).append(this.createPaymentsListElement('Element 1'));
  }
  return list;
};

PaymentsList.prototype.createPaymentsListTitle = function() {
  var panel = document.createElement('div');
  $(panel).addClass('panel-heading');
  $(panel).append('Payments list');

  return panel;
};

PaymentsList.prototype.createPaymentsListHeader = function() {
  var container = document.createElement('div');
  $(container).addClass('container-fluid');

  var row = document.createElement('div');
  $(row).addClass('row');
  $(container).append(row);

  var listHeader = document.createElement('h4');
  $(listHeader).addClass('list-group-item-heading dev-border');
  $(listHeader).append(this.createHeaderElement('Title'));
  $(listHeader).append(this.createHeaderElement('Progress'));
  $(listHeader).append(this.createHeaderElement('Status'));

  $(row).append(listHeader);
  return container;
};

PaymentsList.prototype.createHeaderElement = function(elementData) {
  var headerElement = document.createElement('div');
  $(headerElement).addClass('col-sm-4 col-xs-4 dev-border');
  $(headerElement).append(elementData);
  return headerElement;
};

PaymentsList.prototype.createPaymentsListElement = function(elementData) {
  var elementWrapper = document.createElement('div');
  $(elementWrapper).addClass('row');
  var element = document.createElement('a');
  $(element).addClass('list-group-item');

  var title = this.createPaymentTitle('lololol');
  var proggressBar = this.createPaymentProgress(120, 280);

  $(elementWrapper).append(title);
  $(elementWrapper).append(proggressBar);

  $(element).append(elementWrapper);
  return element;
};

PaymentsList.prototype.createPaymentTitle = function(title) {
  var titleDiv = document.createElement('div');
  $(titleDiv).addClass('col-sm-4 col-xs-4 dev-border');
  $(titleDiv).append(title);
  return titleDiv;
};

PaymentsList.prototype.createPaymentProgress = function(paid, toPay) {
  var progressWrapper = document.createElement('div');
  $(progressWrapper).addClass('col-sm-6 col-xs-6 dev-border');

  var progress = document.createElement('div');
  $(progress).addClass('progress');

  var progressBarPaid = this.createPaymentProgressBarPaid(paid, toPay);
  var progressBarToPay = this.createPaymentProgressBarToPay(paid, toPay);

  $(progress).append(progressBarPaid);
  $(progress).append(progressBarToPay);

  $(progressWrapper).append(progress);
  return progressWrapper;
};

PaymentsList.prototype.createProgressBar = function() {
  var progressBar = document.createElement('div');
  $(progressBar).addClass('progress-bar');
  $(progressBar).attr('role', 'progressbar');
  $(progressBar).attr('aria-valuenow', '0');
  $(progressBar).attr('aria-valuemin', '0');
  $(progressBar).attr('aria-valuemax', '0');
  $(progressBar).attr('style', 'width: 40%');
  return progressBar;
};

PaymentsList.prototype.createPaymentProgressBarPaid = function(paid, toPay) {
  var progressProcents = Math.round(paid / toPay * 100);
  var paidBar = this.createProgressBar();
  $(paidBar).addClass('progress-bar-striped active');
  $(paidBar).attr('style', 'width: ' + progressProcents + '%');
  $(paidBar).append(paid);
  return paidBar;
};

PaymentsList.prototype.createPaymentProgressBarToPay = function(paid, toPay) {
  var progressProcents = 100 - Math.round(paid / toPay * 100);
  var toPayBar = this.createProgressBar();
  $(toPayBar).addClass('progress-bar-warning');
  $(toPayBar).attr('style', 'width: ' + progressProcents + '%');
  $(toPayBar).append(toPay - paid);
  return toPayBar;
};
