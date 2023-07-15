import { SHOW_CRITERIAS } from 'constans/constans';

export const BookSearch = ({ onSelect, onFilter, filter }) => {
  return (
    <div>
      <h3>Search</h3>
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
              onClick={() => onSelect(SHOW_CRITERIAS[criteria])}
              type="button"
            >
              {criteria}
            </button>
          );
        })}
        {/* <button onClick={() => onSelect(SHOW_CRITERIAS.all)} type="button">
          All
        </button>
        <button
          onClick={() => onSelect(SHOW_CRITERIAS.favourites)}
          type="button"
        >
          Favourites
        </button> */}
      </div>
    </div>
  );
};
