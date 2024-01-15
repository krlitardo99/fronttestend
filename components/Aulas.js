// Aulas.js
import React, { useState, useEffect } from 'react';
import AulaList from './AulaList';
import AulaForm from './AulaForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const Aulas = () => {
    const [aulas, setAulas] = useState([]);

    useEffect(() => {
        fetchData('aulas', setAulas);
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

    const handleAulaCreated = () => {
        fetchData('aulas', setAulas);
    };

    return (
        <div className="container mt-4">
            <h2>Aulas</h2>
            <div className="row">
                <div className="col-md-6">
                    <AulaForm onAulaCreated={handleAulaCreated} />
                </div>
                <div className="col-md-6">
                    <AulaList aulas={aulas} />
                </div>
            </div>
        </div>
    );
};

export default Aulas;
