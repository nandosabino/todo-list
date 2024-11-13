import React from "react";

function Filter({ filter, setFilter, setSort }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="filter">
      <select value={filter} onChange={handleFilterChange}>
        <option value="All">Todas</option>
        <option value="Completed">Completadas</option>
        <option value="NotCompleted">Não Completadas</option>
      </select>

      <select onChange={handleSortChange}>
        <option value="Asc">Ordem Alfabética Ascendente</option>
        <option value="Desc">Ordem Alfabética Descendente</option>
        <option value="Cost">Ordenar por Custo</option>
        <option value="Deadline">Ordenar por Prazo</option>
      </select>
    </div>
  );
}

export default Filter;
