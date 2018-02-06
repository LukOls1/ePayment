function PostsView() {

}

PostsView.prototype.render = function() {
  var element = document.createElement('div');
  element.innerText = "Post view";
  $('#mainContent').append(element);
}
