import React from 'react';
import { Container } from 'Components';
import './Login.css';
import { lazy } from '@loadable/component';
import { FaUser, FaLock } from 'react-icons/fa';
import sideimage from '../../Asset/image/img3.webp';
import crow from '../../Asset/image/crow-solid.svg';
// import { Container } from './styles';
// import { Helmetdata } from 'Elements';

const Helmetdatas = lazy(() =>
    import('Elements').then((module) => module.Helmetdata)
);

function Login() {
    return (
        <>
            <Helmetdatas
                title="login Pages platform"
                link={window.location.href}
                description="EV electrical vehicle."
                pagesname="EV | Login Pages"
            />
            <Container>
                <div className="screen">
                    <div className="screen1">
                        <div className="logo">
                            <img className="crow" src={crow} alt="" />
                            <h2 className="logo_text">Logo</h2>
                        </div>

                        <div className="loginfield">
                            <h3>Log in</h3>
                            <form action="#" method="#" className="form login">
                                <div className="form_field">
                                    <label htmlFor="login_username">
                                        <FaUser />
                                        <span className="hidden">Username</span>
                                    </label>

                                    <input
                                        type="text"
                                        className="form_input"
                                        id="login_username"
                                        name="username"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                                <div className="form_field">
                                    <label htmlFor="login_password">
                                        <FaLock />
                                        <span className="hidden">Password</span>
                                    </label>

                                    <input
                                        type="text"
                                        className="form_input"
                                        id="login_password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="form_field">
                                    <input
                                        type="submit"
                                        className="form_input"
                                        value="Sign In"
                                    />
                                </div>
                            </form>
                            <p className="forgot_password">Forgot password?</p>
                            <p className="registernew">
                                Don&apos;t have an account?
                                <a href="#!" className="link-info">
                                    Register here
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="screen2">
                        <img className="scree1img" src={sideimage} alt="" />
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Login;
