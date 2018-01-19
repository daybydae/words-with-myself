import Game from './game';

$( () => {
  const game = new Game();
  $('#play').on('click', game.handlePlayButtonClick.bind(game));
});
