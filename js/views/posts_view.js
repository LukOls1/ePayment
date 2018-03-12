var postsArray = [
  {
    autor: 'Kubix',
    id: 'post_1',
    content: 'No siema! Bedziecie dzisiaj na kanciapie?',

    subposts: [
      {
        autor: 'Heniek',
        content: 'Ty wujek bys tylko jebal do ryja'
      },

      {
        autor: 'Szymczak',
        content: 'Kubik jest taki jeden'
      }
    ]
  },
  {
    autor: 'Hipek',
    id: 'post_2',
    content: 'No siema!',

    subposts: [
      {
        autor: 'Darson',
        content: 'Chce faje'
      }
    ]
  }
];

function PostsView() {
  this.postListId = 'postList';
  this.postList = this.createPosts();
}

PostsView.prototype.render = function() {
  var element = document.createElement('div');
  $(element).append(this.createContainer());
  $('#mainContent').append(element);
  for (i = 0; i < this.postList.length; i++) {
    this.postList[i].render();
  }
};

PostsView.prototype.createPosts = function() {
  let postDOMList = [];

  for (let i = 0; i < postsArray.length; i++) {
    postDOMList.push(new Post(this.postListId, postsArray[i]));
  }

  return postDOMList;
};

PostsView.prototype.createContainer = function() {
  var containerB = document.createElement('div');
  $(containerB).addClass('devBorder');
  $(containerB).append(this.createHeader());
  $(containerB).append(this.createPostList());
  $(containerB).append(this.createInputsContainer());

  return containerB;
};

PostsView.prototype.createHeader = function() {
  var header = document.createElement('div');
  $(header).addClass('devBorder');
  var tittle = document.createElement('h3');
  $(tittle).append('Posts');
  $(header).append(tittle);

  return header;
};

PostsView.prototype.createPostList = function() {
  var postList = document.createElement('div');
  $(postList).attr('id', this.postListId);
  $(postList).addClass('posts-list col-12');

  return postList;
};

PostsView.prototype.createInputsContainer = function() {
  var postInputContainer = document.createElement('div');
  $(postInputContainer).addClass('postInputContainer post col-lg-12');
  $(postInputContainer).append(this.createInputText());

  return postInputContainer;
};

PostsView.prototype.createInputText = function() {
  var inputDiv = document.createElement('div');
  $(inputDiv).addClass('row postInputDiv');

  var postInput = document.createElement('textarea');
  $(postInput).attr('id', 'addText');
  $(postInput).attr('placeholder', 'Text');
  $(postInput).addClass('col-lg-7 col-md-7 col-sm-7 col-xs-10 postInput');

  $(inputDiv).append(postInput);
  $(inputDiv).append(this.createSendButton());

  return inputDiv;
};

PostsView.prototype.createSendButton = function() {
  var colapseButton = document.createElement('button');
  $(colapseButton).attr('id', 'postAddButton');
  $(colapseButton).addClass(
    'btn btn-primary col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-lg-1 col-md-1 col-sm-1 col-xs-2'
  );
  $(colapseButton).append('Add');

  return colapseButton;
};
