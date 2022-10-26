import settingsReducer from './settings';
import deckReducer from './deck';
import gameStateReducer from './gameState';

export default {
  deck: deckReducer,
  settings: settingsReducer,
  gameState: gameStateReducer
};
