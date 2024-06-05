import React, { useState } from 'react';
import { Card, GameState } from '../assets/types';
import '../styles/GameStart.css';
import { useNavigate } from 'react-router-dom';
import group156Image from '../image/DescribeGame/Group-156.png';
import appleImage from '../image/GameStart/apple.png';
import aImage from '../image/GameStart/A.png';
import oImage from '../image/GameStart/O.png';
import orangeImage from '../image/GameStart/orange.png';
import bImage from '../image/GameStart/b.jpg';
import bananaImage from '../image/GameStart/banana.jpg';
import gImage from '../image/GameStart/g.webp';
import grapesImage from '../image/GameStart/grapes.webp';
import pineapleImage from '../image/GameStart/pineapple.jpg';
import pImage from '../image/GameStart/p.jpg';
import mangoImage from '../image/GameStart/mongo.avif';
import mImage from '../image/GameStart/m.webp';

const initialCards: Card[] = [
  { id: 1, type: 'fruit', content: appleImage, isFlipped: false, isMatched: false },
  { id: 2, type: 'fruit', content: bananaImage, isFlipped: false, isMatched: false },
  { id: 3, type: 'fruit', content: grapesImage, isFlipped: false, isMatched: false },
  { id: 4, type: 'fruit', content: pineapleImage, isFlipped: false, isMatched: false },
  { id: 5, type: 'fruit', content: mangoImage, isFlipped: false, isMatched: false },
  { id: 6, type: 'fruit', content: orangeImage, isFlipped: false, isMatched: false },
  { id: 7, type: 'alphabet', content: aImage, isFlipped: false, isMatched: false },
  { id: 8, type: 'alphabet', content: bImage, isFlipped: false, isMatched: false },
  { id: 9, type: 'alphabet', content: gImage, isFlipped: false, isMatched: false },
  { id: 10, type: 'alphabet', content: pImage, isFlipped: false, isMatched: false },
  { id: 11, type: 'alphabet', content: mImage, isFlipped: false, isMatched: false },
  { id: 12, type: 'alphabet', content: oImage, isFlipped: false, isMatched: false },
];

const GameStart: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    cards: initialCards,
    moves: 0,
    matches: 0,
  });
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/start");
  }

  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const handleCardClick = (id: number) => {
    setGameState(prevState => {
      const cards = [...prevState.cards];
      const card = cards.find(c => c.id === id);

      if (!card || card.isFlipped || card.isMatched) return prevState;

      card.isFlipped = true;
      const newSelectedCards = [...selectedCards, card];
      setSelectedCards(newSelectedCards);

      if (newSelectedCards.length === 2) {
        const [firstCard, secondCard] = newSelectedCards;
        if (
          (firstCard.type === 'fruit' && secondCard.type === 'alphabet') ||
          (firstCard.type === 'alphabet' && secondCard.type === 'fruit')
        ) {
          if (
            (firstCard.content === appleImage && secondCard.content === aImage) ||
            (firstCard.content === bananaImage && secondCard.content === bImage) ||
            (firstCard.content === grapesImage && secondCard.content === gImage) ||
            (firstCard.content === pineapleImage && secondCard.content === pImage) ||
            (firstCard.content === mangoImage && secondCard.content === mImage) ||
            (firstCard.content === orangeImage && secondCard.content === oImage)
          ) {
            firstCard.isMatched = true;
            secondCard.isMatched = true;
            alert("It's a match!");
            setGameState({
              ...prevState,
              cards,
              matches: prevState.matches + 1,
            });
          } else {
            setTimeout(() => {
              firstCard.isFlipped = false;
              secondCard.isFlipped = false;
              setGameState({
                ...prevState,
                cards,
                moves: prevState.moves + 1,
              });
              setSelectedCards([]);
            }, 1000);
            return prevState;
          }
        } else {
          setTimeout(() => {
            firstCard.isFlipped = false;
            secondCard.isFlipped = false;
            setGameState({
              ...prevState,
              cards,
              moves: prevState.moves + 1,
            });
            setSelectedCards([]);
          }, 1000);
          return prevState;
        }
        setSelectedCards([]);
      }
      return { ...prevState, cards, moves: prevState.moves + 1 };
    });
  };

  return (
    <div className='game-start-cards'>
      <div onClick={handleBack}><img src={group156Image} alt="group156Image" className="group156-image" /></div>
      <div className="game-info">
        <p>Moves: {gameState.moves}</p>
        <p>Matches: {gameState.matches}</p>
      </div>

      <div className="game-start">
        <div className="pink-cards">
          {gameState.cards
            .filter(card => card.type === 'fruit')
            .map(card => (
              <div
                key={card.id}
                className={`card pink ${card.isFlipped ? 'flipped' : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-inner">
                  <div className="card-front-pink"></div>
                  <div className="card-back">
                    <img src={card.content} alt="content" />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="blue-cards">
          {gameState.cards
            .filter(card => card.type === 'alphabet')
            .map(card => (
              <div
                key={card.id}
                className={`card blue ${card.isFlipped ? 'flipped' : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-inner">
                  <div className="card-front-blue"></div>
                  <div className="card-back">
                    <img src={card.content} alt="content" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GameStart;
