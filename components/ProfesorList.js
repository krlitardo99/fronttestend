// ProfesorList.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfesorList = ({ profesores }) => {
    return (
        <div>
            <h3>Listado de Profesores</h3>
            <ul className="list-group">
                {profesores.map((profesor) => (
                    <li key={profesor.id} className="list-group-item">
                        {profesor.nombre} - {profesor.asignatura}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfesorList;
