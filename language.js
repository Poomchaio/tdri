var Menu = {
  TH: {
    title: "อาชีพ",
    startDate: "dเริ่มate",
    endDate: "จบ",
    apply: "เอ",
    export: "เอก",
    onet_job: "onet"
  },
  EN: {
    title: "Job Visualization",
    startDate: "Start Date",
    endDate: "End Date",
    apply: "Apply",
    export: "export",
    onet_job: "โอเนต"
  }
};
var language = "TH";
$(document).ready(function() {
  $("#th").click(setTH);
  $("#en").click(setEN);
});

function setTH() {
  //   $("#title").text(Menu.TH.title);
  //   console.log("th");
  language = "TH";
  console.log(Menu[language]["title"]);
  console.log(language);
  document.getElementById("title").innerHTML = Menu[language]["title"];
  document.getElementById("startDateLabel").innerHTML =
    Menu[language]["startDate"];
  document.getElementById("endDateLabel").innerHTML = Menu[language]["endDate"];
  document.getElementById("apply").innerHTML = Menu[language]["apply"];
  document.getElementById("exportBtn").innerHTML = Menu[language]["export"];
}

function setEN() {
  //   $("#title").text(Menu.EN.title);
  language = "EN";
  console.log(Menu[language]["title"]);
  console.log(language);
  document.getElementById("title").innerHTML = Menu[language]["title"];
  document.getElementById("startDateLabel").innerHTML =
    Menu[language]["startDate"];
  document.getElementById("endDateLabel").innerHTML = Menu[language]["endDate"];
  document.getElementById("apply").innerHTML = Menu[language]["apply"];
  document.getElementById("exportBtn").innerHTML = Menu[language]["export"];
}
window.onload = function() {
  document.getElementById("title").innerHTML = Menu[language]["title"];
  document.getElementById("startDateLabel").innerHTML =
    Menu[language]["startDate"];
  document.getElementById("endDateLabel").innerHTML = Menu[language]["endDate"];
  document.getElementById("apply").innerHTML = Menu[language]["apply"];
  document.getElementById("exportBtn").innerHTML = Menu[language]["export"];
};
