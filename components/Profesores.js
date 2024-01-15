// Profesores.js
import React, { useState, useEffect } from 'react';
import ProfesorList from './ProfesorList';
import ProfesorForm from './ProfesorForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profesores = () => {
    const [profesores, setProfesores] = useState([]);

    useEffect(() => {
        fetchData('profesores', setProfesores);
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

    const handleProfesorCreated = () => {
        fetchData('profesores', setProfesores);
    };

    return (
        <div className="container mt-4">
            <h2>Profesores</h2>
            <div className="row">
                <div className="col-md-6">
                    <ProfesorForm onProfesorCreated={handleProfesorCreated} />
                </div>
                <div className="col-md-6">
                    <ProfesorList profesores={profesores} />
                </div>
            </div>
        </div>
    );
};

export default Profesores;
