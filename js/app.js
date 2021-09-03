//brings the posts from the API
function getPosts(){
    const API_URL_posts= 'https://jsonplaceholder.typicode.com/posts';

    fetch (`${API_URL_posts}`)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        let post;
        //brings all h5 titles inside testimonials-- as a NodeList
        let h5 = document.querySelectorAll(".testimonials-->div>h5");
        
        for(let i=0; i<h5.length; i++){
            post = posts[i].body; 
            console.log(post);
            h5[i].textContent = `"${post}"`;
            console.log(h5);
        }
  /*         //test for the first element
        let txt = document.querySelector("#testim-usr1"); 
        txt.innerHTML= `"${post}"`; */
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

