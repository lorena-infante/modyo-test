//brings the posts from the API
function getPosts(){
    const API_URL_posts= 'https://jsonplaceholder.typicode.com/posts';

    fetch (`${API_URL_posts}`)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        let post;
        //brings all h5 titles inside carousel__elemento as a NodeList
        let h5 = document.querySelectorAll(".carousel__elemento>h5");
        console.log(h5);
        for(let i=0; i<h5.length; i++){
            post = posts[i].body; 
            //assigns as text content the results obtained on the for loop
            h5[i].textContent = `"${post}"`;
            
        }
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
        //brings all the p elements on carousel__elemento
        let p = document.querySelectorAll(".carousel__elemento>p");
        console.log(p);
        
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

