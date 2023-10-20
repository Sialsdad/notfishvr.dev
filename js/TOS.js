window.addEventListener("load", changeloghandler, true);
function changeloghandler(){
    const entityMap = {
    // "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
    };

    function escapeHtml(string) {
        return String(string).replace(/[&<>"'`=\/]/g, function(s) {
            return entityMap[s];
        });
    }

    function highlightall() {
        document.querySelectorAll('pre code').forEach((block) => {
            block.innerHTML = escapeHtml(block.innerHTML.replace(/\n/g, '<br>'));
            hljs.highlightElement(block);
            block.innerHTML = block.innerHTML.replaceAll('&lt;br&gt;', '\n'); // alow new lines
        });
        hljs.highlightAll();
    }

    function setCodeText(parsed) {
        //parsed = parsed.replaceAll("\n", "<br>")
        document.querySelector("#TOS").innerText = parsed
        highlightall();
        parsed = document.querySelector("#TOS").innerHTML;
        
        parsed = parsed.replace(/^###### (.*)/gm, '<h6>$1</h6>')
        parsed = parsed.replace(/^##### (.*)/gm, '<h5>$1</h5>')
        parsed = parsed.replace(/^#### (.*)/gm, '<h4>$1</h4>')
        parsed = parsed.replace(/^### (.*)/gm, '<h3>$1</h3>')
        parsed = parsed.replace(/^## (.*)/gm, '<h2>$1</h2>')
        parsed = parsed.replace(/^# (.*)/gm, '<h1>$1</h1>')
        parsed = parsed.replace(/\!\[(.*?)\]\((.*?)\)/g, '<img src="$2">$1</a>')
        parsed = parsed.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>')
        parsed = parsed.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        parsed = parsed.replace(/\*(.*?)\*/g, '<i>$1</i>')
        parsed = parsed.replace(/_(.*?)_/g, '<u>$1</u>') // underline
        //parsed = parsed.replace(/_(.*?)_/g, '<sub>$1</sub>')
        parsed = parsed.replace(/~(.*?)~/g, '<del>$1</del>')
        parsed = parsed.replace(/\^(.*?)\^/g, '<sup>$1</sup>')
        parsed = parsed.replace(/`(.*?)`/g, '<code>$1</code>')
        document.querySelector("#TOS").innerHTML = parsed
        let elementsInCode = document.querySelector("#TOS").children;
        for(var i = 0; i < elementsInCode.length; i++) {
            let ele = elementsInCode[i];
            ele.style.margin = "0px 0px 0px 0px";
        }
    }
    async function loadChangelog(url) {
        setCodeText("Loading...");

        fetch("TOS.txt")
            .then((res) => res.text())
            .then((text) => {
                setCodeText(text);
            })
            .catch((e) => changelog = "- Failed to get changelog!")
    }

    loadChangelog();
}