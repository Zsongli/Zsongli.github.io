var collection = [];
function onLoad() {
    collection = Array.from(document.getElementsByClassName("card"));
    if (collection.length === 0)
        setTimeout(() => {
            onLoad();
        }, 500);
    else listen();
}

function listen() {
    var hovered;
    document.addEventListener("mousemove", (e) => {
        if(window.matchMedia("(hover: none)").matches) return;

        const prevHovered = hovered;
        
        hovered = collection.find(item => item.parentElement.querySelector(":hover") === item);
        if (hovered) {
            collection.forEach(i => i.style.transform = "perspective(100em) rotateX(0deg) rotateY(0deg)");
            const rect = hovered.getBoundingClientRect();
            hovered.style.transform = `perspective(100em) rotateY(${((e.clientX - rect.left) / (rect.right - rect.left) * 20 - 10).toFixed(2)}deg) rotateX(${(-(e.clientY - rect.top) / (rect.bottom - rect.top) * 20 + 10).toFixed(2)}deg) scale(1.2)`;
        }
        else if (prevHovered) {
            prevHovered.style.transform = "perspective(100em) rotateX(0deg) rotateY(0deg)";
        }
    });
}