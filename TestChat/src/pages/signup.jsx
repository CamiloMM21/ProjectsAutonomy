import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../database/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user});
                navigate("/menu");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return (
        <div className="modal fade" tabIndex="-1" id="signupModal" aria-labelledby="signup" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content bg-black">
                    <div className="modal-header text-white">
                        <h5 className="modal-title" id="signup">Sign Up</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-white">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="bg-black pt-2 pb-4 ps-4 pe-4 rounded-5 text-secondary shadow" style={{ width: 40 + 'rem' }}>
                                <div className="d-flex justify-content-center">
                                    <img src="./img/login-icon.svg" alt="login-icon" style={{ height: 7 + 'rem' }} />
                                </div>
                                <div className="text-center fs-1 fw-bold text-white">Registrarse</div>
                                <div className="container">
                                    <form onSubmit={handleSignup}>
                                        <div className="row gap-3">
                                            <div className="col p-0">
                                                <div className="input-group mt-4">
                                                    <div className="input-group-text bg-danger">
                                                        <img src="./img/email-icon.svg" alt="email-icon" style={{ height: 1 + 'rem' }} />
                                                    </div>
                                                    <input className="form-control" type="email" placeholder="Correo" onChange={e => setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col p-0">
                                                <div className="input-group mt-4">
                                                    <div className="input-group-text bg-danger">
                                                        <img src="./img/password-icon.svg" alt="password-icon" style={{ height: 1 + 'rem' }} />
                                                    </div>
                                                    <input className="form-control" type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gap-3">
                                            <div className="col p-0">
                                                <div className="input-group mt-2">
                                                    <div className="input-group-text bg-danger">
                                                        <img src="./img/username-icon.svg" alt="username-icon" style={{ height: 1 + 'rem' }} />
                                                    </div>
                                                    <input className="form-control" type="text" placeholder="Usuario" />
                                                </div>
                                            </div>
                                            <div className="col p-0">
                                                <div className="input-group mt-2">
                                                    <div className="input-group-text bg-danger">
                                                        <img src="./img/phone-icon.svg" alt="phone-icon" style={{ height: 1 + 'rem' }} />
                                                    </div>
                                                    <input className="form-control" type="text" placeholder="Telefono" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gap-3">
                                            <div className="col p-0">
                                                <div className="input-group mt-2">
                                                    <div className="input-group-text bg-danger">
                                                        <img src="./img/city-icon.svg" alt="city-icon" style={{ height: 1 + 'rem' }} />
                                                    </div>
                                                    <input className="form-control" type="text" placeholder="Ciudad" />
                                                </div>
                                            </div>
                                            <div className="col p-0">
                                                <div className="input-group mt-2">
                                                    <div className="input-group-text bg-danger">
                                                        <img src="./img/neighborhood-icon.svg" alt="neighborhood-icon" style={{ height: 1 + 'rem' }} />
                                                    </div>
                                                    <input className="form-control" type="text" placeholder="Barrio" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gap-3">
                                            <div className="col p-0">

                                            </div>
                                            <div className="col-8 p-0">
                                                <div className="input-group mt-2">
                                                    <div className="input-group-text bg-danger">
                                                        <img src="./img/username-icon.svg" alt="username-icon" style={{ height: 1 + 'rem' }} />
                                                    </div>
                                                    <input className="form-control" type="text" placeholder="Nombre Completo" />
                                                </div>
                                            </div>
                                            <div className="col p-0">

                                            </div>
                                        </div>
                                        <div className="row gap-3">
                                            <div className="col p-0">

                                            </div>
                                            <div className="col-8 p-0">
                                                <button type="submit" className="btn text-white w-100 mt-4 fw-semibold shadow-sm bg-danger" data-bs-dismiss="modal" aria-label="Close">
                                                    Crear Cuenta
                                                </button>
                                            </div>
                                            <div className="col p-0">

                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="d-flex gap-1 justify-content-center mt-1">
                                    <div>Ya tienes una cuenta?</div>
                                    <a href="#" className="text-decoration-none text-danger fw-semibold" data-bs-toggle="modal" data-bs-target="#signinModal">Inicia sesión</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup