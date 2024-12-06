
window.addEventListener("load", function () {
    // Get canvas and context.
    const canvas = document.getElementById("main-canvas");
    const context = canvas.getContext("2d", { willReadFrequently: true });

    // Set canvas dimensions to match the window size.
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Adjust canvas size on window resize.
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});