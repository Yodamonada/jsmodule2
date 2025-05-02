function sendGetRequest(requestUrl, responseHandler) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      responseHandler(this.responseText);
    }
  };
  request.open("GET", requestUrl, true);
  request.send(null);
}
