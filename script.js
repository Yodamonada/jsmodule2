document.addEventListener("DOMContentLoaded", function () {
  var homeUrl = "snippets/home-snippet.html";

  sendGetRequest(homeUrl, function (responseText) {
    document.getElementById("main-content").innerHTML = responseText;
  });
});
