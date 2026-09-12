import React from 'react'

const SearchBar = ({ busqueda, setBusqueda }) => {

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Ingrese que tipo de bicicleta busca"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full border rounded-lg p-3"
      />
    </div>
  )
}

export default SearchBar