Module.canvas.addEventListener("resize", (e) => {

    var viewWidth = e.detail.width;
    var viewHeight = e.detail.width / Module._olc_WindowAspectRatio;

    if (viewHeight > e.detail.height) {
        viewHeight = e.detail.height;
        viewWidth = e.detail.height * Module._olc_WindowAspectRatio;
    }
    Module.canvas.setAttribute("width", viewWidth);
    Module.canvas.setAttribute("height", viewHeight);

    var top = (e.detail.height - viewHeight) / 2;
    var left = (e.detail.width - viewWidth) / 2;
    Module.canvas.style.width = "";
    Module.canvas.style.height = "";
    Module._olc_PGE_UpdateWindowSize(viewWidth, viewHeight);
    Module.canvas.focus();
    e.preventDefault();
});