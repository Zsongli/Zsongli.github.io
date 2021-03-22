var Module = {
    preRun: [],
    postRun: [],
    canvas: (function () {
        var canvas = document.getElementById('canvas');
        canvas.addEventListener("webglcontextlost", function (e) { alert('An error has occured. Please reload the page!'); e.preventDefault(); }, false);

        return canvas;
    })(),
};