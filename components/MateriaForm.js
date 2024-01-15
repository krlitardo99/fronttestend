// MateriaForm.js
import React, { useState } from 'react';

const MateriaForm = ({ onMateriaCreated }) => {
    const [nombre, setNombre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:8080/api/materias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre }),
            });

            console.log('Materia creada exitosamente');
            onMateriaCreated();
        } catch (error) {
            console.error('Error al crear materia', error);
        }
    };

    return (
        <div>
            <h3>Crear Materia</h3>
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
                <button type="submit" className="btn btn-primary">
                    Crear Materia
                </button>
            </form>
        </div>
    );
};

export default MateriaForm;
