export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_FIELDS': {
            return payload;
        }
        case 'SET_CURRENT_PLAYER': {
            return { ...state, value: payload };
        }
        case 'SET_IS_GAME_ENDED': {
            return payload;
        }
        case 'SET_IS_DRAW': {
            return payload;
        }

        default:
            return state;
    }
};
