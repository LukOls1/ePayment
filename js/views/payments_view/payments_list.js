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
  $(list).addClass('list-group dev-border');
  $(list).append('Lista');
  $(list).append(this.createPaymentsListHeader());
  for (i = 0; i < 4; i++) {
    $(list).append(this.createPaymentsListElement('Element 1'));
  }
  return list;
};

PaymentsList.prototype.createPaymentsListHeader = function() {
  var container = document.createElement('div');
  $(container).addClass('container-fluid');

  var row = document.createElement('div');
  $(row).addClass('row');
  $(container).append(row);

  var listHeader = document.createElement('div');
  $(listHeader).addClass('panel-heading dev-border');
  $(listHeader).append(this.createHeaderElement('Head1'));
  $(listHeader).append(this.createHeaderElement('Head2'));
  $(listHeader).append(this.createHeaderElement('Head3'));

  $(row).append(listHeader);
  return container;
};

PaymentsList.prototype.createHeaderElement = function(elementData) {
  var headerElement = document.createElement('div');
  $(headerElement).addClass('col-sm-4 dev-border');
  $(headerElement).append(elementData);
  return headerElement;
};

PaymentsList.prototype.createPaymentsListElement = function(elementData) {
  var element = document.createElement('a');
  $(element).addClass('list-group-item');
  $(element).append(elementData);
  return element;
};
