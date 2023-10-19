function updateLinks(expression) {
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    href = anchors[i].href;
    console.log(href);
    if (href.includes("graphite")) {
      url = new URL(href)
      url.searchParams.set("from", expression);
      anchors[i].href = url.toString();
    }
  }
  var anchors = document.getElementsByTagName("img");
  for (var i = 0; i < anchors.length; i++) {
    src = anchors[i].src;
    console.log(src);
    if (src.includes("graphite")) {
	url = new URL(src)
      url.searchParams.set("from", expression);
      anchors[i].src = url.toString();
    }
  }
}

function deActivate() {
  document.getElementById("nav-hour").className = "";
  document.getElementById("nav-day").className = "";
  document.getElementById("nav-36hour").className = "";
  document.getElementById("nav-week").className = "";
  document.getElementById("nav-month").className = "";
  document.getElementById("nav-year").className = "";
  document.getElementById("nav-all").className = "";
}

function displayHour() {
  deActivate();
  document.getElementById("nav-hour").className = "active";
  updateLinks("-1h");
}

function display36Hour() {
  deActivate();
  document.getElementById("nav-36hour").className = "active";
  updateLinks("-36h")
}

function displayDay() {
  deActivate();
  document.getElementById("nav-day").className = "active";
  updateLinks("-1d");
}

function displayWeek() {
  deActivate();
  document.getElementById("nav-week").className = "active";
  updateLinks("-1w");
}

function displayMonth() {
  deActivate();
  document.getElementById("nav-month").className = "active";
  updateLinks("-1mon");
}

function displayYear() {
  deActivate();
  document.getElementById("nav-year").className = "active";
  updateLinks("-1y");
}

function displayAll() {
  deActivate();
  document.getElementById("nav-all").className = "active";
    updateLinks("-10y");
}
