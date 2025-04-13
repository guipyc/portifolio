import React, { useState } from 'react';
import './App.css';
import Portfolio from './Portfolio';
import BullsAndCows from './BullsAndCows';

export default function App() {
  const [page, setPage] = useState('portfolio');

  return (
    <div className="app">
      <nav>
        <button onClick={() => setPage('portfolio')}>Portfólio</button>
        <button onClick={() => setPage('game')}>Jogo Senha</button>
      </nav>
      {page === 'portfolio' ? <Portfolio /> : <BullsAndCows />}
    </div>
  );
}
