import { useContext, useState } from 'react';
import { auth } from '../database/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext); 

    const handleSignin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                dispatch({type:"LOGIN", payload:user});
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return (
        <div className="modal fade" tabIndex="-1" id="signinModal" aria-labelledby="signin" aria-hidden="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content bg-black">
                    <div className="modal-header text-white">
                        <h5 className="modal-title" id="signin">Sign In</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-white">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="bg-black pt-2 pb-4 ps-4 pe-4 rounded-5 text-secondary shadow" style={{ width: 25 + 'rem' }}>
                                <form onSubmit={handleSignin}>
                                    <div className="d-flex justify-content-center">
                                        <img src="./img/login-icon.svg" alt="login-icon" style={{ height: 7 + 'rem' }} />
                                    </div>
                                    <div className="text-center fs-1 fw-bold text-white">Login</div>
                                    <div className="input-group mt-4">
                                        <div className="input-group-text bg-danger">
                                            <img src="./img/username-icon.svg" alt="username-icon" style={{ height: 1 + 'rem' }} />
                                        </div>
                                        <input className="form-control bg-light outline-none" type="text" placeholder="Usuario" onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="input-group mt-1">
                                        <div className="input-group-text bg-danger">
                                            <img src="./img/password-icon.svg" alt="password-icon" style={{ height: 1 + 'rem' }} />
                                        </div>
                                        <input className="form-control bg-white" type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <div className="d-flex justify-content-around mt-1">
                                        <div className="d-flex align-items-center gap-1">
                                            <input className="form-check-input" type="checkbox" />
                                            <div className="pt-1" style={{ fontSize: 0.9 + 'rem' }}>Recuérdame</div>
                                        </div>
                                        <div className="pt-1">
                                            <a href="#" className="text-decoration-none text-danger fw-semibold fst-italic" style={{ fontSize: 0.9 + 'rem' }}>Olvidaste tu contraseña?</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn text-white w-100 mt-4 fw-semibold shadow-sm bg-danger" data-bs-dismiss="modal" aria-label="Close">
                                        Login
                                    </button>
                                    <div className="d-flex gap-1 justify-content-center mt-1">
                                        <div>No tienes una cuenta?</div>
                                        <a href="#" className="text-decoration-none text-danger fw-semibold" data-bs-toggle="modal" data-bs-target="#signupModal">Regístrate</a>
                                    </div>
                                    <div className="p-3">
                                        <div className="border-bottom text-center" style={{ height: 0.9 + 'rem' }}>
                                            <span className="bg-black px-3">or</span>
                                        </div>
                                    </div>
                                    <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
                                        <img src="./img/google-icon.svg" alt="google-icon" style={{ height: 1.6 + 'rem' }} />
                                        <div className="fw-semibold text-white">Continuar con Google</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin