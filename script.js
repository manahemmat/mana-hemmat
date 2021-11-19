let checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener('change', function () {

    let lists = document.getElementsByClassName('list');
    let paragraphs = document.getElementsByTagName("p")

    if (this.checked) {
        document.getElementById("=header").style.backgroundColor = "#030b07";
        document.body.style.backgroundColor = "#222222";

        for (let i = 0; i < lists.length; i++) {
            lists[i].style.backgroundColor = "#1f3b2c";
        }

        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.backgroundColor = "#588068";
        }
    } else {
        document.getElementById("=header").style.backgroundColor = "#588068";
        document.body.style.backgroundColor = 'white';
        for (let i = 0; i < lists.length; i++) {
            lists[i].style.backgroundColor = "darkseagreen";
        }

        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.backgroundColor = "#f5f0ed";
        }
    }
});
