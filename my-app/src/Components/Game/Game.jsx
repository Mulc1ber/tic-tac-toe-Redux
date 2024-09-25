import React from 'react';
import { useState } from 'react';
import { PLAYER } from '../../Constants';
import { GameLayout } from './GameLayout';

export const Game = () => {
    const [fields, setFields] = useState(Array(9).fill(''));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER.crosses);
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);

    return (
        <GameLayout
            fields={fields}
            setFields={setFields}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            isGameEnded={isGameEnded}
            setIsGameEnded={setIsGameEnded}
            isDraw={isDraw}
            setIsDraw={setIsDraw}
        />
    );
};
