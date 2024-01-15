// api.js
import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: baseURL,
});

export const profesoresAPI = {
    getAll: () => api.get('/profesores'),
    create: (profesor) => api.post('/profesores', profesor),
};

export const materiasAPI = {
    getAll: () => api.get('/materias'),
    create: (materia) => api.post('/materias', materia),
};

export const aulasAPI = {
    getAll: () => api.get('/aulas'),
    create: (aula) => api.post('/aulas', aula),
};
