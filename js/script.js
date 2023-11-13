let index = 0,
    interval = 1000;

const rand = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min;

const createStar = () => {
    const starContainer = document.createElement("span");
    starContainer.classList.add("magic-star");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 512 512");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z");

    svg.appendChild(path);
    starContainer.appendChild(svg);

    return starContainer;
};

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
};

const magicContainer = document.getElementById("magic-container");

for (let i = 0; i < 3; i++) {
    const star = createStar();
    magicContainer.appendChild(star);

    setTimeout(() => {
        animate(star);
        setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3));
}


document.addEventListener("DOMContentLoaded", function() {
    var svg = document.querySelector("#svg");
    var iframeDiscord = document.querySelector("#iframeDiscord");
    var margin = 20;
    var isSvgHovered = false; // Track whether the SVG is initially hovered

    svg.addEventListener("mouseover", function() {
        isSvgHovered = true; // SVG is hovered over
        iframeDiscord.style.opacity = "1";
    });

    svg.addEventListener("mouseout", function(event) {
        if (!isMouseOverElement(event, iframeDiscord)) {
            isSvgHovered = false; // SVG is no longer hovered over
            iframeDiscord.style.opacity = "0";
        }
    });

    iframeDiscord.addEventListener("mouseover", function() {
        // Show the iframe only if SVG was initially hovered
        if (isSvgHovered) {
            iframeDiscord.style.opacity = "1";
        }
    });

    iframeDiscord.addEventListener("mouseout", function(event) {
        if (!isMouseOverElement(event, svg)) {
            isSvgHovered = false;
            iframeDiscord.style.opacity = "0";
        }
    });

    function isMouseOverElement(event, element) {
        var rect = element.getBoundingClientRect();
        return (
            event.clientX >= rect.left - margin &&
            event.clientX <= rect.right + margin &&
            event.clientY >= rect.top - margin &&
            event.clientY <= rect.bottom + margin
        );
    }
});