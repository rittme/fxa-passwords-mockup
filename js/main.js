const SYNC_URI = "https://fxa-password-manager-riadh.c9.io/api";

var requestHelper = {
  requestLogins: function (email, password) {
    var url = SYNC_URI + "?email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password);

    var xhr = new XMLHttpRequest();
    xhr.onload = this.requestListener;
    xhr.open("GET", url);
    //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
  },

  requestListener: function (event) {
    console.log(JSON.parse(this.responseText));
  }
};

requestHelper.requestLogins("brittmeyer@mozilla.com", "secreta11");