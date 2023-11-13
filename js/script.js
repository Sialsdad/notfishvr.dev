let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

// Function to create and append a star element
const createStar = () => {
    const starContainer = document.getElementById("magic-container");

    const star = document.createElement("span");
    star.className = "magic-star";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 512 512");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M512 255.1 ... (your path data here)");

    svg.appendChild(path);
    star.appendChild(svg);
    starContainer.appendChild(star);

    return star;
}

// Create stars dynamically
for (let i = 0; i < 3; i++) {
    const star = createStar();

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