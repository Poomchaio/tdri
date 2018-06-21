$(function() {
  $("#datetime24").combodate();
  $("input").combodate({
    minYear: 2017,
    maxYear: new Date().getFullYear(),
    minuteStep: 10
  });
});
