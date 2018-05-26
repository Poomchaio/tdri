$(function(){
    $('#datetime24').combodate();  
    $('input').combodate({
        minYear: 1975,
        maxYear: 2018,
        minuteStep: 10
    });
});