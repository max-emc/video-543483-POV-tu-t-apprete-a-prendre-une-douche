const ip = document.getElementById("ip");
const pays = document.getElementById("pays");
const ville = document.getElementById("ville");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const organisation = document.getElementById("organisation");

fetch("https://get.geojs.io/v1/ip/geo.json")
    .then(response => response.json())
    .then(data => {
        ip.value = data["ip"];
        pays.value = data["pays"];
        ville.value = data["ville"];
        latitude.value = data["latitude"];
        longitude.value = data["longitude"];
        organisation.value = data["organization"];
    }
)

function envoyer() {
    document.getElementById("formulaire").submit()
}

document.addEventListener('DOMContentLoaded', function() {
    envoyer()
});
