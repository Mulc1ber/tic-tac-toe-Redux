import React, { useEffect, useState } from 'react';
import { PLAYER } from '../../Constants';
import { checkEmpty, checkWinner } from '../../utils';
import { store } from '../../Store/store';
import styles from './Field.module.css';

export const FieldLayout = () => {
    const [state, setState] = useState(store.getState());

    const handleClick = (index) => {
        if (state.fields[index] === '' && state.isGameEnded === false) {
            const newFields = state.fields.slice();
            newFields[index] = state.currentPlayer;
            store.dispatch({ type: 'SET_FIELDS', payload: newFields });

            if (checkWinner(newFields, state.currentPlayer)) {
                store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
                return;
            } else if (!checkEmpty(newFields)) {
                store.dispatch({ type: 'SET_IS_DRAW', payload: true });
                store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
                return;
            }
            store.dispatch({
                type: 'SET_CURRENT_PLAYER',
                payload: state.currentPlayer === PLAYER.crosses ? PLAYER.noughts : PLAYER.crosses,
            });
        }
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
        <div className={styles.FieldsLayout}>
            {state.fields.map((field, index) => (
                <div key={index} className={styles.Field} onClick={() => handleClick(index)}>
                    {field}
                </div>
            ))}
        </div>
    );
};
