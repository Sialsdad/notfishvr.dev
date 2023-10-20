//VR Modules
let VRModules = {
    1: {
        /*
        0: "Multi Fly",
        1: "Speed Boost",
        2: "ESP (Box&Bone)",
        3: "Snowball Spam",
        4: "Monsters To Hand [M]",
        5: "Spinbot",
        6: "Trigger To Leave",
        7: "Water Balloons"
        */
    },
    2: {
        /*
        0: "Battle SilentAim",
        1: "Wall Walk",
        2: "Copy Player Gun",
        3: "Trigger To Ghost",
        4: "Force Rock [M]",
        5: "Give Bug",
        6: "Force Infection [M]"
        */
    },
    3: {
        /*
        0: "Water Aura",
        1: "Crash All",
        2: "Everything Spam",
        3: "Fast Bug",
        4: "BloonCtrl (R-hand)",
        5: "No Tag Freeze",
        6: "BloonCtrl (gun)"
        */
    },
    4: {
        /*
        0: "Clear RPC Queue",
        1: "Bouncy Ground",
        2: "Snow Ground",
        3: "Target Spammer",
        4: "Lag Gun",
        5: "Slow All [M]",
        6: "Annoy Player Gun"
        */
    }
};

window.addEventListener("load", function() {
    let modButtons = document.querySelectorAll('.mod');
    let modButtonsContainer = document.querySelectorAll('#modButtonsContainer');
    let pageNext = document.querySelector('#pageNext');
    let pagePrev = document.querySelector('#pageBefore');

    let pageIndex = 1;
    let index = 0;
    let disablePageNext = false;

    function updateButtons() {
        // Remove old buttons
        modButtons.forEach(button => {
            modButtonsContainer[0].removeChild(button);
        });
    
        modButtons = [];
    
        if (VRModules.hasOwnProperty(pageIndex)) {
            const keys = Object.keys(VRModules[pageIndex]);
            keys.forEach(key => {
                const moduleText = VRModules[pageIndex][key];
                const newButton = document.createElement('button');
                newButton.className = 'mod';
                newButton.innerText = moduleText;
                modButtonsContainer[0].appendChild(newButton);
                modButtons.push(newButton);
            });
    
            // Add event listeners to the new buttons
            modButtons.forEach(button => {
                button.addEventListener('click', function() {
                    if (button.classList.contains('mod')) {
                        button.classList.remove('mod');
                        button.classList.add('mod-clicked');
                    } else {
                        button.classList.remove('mod-clicked');
                        button.classList.add('mod');
                    }
                });
            });
    
            // Remove excess buttons if present
            while (modButtons.length > keys.length) {
                const buttonToRemove = modButtons.pop();
                modButtonsContainer[0].removeChild(buttonToRemove);
            }
        }
    }    

    // Remove old buttons
    modButtons.forEach(button => {
        modButtonsContainer[0].removeChild(button);
    });

    modButtons = [];

    if (VRModules.hasOwnProperty(pageIndex)) {
        const keys = Object.keys(VRModules[pageIndex]);
        keys.forEach(key => {
            const moduleText = VRModules[pageIndex][key];
            const newButton = document.createElement('button');
            newButton.className = 'mod';
            newButton.innerText = moduleText;
            modButtonsContainer[0].appendChild(newButton);
            modButtons.push(newButton);
        });

        // Add event listeners to the new buttons
        modButtonsContainer.forEach(button => {
            button.addEventListener('click', function() {
                if (button.classList.contains('mod')) {
                    button.classList.remove('mod');
                    button.classList.add('mod-clicked');
                } else {
                    button.classList.remove('mod-clicked');
                    button.classList.add('mod');
                }
            });
        });

        // Remove excess buttons if present
        while (modButtons.length > keys.length) {
            const buttonToRemove = modButtons.pop();
            modButtonsContainer[0].removeChild(buttonToRemove);
        }
    }

    if (pageIndex == 1) {
        pagePrev.style.display = "none";
        pageNext.style.display = "block";
    } else if (pageIndex == Object.keys(VRModules).length) {
        pagePrev.style.display = "block";
        pageNext.style.display = "none";
    } else {
        pagePrev.style.display = "block";
        pageNext.style.display = "block";
    }

    modButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.className == "mod") {
                button.className = "mod-clicked";
            } else {
                button.className = "mod";
            }
        });
    });

    pageNext.onclick = function() {
        if (disablePageNext == false){
            pageIndex++;
            index = 0; // Reset the index when moving to the next page
            updateButtons();

            if (pageIndex == 1) {
                pagePrev.style.display = "none";
                pageNext.style.display = "block";
                
            } else if (pageIndex == Object.keys(VRModules).length) {
                pagePrev.style.display = "block";
                pageNext.style.display = "block";
                pageNext.innerText = "✗";
                disablePageNext = true;
            } else {
                pagePrev.style.display = "block";
                pageNext.style.display = "block";
                
            }
        }
    };

    pagePrev.onclick = function() {
        if (pageIndex > 1) {
            pageIndex--;
            index = 0; // Reset the index when moving to the previous page
            console.log(pageIndex);
            updateButtons();
            
            disablePageNext = false;
            pageNext.innerText = "→→→";
            if (pageIndex == 1) {
                pagePrev.style.display = "none";
                pageNext.style.display = "block";
                
            } else if (pageIndex == maxPageIndex) {
                pagePrev.style.display = "block";
                pageNext.style.display = "none";
            } else {
                pagePrev.style.display = "block";
                pageNext.style.display = "block";
            }
        }
    };
});

let clickGUIPage = "Modules";
let clickGUI = {
    //"Modules": "cdn-sub/assets/website/OMMFeatures/Modules.png",
    //"Desktop": "cdn-sub/assets/website/OMMFeatures/Desktop.png",
    //"Module Settings": "https://cdn.okaa.dev/assets/website/OMMFeatures/Module%20Settings.png",
    //"Room": "cdn-sub/assets/website/OMMFeatures/Room.png",
    //"Change Name": "https://cdn.okaa.dev/assets/website/OMMFeatures/Change%20Name.png",
    //"Comp Cheats": "https://cdn.okaa.dev/assets/website/OMMFeatures/Comp%20Cheats.png",
};

// for clickGUI
window.addEventListener("load", function() {
    let image = document.querySelector('#OMMModuleImageThing');
    let buttons = {
        "Modules": document.querySelector('#Modules'),
        "Desktop": document.querySelector('#Desktop'),
        "Module Settings": document.querySelector('#ModuleSettings'),
        "Room": document.querySelector('#Room'),
        "Change Name": document.querySelector('#ChangeName'),
        "Comp Cheats": document.querySelector('#CompCheats'),
    };

    Object.keys(buttons).forEach(button => {
        buttons[button].addEventListener('click', function() {
            clickGUIPage = button;
            image.src = clickGUI[clickGUIPage];
        })
    });
    
    image.src = clickGUI[clickGUIPage];
});

// Misc Functions

window.addEventListener("load", function() {
    const draggableElement = document.getElementById("draggable-element");

    let offsetX, offsetY, isDragging = false;

    const delay = 10;
    let lastUpdateTime = 0;

    draggableElement.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
        offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        
        const currentTime = Date.now();
        const timeElapsed = currentTime - lastUpdateTime;

        if (timeElapsed >= delay) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;

            draggableElement.style.left = `${x}px`;
            draggableElement.style.top = `${y}px`;

            lastUpdateTime = currentTime;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
});
