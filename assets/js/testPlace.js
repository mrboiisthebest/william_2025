document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.querySelector('iframe');
let count = 1
    if (iframe) {
        iframe.onload = function() {
            const button = iframe.contentDocument.getElementById("testButton");
            if (button) {
                button.addEventListener('click', () => {
                    if (count == 100){
                        button.style.backgroundColor  = "rgb(0,255,0)";
                        console.log("100!")
                    }
                    if (count == 250){
                        button.style.backgroundColor  = "rgb(0,255,255)";
                        console.log("250!")
                    }
                    if (count == 500){
                        button.style.backgroundColor  = "rgb(0,0,0)";
                        button.style.color = "rgb(255,0,0)";
                        console.log("500!")
                    }
                    button.textContent = "Clicked: " + count;
                    count++
                    console.log("Clicked the button");
                });
            }
        };
    }
});
