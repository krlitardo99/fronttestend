// ProfesorForm.js
import React, { useState } from 'react';

const ProfesorForm = ({ onProfesorCreated }) => {
    const [nombre, setNombre] = useState('');
    const [asignatura, setAsignatura] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:8080/api/profesores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, asignatura }),
            });

            console.log('Profesor creado exitosamente');
            onProfesorCreated();
        } catch (error) {
            console.error('Error al crear profesor', error);
        }
    };

    return (
        <div>
            <h3>Crear Profesor</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="asignatura" className="form-label">
                        Asignatura:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="asignatura"
                        value={asignatura}
                        onChange={(e) => setAsignatura(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Crear Profesor
                </button>
            </form>
        </div>
    );
};

export default ProfesorForm;
