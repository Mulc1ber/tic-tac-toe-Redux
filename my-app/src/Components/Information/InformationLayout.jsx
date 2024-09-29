import React, { useEffect, useState } from 'react';
import { store } from '../../Store/store';
import styles from './Information.module.css';

export const InformationLayout = () => {
    const [state, setState] = useState(store.getState());

    const displayingInformation = () => {
        if (state.isDraw) {
            return 'Ничья';
        } else if (!state.isDraw && state.isGameEnded) {
            return `Победа: "${state.currentPlayer}"`;
        } else {
            return `Ходит: "${state.currentPlayer}"`;
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

    return <div className={styles.Information}>{displayingInformation()}</div>;
};
