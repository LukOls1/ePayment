function PostsView() {
  this.postListId = 'postList';
  this.postList = new Posts(this.postListId);
}

PostsView.prototype.render = function() {
  var element = document.createElement('div');
  $(element).append(this.createContainer());
  $('#mainContent').append(element);
}

PostsView.prototype.createContainer = function () {
  var containerB = document.createElement('div');
  $(containerB).addClass('devBorder');
  $(containerB).append(this.createHeader());
  $(containerB).append(this.createPostList());
  $(containerB).append(this.createInputsContainer());

  return containerB;
}

PostsView.prototype.createHeader = function () {
  var header = document.createElement('div');
  $(header).addClass('devBorder');
  var tittle = document.createElement('h3');
  $(tittle).append('Posts');
  $(header).append(tittle);

  return header;
}

PostsView.prototype.createPostList = function () {
  var postList = document.createElement('div');
  $(postList).attr('id', this.postListId);
  $(postList).addClass('posts-list col-12');
  this.postList.render();
  

  /*$(postList).append(this.createPostAndCommentContainer());
  $(postList).append(this.createPostAndCommentContainer());*/
  
  return postList;
}

PostsView.prototype.createInputsContainer = function () {
  var postInputContainer = document.createElement('div');
  $(postInputContainer).addClass('postInputContainer post col-lg-12');
  $(postInputContainer).append(this.createInputText());

  return postInputContainer;
}

PostsView.prototype.createInputText = function () {
  var inputDiv = document.createElement('div');
  $(inputDiv).addClass('row postInputDiv');

  var postInput = document.createElement('textarea');
  $(postInput).attr('id', 'addText');
  $(postInput).attr('placeholder', 'Text');
  $(postInput).addClass('col-lg-7 col-md-7 col-sm-7 col-xs-10 postInput');

  $(inputDiv).append(postInput);
  $(inputDiv).append(this.createSendButton());

  return inputDiv;
}

PostsView.prototype.createSendButton = function () {
  var colapseButton = document.createElement('button');
  $(colapseButton).attr('id', 'postAddButton');
  $(colapseButton).addClass('btn btn-primary col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-lg-1 col-md-1 col-sm-1 col-xs-2');
  $(colapseButton).append('Add');
  var addPost = $('#postList').append(this.createPostAndCommentContainer());
  $(colapseButton).click(function() {
    this.fun = PostsView.prototype.createPostAndCommentContainer;
    var gowno = $.proxy(this.createPostAndCommentContainer, this);
    $('#postList').append(this.createPostAndCommentContainer());
  });
  
  return colapseButton;
}

/*      POST    */

PostsView.prototype.createPostAndCommentContainer = function () {
  var container = document.createElement('div');
  $(container).append(this.createPostContainer());
  $(container).append(this.createCommentsContainer());

  return container;
}

PostsView.prototype.createPostContainer = function () {
  var container = document.createElement('div');
  $(container).addClass('container-flex postContainer');
  $(container).append(this.createPostRowAndAvatar());

  return container;
}

PostsView.prototype.createPostRowAndAvatar = function () {
  var row = document.createElement('div');
  $(row).addClass('row');
  
  var avatar = document.createElement('div');
  $(row).append(avatar);
  $(avatar).addClass('col-lg-1 col-md-2 col-sm-2 col-xs-2')
  $(avatar).append('<img src="img/avatar.png">');
  $(avatar.firstChild).addClass('img-circle avatar');
  $(row).append(this.createPostContent());

  return row;
}

PostsView.prototype.createPostContent = function () {
  var container = document.createElement('div');
  $(container).addClass('col-lg-11 col-md-10 col-sm-10 col-xs-10');
  $(container).append(this.createUserAndDate());
  $(container).append(this.createPostText());
  $(container).append(this.createBorder());
  $(container).append(this.createButtonContainer());
  
  return container;
}

PostsView.prototype.createUserAndDate = function () {
  var container = document.createElement('div');
  var tittle = document.createElement('h4');
  var date = document.createElement('div');
  
  $(container).addClass('row');
  $(tittle).addClass('col-lg-10 col-md-10 col-sm-10 col-xs-9');
  $(date).addClass('col-lg-2 col-md-2 col-sm-2 col-xs-3');

  $(tittle).append('Kubix');
  $(date).append('21:37');

  $(container).append(tittle);
  $(container).append(date);
  return container;
}

