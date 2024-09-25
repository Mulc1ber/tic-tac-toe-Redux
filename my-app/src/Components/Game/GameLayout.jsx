import React from 'react';
import PropTypes from 'prop-types';
import { PLAYER } from '../../Constants';
import { Information } from '../Information/Information';
import { Field } from '../Field/Field';
import { Restart } from '../Restart/Restart';
import styles from './Game.module.css';

// const PLAYER = {
//     crosses: 'X',
//     noughts: 'O',
// };

const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const checkWinner = (fields, currentPlayer) => {
    return WINNING_COMBOS.some((pattern) =>
        pattern.every((number) => fields[number] === currentPlayer),
    );
};

const checkEmpty = (fields) => {
    return fields.some((field) => field === '');
};

export const GameLayout = ({
    fields,
    setFields,
    currentPlayer,
    setCurrentPlayer,
    isGameEnded,
    setIsGameEnded,
    isDraw,
    setIsDraw,
}) => {
    const handleClick = (index) => {
        if (fields[index] === '' && isGameEnded === false) {
            const newFields = fields.slice();
            newFields[index] = currentPlayer;
            setFields(newFields);

            if (checkWinner(newFields, currentPlayer)) {
                setIsGameEnded(true);
                return;
            } else if (!checkEmpty(newFields)) {
                setIsDraw(true);
                setIsGameEnded(true);
                return;
            }

            setCurrentPlayer((prevState) =>
                prevState === PLAYER.crosses ? PLAYER.noughts : PLAYER.crosses,
            );
        }
    };

    const handleRestart = () => {
        setFields(Array(9).fill(''));
        setCurrentPlayer('X');
        setIsGameEnded(false);
        setIsDraw(false);
    };

    const displayingInformation = () => {
        if (isDraw) {
            return 'Ничья';
        } else if (!isDraw && isGameEnded) {
            return `Победа: "${currentPlayer}"`;
        } else {
            return `Ходит: "${currentPlayer}"`;
        }
    };

    return (
        <div className={styles.Game}>
            <Information>{displayingInformation()}</Information>
            <Field fields={fields} handleClick={handleClick} />
            <Restart isGameEnded={isGameEnded} handleRestart={handleRestart} />
        </div>
    );
};

GameLayout.propTypes = {
    fields: PropTypes.array,
    setFields: PropTypes.func,
    currentPlayer: PropTypes.string,
    setCurrentPlayer: PropTypes.func,
    isGameEnded: PropTypes.bool,
    setIsGameEnded: PropTypes.func,
    isDraw: PropTypes.bool,
    setIsDraw: PropTypes.func,
};
