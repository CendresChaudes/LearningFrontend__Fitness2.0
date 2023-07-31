const videoContainer = document.querySelector('.video');
const videoPlay = document.querySelector('.video [data-video=play]');

export const initPlayer = () => {
  if (videoContainer) {
    window.YT.ready(function () {
      const player = new window.YT.Player('player', {
        videoId: '9TZXsZItgdw',
      });

      const onPlayButtonClick = () => {
        videoContainer.classList.add('is-active');
        player.playVideo();
      };

      videoPlay.addEventListener('click', onPlayButtonClick);
    });
  }
};
