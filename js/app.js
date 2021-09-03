//brings the posts from the API
function getPosts(){
    const API_URL_posts= 'https://jsonplaceholder.typicode.com/posts';

    fetch (`${API_URL_posts}`)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        let post = posts[0].body;
        const h5 = document.querySelector("#testim-usr1");
        h5.innerHTML = `"${post}"`;
    })
    .catch(function(error){
        console.log("Error "+ `${error}`);
    })
}

function getNames(){
    const API_URL_usrs= 'https://jsonplaceholder.typicode.com/users';

    fetch (`${API_URL_usrs}`)
    .then(function(response){
        return response.json();
    })
    .then(function(usrs){
        let usr = usrs[0].name;
        const p = document.querySelector("#usr1");
        p.innerHTML = `${usr}`;
    })
    .catch(function(error){
        console.log("Error "+ `${error}`);
    })

}

getPosts();
getNames()

