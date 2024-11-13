const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Buscar por tarefa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
