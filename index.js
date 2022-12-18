import { posts } from "./data.js"

document.addEventListener('dblclick', function(e){
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like)
    }
})

function handleLikeClick(postId) {
    const targetPostObject = posts.filter(function(post){
        return post.uuid === postId
    })[0]
    targetPostObject.likes++
    render()
}

function getFeedHtml() {
    let feedHtml = ''
    posts.forEach(function(post) {
        console.log()
        feedHtml += `<section>
        <div class="post-header">
            <img id="avatar" class="avatar" src="${post.avatar}" alt="Vangogh avatar">
            <div class="post-info-container">
                <p class="post-info bold-text" id="name">${post.name}</p>
                <p class="post-info location" id="location">${post.location}</p>
            </div>
        </div>
        <div id="post-photo">
            <img class="post-photo" src="${post.post}" alt="Vangogh post photo" data-like="${post.uuid}">
        </div>
            <div class="icons">
                <img class="icon" src="images/icon-heart.png">
                <img class="icon" src="images/icon-comment.png">
                <img class="icon" src="images/icon-dm.png">
            </div>
            <div class="post-body">
                <p class="bold-text" id="likes">${post.likes} likes</p>
                <span class="bold-text" id="username">${post.username} </span><span id="content">${post.comment}</span>
            </div>
        </section>`
        if (posts.indexOf(post) !== posts.length - 1) {
            feedHtml += `<div class="post-break"></div>`
        }
    })

    return feedHtml
}

function render(){
    document.getElementById("container").innerHTML = getFeedHtml()
}

render()