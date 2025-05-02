document.addEventListener("DOMContentLoaded", function () {
  var homeUrl = "home-snippet.html";

  sendGetRequest(homeUrl, function (responseText) {
    document.getElementById("main-content").innerHTML = responseText;
  });
});
