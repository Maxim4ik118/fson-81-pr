import { SHOW_CRITERIAS } from 'constans/constans';
import { useState } from 'react';

export const BookSearch = ({ onSelect, onFilter, filter }) => {
  const [counterValue, setCounterValue] = useState(0);
  const [currentMood, setCurrentMood] = useState('neutral'); // "neutral" | "good" | "bad"

  const handleIncrement = () => {
    setCounterValue(counterValue + 1)
  }

  return (
    <div>
      <h3>Search</h3>
      <br />
      <br />
      <br />

      <div>
        <p>
          Counter value: <b>{counterValue}</b>
        </p>
        <button onClick={handleIncrement}>Add counter</button>
      </div>
      <br />
      <br />
      <div>
        <p>
          Current mood: <b>{currentMood}</b>
        </p>
        <button onClick={() => setCurrentMood("neutral")}>Set Neutral Mood</button>
        <button onClick={() => setCurrentMood("good")}>Set Good Mood</button>
        <button onClick={() => setCurrentMood("bad")}>Set Bad Mood</button>
      </div>
      <br />
      <br />
      <input
        placeholder="title"
        onChange={onFilter}
        type="text"
        value={filter}
      />
      <div>
        {Object.keys(SHOW_CRITERIAS).map(criteria => {
          return (
            <button
              key={criteria}
              onClick={() => onSelect(SHOW_CRITERIAS[criteria])}
              type="button"
            >
              {criteria}
            </button>
          );
        })}
      </div>
    </div>
  );
};
