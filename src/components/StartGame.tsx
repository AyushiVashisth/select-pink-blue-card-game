import React, { useEffect, useState } from 'react';
import '../styles/StartGame.css';
import monkeyImage from '../image/monkey.png';
import vectorImage from '../image/Vector-123.png';
import cogImage from '../image/Cog.png';
import group123Image from '../image/StartGame/Group-123.png';
import group149Image from '../image/Group-149.png';
import heading1lifeskillsImage from '../image/StartGame/Heading-1-life-skills.png';
import starImage from '../image/Star.png';
import ellipse3091Image from '../image/Ellipse-309.png';
import ellipse3101Image from '../image/Ellipse-310.png';
import ellipse3092Image from '../image/Ellipse-309.png';
import ellipse3102Image from '../image/Ellipse-310.png';
import group156Image from '../image/StartGame/Group-156.png';
import group155Image from '../image/StartGame/Group-155.png';
import { useNavigate } from 'react-router-dom';

const StartGame: React.FC = () => {
    const navigate = useNavigate();
    const [jump, setJump] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setJump(prevJump => !prevJump);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleStart = () => {
        navigate("/next");
    }
    const handleBack = () => {
        navigate("/");
    }

    return (
        <div className="game-board">
            <img src={monkeyImage} alt="Monkey" className={`monkey-image ${jump ? 'jump' : ''}`} />
            <img src={vectorImage} alt="Vector" className="vector-image" />
            <img src={ellipse3091Image} alt="Ellipse 3091" className="ellipse3091-image" />
            <img src={ellipse3101Image} alt="Ellipse 3101" className="ellipse3101-image" />
            <img src={cogImage} alt="Cog" className="cog-image" />
            <img src={starImage} alt="Star" className="star-image" />
            <img src={ellipse3092Image} alt="Ellipse 3092" className="ellipse3092-image" />
            <img src={ellipse3102Image} alt="Ellipse 3102" className="ellipse3102-image" />
            <div onClick={handleStart}>
                <img src={group123Image} alt="Group 123" className="group123-image" />
            </div>
            <img src={group149Image} alt="Group 149" className="group149-image" />
            <img src={heading1lifeskillsImage} alt="Heading Life Skills" className="heading1lifeskills1-image" />
            <img src={group155Image} alt="group155Image" className="group155-image" />
            <div onClick={handleBack}><img src={group156Image} alt="group156Image" className="group156-image" /></div>
        </div>
    );
}

export default StartGame;
