const SearchBar = ({ city, setCity, onSearch, loading }) => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search any city in the world..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
        />
        <button onClick={onSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;