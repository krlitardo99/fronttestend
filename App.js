import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Profesores from './components/Profesores';
import Materias from './components/Materias';
import Aulas from './components/Aulas';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="container mt-4">
                <h1 className="text-center">Sistema de Aulas</h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/profesores" className="nav-link">
                                        Profesores
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/materias" className="nav-link">
                                        Materias
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/aulas" className="nav-link">
                                        Aulas
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <hr />

                <Routes>
                    <Route path="/profesores" element={<Profesores />} />
                    <Route path="/materias" element={<Materias />} />
                    <Route path="/aulas" element={<Aulas />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
