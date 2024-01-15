// AulaForm.js
import React, { useState, useEffect } from 'react';

const AulaForm = () => {
    const [tema, setTema] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [profesores, setProfesores] = useState([]);
    const [materias, setMaterias] = useState([]);
    const [selectedProfesor, setSelectedProfesor] = useState('');
    const [selectedMateria, setSelectedMateria] = useState('');

    useEffect(() => {
        // Obtener la lista de profesores al montar el componente
        fetch('/profesores')
            .then(response => response.json())
            .then(data => setProfesores(data));

        // Obtener la lista de materias al montar el componente
        fetch('/materias')
            .then(response => response.json())
            .then(data => setMaterias(data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('/crearAula', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombreProfesor: selectedProfesor,
                    nombreMateria: selectedMateria,
                    tema,
                    fecha,
                    hora,
                }),
            });

            console.log('Aula creada exitosamente');
        } catch (error) {
            console.error('Error al crear aula', error);
        }
    };

    return (
        <div>
            <h3>Crear Aula</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="tema" className="form-label">Tema:</label>
                    <input type="text" className="form-control" id="tema" value={tema} onChange={(e) => setTema(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha" className="form-label">Fecha:</label>
                    <input type="text" className="form-control" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="hora" className="form-label">Hora:</label>
                    <input type="text" className="form-control" id="hora" value={hora} onChange={(e) => setHora(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="profesor" className="form-label">Profesor:</label>
                    <select className="form-control" id="profesor" value={selectedProfesor} onChange={(e) => setSelectedProfesor(e.target.value)}>
                        {profesores.map((profesor) => (
                            <option key={profesor.id} value={profesor.nombre}>
                                {profesor.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="materia" className="form-label">Materia:</label>
                    <select className="form-control" id="materia" value={selectedMateria} onChange={(e) => setSelectedMateria(e.target.value)}>
                        {materias.map((materia) => (
                            <option key={materia.id} value={materia.nombre}>
                                {materia.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Crear Aula</button>
            </form>
        </div>
    );
};

export default AulaForm;
