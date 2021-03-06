const titles = [
    "your favorite shitposter",
    "your biggest homie",
    "the CEO of Zsugli Corp",
    "Yggdrasil's chosen",
    "Nintendo fanboy",
    "best waifu",
    "that guy from the internet",
    "meth addict",
    "math addict",
    "nice to meet you",
    "the first human to exist",
    "top-tier coder",
    "the weeb killer",
    "Karesz Clicker champion",
    "undefined"
]

function goto(url)
{
    window.location.href = url;
}

function randRange(min, max)
{
    return Math.floor(min + (max-min)* Math.random());
}

function setTitle(){
    document.getElementById("title").innerText = titles[randRange(0, titles.length)];
}