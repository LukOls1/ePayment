createPost = function (id) {
    const post = document.createElement("div");
    $(post).attr('id',   id);
    $(post).addClass('devPostBorder container-fluid post card');
    $(post).append(createRow('kubix0'));  
    

    return post;
}

createRow = function (id) {
    const post = document.createElement("div");
    $(post).attr('id',   id);
    $(post).addClass('row h-100 no-gutters');
    $(post).append(createPostAutor('kubix1'));
    $(post).append(addPostContent());
    

    return post;
}

createPostAutor = function (id) {
    const post = document.createElement("div");
    $(post).attr('id',   id);
    $(post).addClass('devPostBorder h-100 col-2');
    $(post).append(createAvatarImg('kubix2'));
    $(post).append(createUserName('kubix3'));

    return post;
}

createAvatarImg = function (id) {
    const post = document.createElement("div");
    $(post).attr('id',   id);
    $(post).addClass('avatar');
    $(post).append('<img src="img/avatar.png">');
    $(post.firstChild).addClass('avatarImg rounded-circle mx-auto d-block');
    

    return post;
}

createUserName = function (id) {
    const post = document.createElement("div");
    $(post).attr('id',   id);
    $(post).addClass('text-center');
    $(post).append('Kubix')
    

    return post;
}

addPostContent = function (id) {
    const post = document.createElement("div");
    $(post).attr('id',   id);
    $(post).addClass('devPostBorder container-fluid col-10');
    $(post).append(addPostHeader());
    $(post).append(addPostRow());

    return post;
}

addPostHeader = function (id) {
    const post = document.createElement("div");
    $(post).attr('id',   id);
    $(post).addClass('devPostBorder row');
    $(post).append(addPostTittle());
    $(post).append(addPostDate());

    return post;
}

addPostTittle = function (id) {
    const post = document.createElement("div");
    const inputTitle = document.getElementById('addTitle').value;
    $(post).attr('id',   id);
    $(post).addClass('devPostBorder col-3 h3');
    $(post).append(inputTitle);    

    return post;
}

addPostDate  = function (id) {
    const post = document.createElement("div");
    $(post).attr('id',   id);
    $(post).addClass('devPostBorder offset-5 col-4'); 
    $(post).append('HH:mm dd.mm.yyyy')

    return post;
}

addPostRow = function (id) {
    
    const post = document.createElement("div");
    $(post).attr('id',   id);
    $(post).addClass('devPostBorder row'); 
    $(post).append(addPostText()); 
    
    return post;
}

addPostText = function (id) {
    const post = document.createElement("div");
    const postText = document.getElementById('addText').value;
    $(post).attr('id',   id);
    $(post).addClass('devPostBorder col-12'); 
    $(post).append(postText); 
    
    return post;
}

function addPost() {
    const postContainer = document.getElementById('postsList');
    $(postContainer).append(createPost);
}