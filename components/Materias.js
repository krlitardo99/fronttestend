// Materias.js
import React, { useState, useEffect } from 'react';
import MateriaList from './MateriaList';
import MateriaForm from './MateriaForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const Materias = () => {
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        fetchData('materias', setMaterias);
    }, []);

    const fetchData = async (endpoint, setState) => {
        try {
            const response = await fetch(`http://localhost:8080/api/${endpoint}`);
            const data = await response.json();
            setState(data);
        } catch (error) {
            console.error(`Error al obtener datos de ${endpoint}`, error);
        }
    };

    const handleMateriaCreated = () => {
        fetchData('materias', setMaterias);
    };

    return (
        <div className="container mt-4">
            <h2>Materias</h2>
            <div className="row">
                <div className="col-md-6">
                    <MateriaForm onMateriaCreated={handleMateriaCreated} />
                </div>
                <div className="col-md-6">
                    <MateriaList materias={materias} />
                </div>
            </div>
        </div>
    );
};

export default Materias;
