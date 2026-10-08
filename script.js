var toggle = false;

function collapse() {
    var insect_collapse = document.getElementById("insect-collapse");
    insect_collapse.hidden = !(insect_collapse.hidden);
    /*if (toggle) {
        insect_collapse.hidden = true;
        toggle = false;
    } else {
        insect_collapse.hidden = false;
        toggle = true;
    }*/
}