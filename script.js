var mousePosition;
var offset = [0,0];
var notes = document.querySelectorAll(".note");
var clickedDown = false;

// note.style.position = "absolute";
// note.style.left = "0px";
// note.style.top = "0px";

notes.forEach(note => {note.addEventListener('mousedown', () => {
    note.style.position = "absolute";

    clickedDown = true;
    offset = [
        note.offsetLeft = 100,
        note.offsetTop = 100
    ];
}, true);
})

document.addEventListener('mouseup', () => {
    document.querySelector(".col-3:hover").innerHTML += `<div class="row"></div>`
    document.querySelector(".col-3 .note:active").innerHTML += `<div class="row">MOVED</div>`
    clickedDown = false;
}, true)

document.addEventListener('mousemove', (event) => {
    event.preventDefault();

    let column = document.querySelector('.column:hover');

    if (clickedDown) {
        mousePosition = {
            x : event.clientX,
            y : event.clientY
        };
        document.querySelector(".note:active").style.left = mousePosition.x - offset[0] + 'px';
        document.querySelector(".note:active").style.top = mousePosition.y - offset[1] + 'px';

        if (column =! null) {
            document.querySelector(".col-3 .note:active").innerHTML += `<div class="row">MOVED</div>`
            // document.querySelector(".note:active").style.position = "static";
        }

    }
})