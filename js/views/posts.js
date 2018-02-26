function Post () {

}

Post.prototype.createPostContainer = function() {
    var post = document.createElement('div');
    $(post).addClass('row');
    $('#postList').append(post);
}