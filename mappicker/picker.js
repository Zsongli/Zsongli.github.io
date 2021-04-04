function goto(url) {
    window.location.href = url;
}

function randRange(min, max) {
    return Math.floor(min + (max - min) * Math.random());
}

const maps = [
    { name: "Bank", img: "./img/bank.png" },
    { name: "Border", img: "./img/border.png" },
    { name: "Chalet", img: "./img/chalet.png" },
    { name: "Clubhouse", img: "./img/clubhouse.png" },
    { name: "Coastline", img: "./img/coastline.png" },
    { name: "Consulate", img: "./img/consulate.png" },
    { name: "Favela", img: "./img/favela.png" },
    { name: "Fortress", img: "./img/fortress.png" },
    { name: "Hereford Base", img: "./img/hereford.png" },
    { name: "House", img: "./img/house.png" },
    { name: "Kafe Dostoyevsky", img: "./img/kafe.png" },
    { name: "Kanal", img: "./img/kanal.png" },
    { name: "Oregon", img: "./img/oregon.png" },
    { name: "Outback", img: "./img/outback.png" },
    { name: "Presidental Plane", img: "./img/plane.png" },
    { name: "Skyscraper", img: "./img/skyscraper.png" },
    { name: "Theme Park", img: "./img/themepark.png" },
    { name: "Tower", img: "./img/tower.png" },
    { name: "Villa", img: "./img/villa.png" },
    { name: "Yacht", img: "./img/yacht.png" }
];

function pickMap() {
    const map = maps[randRange(0, maps.length)];
    document.getElementById("mapname").textContent = map.name;
    document.getElementById("mapimg").src = map.img;
}