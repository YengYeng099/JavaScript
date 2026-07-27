const BASE_URL = "http://localhost:5500"

async function getJSON() {
    const memberData = await fetch(`${BASE_URL}/JSON/members.json`)
    const response = await memberData.json();
    
    console.log(response);
}
getJSON();