PostsView.prototype.createPostText = function () {
  var container = document.createElement('div');
  var text = document.createElement('div');
  $(container).addClass('row postText');
  $(text).addClass('col-lg-12');
  $(text).append('Dzisiaj wszyscy wpierdol na kanciapie bo juz chuj mnie z wami strzela... przynosze tylko te browary a wy wiecznie macie malo. Pogadamy potem');
  
  $(container).append(text);
  
  return container;
}

PostsView.prototype.createBorder = function () {
  var border = document.createElement('div');
  $(border).addClass('border row');
  
  return border;
}

PostsView.prototype.createButtonContainer = function () {
  var container = document.createElement('div');
  var comments = document.createElement('a');
  var commentsSpan = document.createElement('span');
  var reply = document.createElement('a');
  var replySpan = document.createElement('span');


  $(container).addClass('row');
  $(commentsSpan).addClass('glyphicon glyphicon-th-list');
  $(comments).attr('data-toggle', 'collapse');
  $(comments).attr('data-target', '#commentsContainer');
  $(comments).addClass('col-lg-6 col-md-6 col-sm-6 col-xs-6 postButtons');
  $(comments).append(commentsSpan);
  $(comments).append(' COMMENTS');

  $(replySpan).addClass('glyphicon glyphicon-share-alt');
  $(reply).addClass('col-lg-6 col-md-6 col-sm-6 col-xs-6 postButtons');
  $(reply).append(replySpan);
  $(reply).append(' REPLY');
  
  $(container).append(comments);
  $(container).append(reply);
  
  return container;
}
/*    POST COMMENTS    */
PostsView.prototype.createCommentsContainer = function () {
  var container = document.createElement('div');
  $(container).attr('id', 'commentsContainer');
  $(container).attr('aria-expanded', 'false');
  $(container).addClass('container-flex');
  $(container).addClass('collapse');
  $(container).append(this.createCommentContainer());
  $(container).append(this.createReplyInput());

  return container;
}

PostsView.prototype.createCommentContainer = function () {
  var container = document.createElement('div');
  $(container).addClass('row container-flex');
  $(container).append(this.createCommentRowAndAvatar());

  return container;
}

PostsView.prototype.createCommentRowAndAvatar = function () {
  var row = document.createElement('div');
  $(row).addClass('postComment col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-1 col-lg-9 col-md-9 col-sm-9 col-xs-10');
  
  var avatar = document.createElement('div');
  $(row).append(avatar);
  $(avatar).addClass('col-lg-1 col-md-2 col-sm-2 col-xs-2');
  $(avatar).append('<img src="img/avatar.png">');
  $(avatar.firstChild).addClass('img-circle avatar');
  $(row).append(this.createCommentContent());

  return row;
}

PostsView.prototype.createCommentContent = function () {
  var container = document.createElement('div');
  $(container).addClass('col-lg-11 col-md-10 col-sm-10 col-xs-10');
  $(container).append(this.createUserAndDate());
  $(container).append(this.createCommentText());
  
  return container;
}

PostsView.prototype.createUserAndDate = function () {
  var container = document.createElement('div');
  var tittle = document.createElement('h4');
  var date = document.createElement('div');
  
  $(container).addClass('row');
  $(tittle).addClass('col-lg-10 col-md-10 col-sm-10 col-xs-9');
  $(date).addClass('col-lg-2 col-md-2 col-sm-2 col-xs-3');

  $(tittle).append('Kubix');
  $(date).append('21:37');

  $(container).append(tittle);
  $(container).append(date);
  return container;
}

PostsView.prototype.createCommentText = function () {
  var container = document.createElement('div');
  var text = document.createElement('div');
  $(container).addClass('row postText');
  $(text).addClass('col-lg-12');
  $(text).append('Dzisiaj wszyscy wpierdol na kanciapie bo juz chuj mnie z wami strzela... przynosze tylko te browary a wy wiecznie macie malo. Pogadamy potem');
  
  $(container).append(text);
  
  return container;
}

PostsView.prototype.createReplyInput = function () {
  var row = document.createElement('div');
  var input = document.createElement('textarea');
  var addComment = document.createElement('button');
  var addCommentSpan = document.createElement('span');

  $(row).addClass('row');
  $(input).addClass('col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-1 col-lg-7 col-md-7 col-sm-7 col-xs-8');
  $(addComment).addClass('col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-primary');
  $(addComment).attr('id', 'addCommentBut');
  $(addCommentSpan).addClass('glyphicon glyphicon-arrow-up');
  $(addComment).append(addCommentSpan);

  $(row).append(input);
  $(row).append(addComment);

  return row;
}