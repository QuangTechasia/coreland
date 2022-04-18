const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
let mousedown = false;

function togglePlay(e) {
  if (video.paused === true) {
    video.play()
    toggle.innerHTML = '<i class="fal fa-pause-circle"></i>';
  } else {
    video.pause();
    toggle.innerHTML = '<i class="fal fa-play"></i>';
  }
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
}
function moveSlider(e) {
  video[this.name] = this.value;
}

function skip(e) {
  video.currentTime += parseInt(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
ranges.forEach(range => range.addEventListener('change', moveSlider));
skipButtons.forEach(button => button.addEventListener('click', skip));

$(document).ready(function(){
    $('.player__controls').click(function(){
        $('.thumbnail-video').css({'display':'none', 'transition':'all .4s'});
    });
})