function State() {
  this.token = null;
  this.userInfo;
  this.paymentsList;
  this.commentsList;
}

State.prototype.isLoggedOn = function() {
  if (this.token === null) {
    return false;
  } else {
    return true;
  }
};
