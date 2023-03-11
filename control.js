$(document).ready(function () {
  $("#login-form").submit(function (event) {
    event.preventDefault();
    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();

    // Replace the condition with your own login check
    if (username === "omkar" && password === "123456") {
      window.location.href = "user1.html";
    } 
    else if (username === "aman" && password === "123456") {
      window.location.href = "user2.html";
    } 
    else if (username === "sahil" && password === "123456") {
      window.location.href = "user3.html";
    } 
    else {
      $(".error").html("Invalid username or password");
    }
  });
});

// user
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
// user
