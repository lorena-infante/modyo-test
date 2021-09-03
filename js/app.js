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
            
            h5[i].textContent = `"${post}"`;
            
        }
  /*         //test for the first element
        let txt = document.querySelector("#testim-usr1"); 
        txt.innerHTML= `"${post}"`; */
    })
    .catch(function(error){
        console.log("Error "+ `${error}`);
    })
}
//brings the names from the API
function getNames(){
    const API_URL_usrs= 'https://jsonplaceholder.typicode.com/users';
    fetch (`${API_URL_usrs}`)
    .then(function(response){
        return response.json();
    })
    .then(function(usrs){
        let usr;
        //brings all h5 titles inside testimonials-- as a NodeList
        let p = document.querySelectorAll(".testimonials-->div>p");
        
        
        for(let i=0; i<p.length; i++){
            usr = usrs[i].name; 
            
            p[i].textContent = `${usr}`;
            
        }
    })
    .catch(function(error){
        console.log("Error "+ `${error}`);
    })
}

getPosts();
getNames();

