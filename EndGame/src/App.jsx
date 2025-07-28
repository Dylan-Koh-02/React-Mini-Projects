import { useState } from "react";
import { languages } from "../public/languages.js";
import { clsx } from "clsx";

export default function Endgame() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);
  
  const wrongGuessCount=guessedLetters.filter(letter=>!currentWord.includes(letter)).length

  console.log(wrongGuessCount)

  const alphabetElements = alphabet.split("").map((alphabet) => {
    const isGuessed = guessedLetters.includes(alphabet);
    const isCorrect = isGuessed && currentWord.includes(alphabet);
    const isWrong = isGuessed && !currentWord.includes(alphabet);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        key={alphabet}
        onClick={() => addGuessedLetter(alphabet)}
      >
        {alphabet.toUpperCase()}
      </button>
    );
  });
  const letterElements = currentWord
    .split("")
    .map((letter, index) => (
      <span key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    ));
  const languageElements = languages.map((lang) => (
    <span
      style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
      className="chip"
      key={lang.name}
    >
      {lang.name}
    </span>
  ));

  function addGuessedLetter(letter) {
    setGuessedLetters(
      (prevLetters) =>
        prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]

      // return guessedLetters.includes(letter)
      // ? [...guessedLetters]
      // : [...guessedLetters, letter];

      // const letterSet = new Set(guessedLetters);
      // letterSet.add(letter);
      // return Array.from(letterSet);
    );
  }

  console.log(guessedLetters);

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the words within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You Win!</h2>
        <p>Well Done 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{alphabetElements}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}
