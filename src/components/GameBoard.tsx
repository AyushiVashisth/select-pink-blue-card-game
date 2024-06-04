import React from 'react';
import '../styles/GameBoard.css';
import monkeyImage from '../image/monkey.png';
import vectorImage from '../image/Vector-123.png';
import cogImage from '../image/Cog.png';
import group123Image from '../image/GameBoard/Group-123.png';
import group149Image from '../image/Group-149.png';
import heading1lifeskillsImage from '../image/GameBoard/Heading-1-life-skills.png';
import starImage from '../image/Star.png';
import ellipse3091Image from '../image/Ellipse-309.png';
import ellipse3101Image from '../image/Ellipse-310.png';
import ellipse3092Image from '../image/Ellipse-309.png';
import ellipse3102Image from '../image/Ellipse-310.png';
import { useNavigate } from 'react-router-dom';
import Game from './Game';

const GameBoard: React.FC = () => {
    const navigate = useNavigate()
    const handleStart = () => {
        navigate("/start")
    }
    return (
        <div className="game-board">
            <Game />
            <div onClick={handleStart}> <img src={group123Image} alt="group123Image" className="group123-image" /></div>
            <img src={group149Image} alt="group149Image" className="group149-image" />
            <img src={heading1lifeskillsImage} alt="heading1lifeskillsImage" className="heading1lifeskills-image" />
        </div>
    );
}

export default GameBoard;
