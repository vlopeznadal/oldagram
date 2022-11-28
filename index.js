const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function grabElements() {
    for (let i = 0; i < posts.length; i++) {
        let name = posts[i].name
        let username = posts[i].username
        let location = posts[i].location
        let avatar = posts[i].avatar
        let post = posts[i].post
        let comment = posts[i].comment
        let likes = posts[i].likes

        let index = i
        console.log(index)

        createPost(name, username, location, avatar, post, comment, likes, index)
    }
}

function createPost(name, username, location, avatar, post, comment, likes, index) {
    let container = document.getElementById("body")
        container.innerHTML += `<section>
        <div class="post-header">
            <img id="avatar" class="avatar" src="${avatar}" alt="Vangogh avatar">
            <div class="post-info-container">
                <p class="post-info bold-text" id="name">${name}</p>
                <p class="post-info location" id="location">${location}</p>
            </div>
        </div>
        <img class="post-photo" src="${post}" alt="Vangogh post photo">
            <div class="icons">
                <img class="icon" src="images/icon-heart.png">
                <img class="icon" src="images/icon-comment.png">
                <img class="icon" src="images/icon-dm.png">
            </div>
            <div class="post-body">
                <p class="bold-text" id="likes">${likes} likes</p>
                <span class="bold-text" id="username">${username} </span><span id="content">${comment}</span>
            </div>
        </section>`

        if (index !== (posts.length-1)) {
            container.innerHTML += `<div class="post-break"></div>`
        }
}

grabElements()