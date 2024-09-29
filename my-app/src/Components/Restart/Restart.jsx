import React, { useEffect, useState } from 'react';
import { store } from '../../Store/store';
import styles from './Restart.module.css';

export const Restart = () => {
    const [state, setState] = useState(store.getState());

    const handleRestart = () => {
        store.dispatch({ type: 'SET_FIELDS', payload: Array(9).fill('') });
        store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' });
        store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: false });
        store.dispatch({ type: 'SET_IS_DRAW', payload: false });
    };

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <button className={styles.Restart} disabled={!state.isGameEnded} onClick={handleRestart}>
            Начать заново
        </button>
    );
};
