import React, { useState } from 'react';

function generateSecret() {
  let digits = [];
  while (digits.length < 4) {
    let digit = Math.floor(Math.random() * 10);
    if (!digits.includes(digit)) digits.push(digit);
  }
  return digits.join('');
}

function getBullsAndCows(secret, guess) {
  let bulls = 0, cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }
  return { bulls, cows };
}

export default function BullsAndCows() {
  const [secret, setSecret] = useState(generateSecret());
  const [guess, setGuess] = useState('');
  const [history, setHistory] = useState([]);

  const handleGuess = () => {
    // Verifica se são 4 dígitos numéricos únicos
    if (!/^\d{4}$/.test(guess) || new Set(guess).size !== 4) {
      alert('Digite 4 dígitos únicos!');
      return;
    }

    const result = getBullsAndCows(secret, guess);
    setHistory([{ guess, ...result }, ...history]);
    setGuess('');
  };

  return (
    <div className="game">
      <h2>Jogo Senha (Bulls and Cows)</h2>
      <input
        type="text"
        maxLength="4"
        value={guess}
        onChange={e => {
          const value = e.target.value;
          if (/^\d*$/.test(value)) setGuess(value); // Só aceita números
        }}
        placeholder="Digite 4 dígitos"
      />
      <button onClick={handleGuess}>Enviar</button>
      <button onClick={() => alert(`A senha era: ${secret}`)}>Mostrar Senha</button>

      <ul>
        {history.map((item, idx) => (
          <li key={idx}>
            {item.guess} - {item.bulls} certas, {item.cows} erradas
          </li>
        ))}
      </ul>
    </div>
  );
}
