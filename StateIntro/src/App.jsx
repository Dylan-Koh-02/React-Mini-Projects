import { useState } from "react";

function App() {
  const [isGoingOut, setIsGoingOut] = useState(false);
  const [myFavourite,setMyFavourite] = useState([])

  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavourite.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing(){
    setMyFavourite([...myFavourite,allFavoriteThings[myFavourite.length]])
  }

  function changeMind() {
    setIsGoingOut(!isGoingOut); // prev=>!prev (or any name_
  }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button
        onClick={changeMind}
        className="value"
        aria-label={`Current answer is ${
          isGoingOut ? "Yes" : "No"
        }. Click to change it!`}
      >
        {isGoingOut ? "Yes" : "No"}
      </button>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
    
  );
}

export default App;
