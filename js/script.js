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

for(const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);
        
        setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3))
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