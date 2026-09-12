import React from 'react'

const SearchBar = ({ busqueda, setBusqueda }) => {

  return (
    <div className="mb-6 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Buscar por categoría"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-xl mx-auto"
      />
    </div>
  )
}

export default SearchBar