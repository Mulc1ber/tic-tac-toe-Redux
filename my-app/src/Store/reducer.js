import { initialState } from './initialState';

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_FIELDS': {
            return { ...state, fields: payload };
        }
        case 'SET_CURRENT_PLAYER': {
            return { ...state, currentPlayer: payload };
        }
        case 'SET_IS_GAME_ENDED': {
            return { ...state, isGameEnded: payload };
        }
        case 'SET_IS_DRAW': {
            return { ...state, isDraw: payload };
        }

        default:
            return state;
    }
};
