function mute() {
    if (document.getElementById("mute-switch").checked)
        document.getElementById("music").muted = false;
    else
        document.getElementById("music").muted = true;
}
