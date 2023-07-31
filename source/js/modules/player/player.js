const initPlayer = (videoContainer) => {
  const videoPlay = videoContainer.querySelector('.video [data-play-button]');
  const {videoId} = videoPlay.dataset;

  window.YT.ready(function () {
    const player = new window.YT.Player('player', {
      videoId,
    });

    const onPlayButtonClick = () => {
      videoContainer.classList.add('is-active');
      player.playVideo();
    };

    videoPlay.addEventListener('click', onPlayButtonClick);
  });
};

export const initPlayers = () => {
  document.querySelectorAll('.video').forEach(initPlayer);
};
