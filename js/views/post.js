
function Post(parentId, postData) {
  
  this.parentId = parentId;
  this.postData = postData;
  this.postDOM = this.createPost();
}


Post.prototype.render = function() {
  $("#" + this.parentId).append(this.postDOM);
};

Post.prototype.createPost = function() {
  var container = document.createElement("div");
  $(container).append(this.createPostContainer());
  $(container).append(this.createCommentsContainer());

  return container;
};

Post.prototype.createPostContainer = function(postData) {
  var container = document.createElement("div");
  $(container).attr("id", this.postData.id);
  $(container).addClass("container-flex postContainer");
  $(container).append(this.createPostRowAndAvatar());

  return container;
};

Post.prototype.createPostRowAndAvatar = function() {
  var row = document.createElement("div");
  $(row).addClass("row");

  var avatar = document.createElement("div");
  $(row).append(avatar);
  $(avatar).addClass("col-lg-1 col-md-2 col-sm-2 col-xs-2");
  $(avatar).append('<img src="img/avatar.png">');
  $(avatar.firstChild).addClass("img-circle avatar");
  $(row).append(this.createPostContent());

  return row;
};

Post.prototype.createPostContent = function() {
  var container = document.createElement("div");
  $(container).addClass("col-lg-11 col-md-10 col-sm-10 col-xs-10");
  $(container).append(this.createUserAndDate());
  $(container).append(this.createPostText());
  $(container).append(this.createBorder());
  $(container).append(this.createButtonContainer());

  return container;
};

Post.prototype.createUserAndDate = function() {
  var container = document.createElement("div");
  var user = document.createElement("h4");
  var date = document.createElement("div");

  $(container).addClass("row");
  $(user).addClass("col-lg-10 col-md-10 col-sm-10 col-xs-9");
  $(date).addClass("col-lg-2 col-md-2 col-sm-2 col-xs-3");

  $(user).append(this.postData.autor);
  $(date).append("21:37");

  $(container).append(user);
  $(container).append(date);
  
  return container;
};

Post.prototype.createPostText = function() {
  var container = document.createElement("div");
  var text = document.createElement("div");
  $(container).addClass("row postText");
  $(text).addClass("col-lg-12");
  $(text).append(this.postData.content);
  $(container).append(text);

  return container;
};

Post.prototype.createBorder = function() {
  var border = document.createElement("div");
  $(border).addClass("border row");

  return border;
};

Post.prototype.createButtonContainer = function() {
  var container = document.createElement("div");
  var comments = document.createElement("a");
  var commentsSpan = document.createElement("span");
  var reply = document.createElement("a");
  var replySpan = document.createElement("span");

  $(container).addClass("row");
  $(commentsSpan).addClass("glyphicon glyphicon-th-list");
  $(comments).attr("data-toggle", "collapse");
  $(comments).attr("data-target", "#comments" + this.postData.id);
  $(comments).addClass("col-lg-6 col-md-6 col-sm-6 col-xs-6 postButtons");
  $(comments).append(commentsSpan);
  $(comments).append(" COMMENTS");

  $(replySpan).addClass("glyphicon glyphicon-share-alt");
  $(reply).addClass("col-lg-6 col-md-6 col-sm-6 col-xs-6 postButtons");
  $(reply).append(replySpan);
  $(reply).append(" REPLY");

  $(container).append(comments);
  $(container).append(reply);

  return container;
  };
  /*    POST COMMENTS    */

  Post.prototype.createCommentsContainer = function() {
    var container = document.createElement("div");
    $(container).attr("id", "comments" +  this.postData.id);
    $(container).attr("aria-expanded", "false");
    $(container).addClass("container-flex");
    $(container).addClass("collapse");
    //////////////////////
    
    for( let i = 0 ; i < this.postData.subposts.length ; i++ ){
      $(container).append(this.createCommentContainer(this.postData.subposts[i]));
    }
    $(container).append(this.createReplyInput());

    return container;
  };

  Post.prototype.createCommentContainer = function(subpostData) {
    var container = document.createElement("div");
    $(container).addClass("row container-flex");
    $(container).append(this.createCommentRowAndAvatar(subpostData));

    return container;
  };

  Post.prototype.createCommentRowAndAvatar = function(subpostData) {
    var row = document.createElement("div");
    $(row).addClass(
      "postComment col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-1 col-lg-9 col-md-9 col-sm-9 col-xs-10"
    );

    var avatar = document.createElement("div");
    $(row).append(avatar);
    $(avatar).addClass("col-lg-1 col-md-2 col-sm-2 col-xs-2");
    $(avatar).append('<img src="img/avatar.png">');
    $(avatar.firstChild).addClass("img-circle avatar");
    $(row).append(this.createCommentContent(subpostData));

    return row;
  };

  Post.prototype.createCommentContent = function(subpostData) {
    var container = document.createElement("div");
    $(container).addClass("col-lg-11 col-md-10 col-sm-10 col-xs-10");
    $(container).append(this.createCommentUserAndDate(subpostData));
    $(container).append(this.createCommentText(subpostData));

    return container;
  };

  Post.prototype.createCommentUserAndDate = function(subpostData) {
    var container = document.createElement("div");
    var title = document.createElement("h4");
    var date = document.createElement("div");

    $(container).addClass("row");
    $(title).addClass("col-lg-10 col-md-10 col-sm-10 col-xs-9");
    $(date).addClass("col-lg-2 col-md-2 col-sm-2 col-xs-3");

    $(title).append(subpostData.autor);
    $(date).append("21:37");

    $(container).append(title);
    $(container).append(date);
    return container;
  };

  Post.prototype.createCommentText = function(subpostData) {
    var container = document.createElement("div");
    var text = document.createElement("div");
    $(container).addClass("row postText");
    $(text).addClass("col-lg-12");
    $(text).append(subpostData.content);

    $(container).append(text);

    return container;
  };

  Post.prototype.createReplyInput = function() {
    var row = document.createElement("div");
    var input = document.createElement("textarea");
    var addComment = document.createElement("button");
    var addCommentSpan = document.createElement("span");

    $(row).addClass("row");
    $(input).addClass(
      "col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-1 col-lg-7 col-md-7 col-sm-7 col-xs-8"
    );
    $(addComment).addClass("col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-primary");
    $(addComment).attr("id", "addCommentBut");
    $(addCommentSpan).addClass("glyphicon glyphicon-arrow-up");
    $(addComment).append(addCommentSpan);

    $(row).append(input);
    $(row).append(addComment);

    return row;
  }

