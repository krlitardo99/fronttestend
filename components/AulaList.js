// AulaList.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AulaList = ({ aulas }) => {
    return (
        <div>
            <h3>Listado de Aulas</h3>
            <ul className="list-group">
                {aulas.map((aula) => (
                    <li key={aula.id} className="list-group-item">
                        Profesor: {aula.profesor}, Materia: {aula.materia}, Tema: {aula.tema}, Fecha: {aula.fecha}, Hora: {aula.hora}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AulaList;

