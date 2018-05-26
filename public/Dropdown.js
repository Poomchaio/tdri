window.onload = addDropdown;

function addDropdown() {
    for (i = 0; i < dropdown1.length; i++) {
        $('#dropdownMenu').append(jQuery('<a/>', {
            class: 'dropdown-item',
            id: 'item'.concat(i),
            href: '#',
            text: 'item'.concat(i)
        }));
        console.log(i)
    }

    // for (i = 0; i < dropdown1.length; i++) {
    //     $('#dropdownMenu2').append(jQuery('<a/>', {
    //         class: 'dropdown-item',
    //         id: 'itemsss'.concat(i),
    //         // href: '#test',
    //         text: 'itemsss'.concat(i)
    //     }));
    //     console.log(i)
    // }



}

$(document).ready(function () {
    $("#dropdownMenu1").click(function (event) {
        $("#dropdownMenuButton1").text(event.target.id);
        console.log(1);
    });
    $("#dropdownMenu2").click(function (event) {
        $("#dropdownMenuButton2").text(event.target.id);
        console.log(2);
    });
});



