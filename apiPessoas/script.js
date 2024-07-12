const url = "https://randomuser.me/api/?results=10";


let card = document.getElementById("user-card");
async function fetchUser () {
    const response = await fetch(url);
    const data = await response.json();
    const users = data.results;

    let cards = '';
    for (let i = 0; i < users.length; i++) {
       let user = users[i];
       cards += `
        
       `
        
    }
}




console.log(fetchEstados());