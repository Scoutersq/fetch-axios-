const axios = require("axios");
async function main(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/6");
    document.getElementById("a").innerHTML = response.data.title;
    console.log(response.data.title);
}
main();