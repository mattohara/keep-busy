const robot = require('robotjs');
const ioHook = require('iohook');

ioHook.on('keydown', (event) => {
    if (event.keycode == 1) {
        process.exit();
    }
});
ioHook.start();

robot.setMouseDelay(2);

var mouseMovement = 50;

function doSetTimeout() {
    setTimeout(function() {
        for (var x=0; x < width; x=x+10) {
            y = height * Math.sin((twoPI * x) / width) + height;
            robot.moveMouse(x,y);
        }
        openNotepad();
        robot.typeString("Lorem ipsum dolor");
        closeNotepad();

        doSetTimeout();
    }, 15000);
}
function openNotepad() {
    robot.keyToggle("command", "down");
    robot.keyTap("r");
    robot.keyToggle("command", "up");
    robot.typeString("notepad");
    robot.keyTap("enter");
}

function closeNotepad() {
    robot.keyToggle("alt", "down");
    robot.keyTap("f4");
    robot.keyToggle("alt", "up");
    robot.keyToggle("alt", "down");
    robot.keyTap("n");
    robot.keyToggle("alt", "up");
}

openNotepad();
doSetTimeout();