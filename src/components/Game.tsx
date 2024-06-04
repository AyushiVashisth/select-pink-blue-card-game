import React from 'react';
import '../styles/Game.css';
import monkeyImage from '../image/monkey.png';
import vectorImage from '../image/Vector-123.png';
import cogImage from '../image/Cog.png';
// import group123Image from '../image/GameBoard/Group-123.png';
// import group149Image from '../image/Group-149.png';
// import heading1lifeskillsImage from '../image/GameBoard/Heading-1-life-skills.png';
import starImage from '../image/Star.png';
import ellipse3091Image from '../image/Ellipse-309.png';
import ellipse3101Image from '../image/Ellipse-310.png';
import ellipse3092Image from '../image/Ellipse-309.png';
import ellipse3102Image from '../image/Ellipse-310.png';
// import { useNavigate } from 'react-router-dom';

const Game: React.FC = () => {
    // const navigate = useNavigate()
    // const handleStart = () => {
    //     navigate("/start")
    // }
    return (
        <div className="game-board">
            <img src={monkeyImage} alt="Monkey" className="monkey-image" />
            <img src={vectorImage} alt="vectorImage" className="vector-image" />
            <img src={ellipse3091Image} alt="ellipse3091Image" className="ellipse3091-image" />
            <img src={ellipse3101Image} alt="ellipse3101Image" className="ellipse3101-image" />
            <img src={cogImage} alt="cogImage" className="cog-image" />
            <img src={starImage} alt="starImage" className="star-image" />
            <img src={ellipse3092Image} alt="ellipse3092Image" className="ellipse3092-image" />
            <img src={ellipse3102Image} alt="ellipse3102Image" className="ellipse3102-image" />
            {/* <div onClick={handleStart}> <img src={group123Image} alt="group123Image" className="group123-image" /></div>
            <img src={group149Image} alt="group149Image" className="group149-image" />
            <img src={heading1lifeskillsImage} alt="heading1lifeskillsImage" className="heading1lifeskills-image" /> */}
        </div>
    );
}

export default Game;
