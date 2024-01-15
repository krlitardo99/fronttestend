// MateriaList.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MateriaList = ({ materias }) => {
    return (
        <div>
            <h3>Listado de Materias</h3>
            <ul className="list-group">
                {materias.map((materia) => (
                    <li key={materia.id} className="list-group-item">
                        {materia.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MateriaList;
