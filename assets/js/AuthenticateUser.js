$(document).ready(function () {
  debugger;
  const getLTokens = localStorage.getItem("token");
  //const getSTokens = sessionStorage.removeItem("token");
  if (getLTokens === undefined) {
    alert("Session expired! Please log in again.");
    window.location.href = "login.html";
    return
  }

  if (!sessionStorage.getItem("token")) {
    alert("Session expired! Please log in again.");
    window.location.href = "login.html";
  }

  $("#logoutBtn").click(function () {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    alert("Logged out successfully!");
    window.location.href = "login.html";
  });

  window.addEventListener("storage", function (event) {
    debugger;
    sessionStorage.removeItem("token");
    if (event.key === "token" && event.newValue === null) {
      alert("You have been logged out from another session.");
      window.location.href = "login.html";
    }
  });
});
