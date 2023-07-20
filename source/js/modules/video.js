const videoWrapper = document.querySelector('.gym__video-wrapper');
const playButton = document.querySelector('.gym__video-button');

export const initPlayer = () => {
  window.YT.ready(function () {
    const player = new window.YT.Player('player', {
      videoId: '9TZXsZItgdw',
    });

    const onPlayButtonClick = () => {
      videoWrapper.classList.add('is-active');
      player.playVideo();
    };

    playButton.addEventListener('click', onPlayButtonClick);
  });
};
