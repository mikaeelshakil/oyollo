// Javascript Code

//// tutorial video start
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('myVideo');
  var playIcon = document.getElementById('playIcon');
  var pauseIcon = document.getElementById('pauseIcon');
  var overlay = document.getElementById('overlay2');

  function togglePlayPause() {
    if (video.paused) {
      video.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      overlay.style.opacity = 0;
    } else {
      video.pause();
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      overlay.style.opacity = 1;
    }
  }

  playIcon.addEventListener('click', togglePlayPause);
  pauseIcon.addEventListener('click', togglePlayPause);

  overlay.addEventListener('mouseenter', function () {
    if (!video.paused) {
      overlay.style.opacity = 1;
      pauseIcon.style.display = 'block';
      playIcon.style.display = 'none';
    }
  });

  overlay.addEventListener('mouseleave', function () {
    if (!video.paused) {
      overlay.style.opacity = 0;
    }
  });

  // Show play icon when video ends
  video.addEventListener('ended', function () {
    overlay.style.opacity = 1;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  });
});
// tutorial video end


// Jquery Code
$(document).ready(function(){
	
});