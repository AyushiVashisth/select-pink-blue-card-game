// src/types.ts
export interface Card {
    id: number;
    type: 'fruit' | 'alphabet';
    content: string;
    isFlipped: boolean;
    isMatched: boolean;
  }
  
  export interface GameState {
    cards: Card[];
    moves: number;
    matches: number;
  }
  