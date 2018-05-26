var Menu = {
    "TH": {
        "title": "อาชีพ",
        "jobs": [
            "วิศวกร",
            "2",
            "3"
        ]
    },
    "EN": {
        "title": "JOB",
        "jobs": [
            "Engineer",
            "2",
            "3"
        ]
    }

}

$(document).ready(function () {
    $("#th").click(setTH);
    $("#en").click(setEN);
});

function setTH() {
    $("#title").text(Menu.TH.title);
    console.log("th");
}

function setEN() {
    $("#title").text(Menu.EN.title);
}