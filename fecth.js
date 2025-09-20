
// promisified version
function main(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(async function(response){
        const json = await response.json();
        document.getElementById("a").innerHTML = json.title
    })
}
main();

async function fetch1(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await response.json();
    console.log(json.title);
}
fetch1();


