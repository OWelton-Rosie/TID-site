document.addEventListener("DOMContentLoaded", function() {
    const words = ["cleanest", "most powerful", "most advanced", "easiest to use"];
    let index = 0;
    const wordElement = document.getElementById("changing-word");

    function changeWord() {
        wordElement.style.opacity = 0;
        setTimeout(() => {
            wordElement.textContent = words[index];
            wordElement.style.transform = "translateY(0px)";
            wordElement.style.opacity = 1;
            index = (index + 1) % words.length;
        }, 500);
    }

    setInterval(changeWord, 1500);
});