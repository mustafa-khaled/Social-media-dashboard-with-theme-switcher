const toggle = document.getElementById("toggle");
const boxes = document.querySelectorAll(".box");

toggle.addEventListener('change', function () {
    if (this.checked) {
        document.body.style.cssText = "background: linear-gradient(180deg,  hsl(225, 100%, 98%) 30%, hsl(0, 0%, 100%) -70%";
        document.body.style.color = "hsl(230, 17%, 14%)";
        boxes.forEach(function (box) {
            box.style.background = "hsl(227, 47%, 96%)";
            box.addEventListener('mouseenter', function () {
                this.style.backgroundColor = "hsl(227, 47%, 90%)";
            });
            box.addEventListener('mouseleave', function () {
                this.style.backgroundColor = "hsl(227, 47%, 96%)";
            });
        });
    }
    else {
        document.body.style.background = "";
        document.body.style.color = "";
        boxes.forEach(function (box) {
            box.style.background = "";
            box.addEventListener('mouseenter', function () {
                this.style.backgroundColor = "hsl(227, 29%, 32%)";
            });
            box.addEventListener('mouseleave', function () {
                this.style.backgroundColor = "hsl(228, 28%, 20%)";
            });
        });
    }
});