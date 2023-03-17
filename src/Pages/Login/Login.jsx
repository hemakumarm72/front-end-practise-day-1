import React, { useState } from 'react';
import { Container } from 'Components';
import './Login.css';
import { lazy } from '@loadable/component';
import { FaUser, FaLock } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Slide, ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import sideimage from '../../Asset/image/img3.webp';
import 'react-lazy-load-image-component/src/effects/blur.css';
import crow from '../../Asset/image/crow-solid.svg';

// import { Helmetdatas } from '../../Elements';
// import { Container } from './styles';
// import { Helmetdata } from 'Elements';

const Helmetdatas = lazy(() =>
    import('Elements').then((module) => module.Helmetdata)
);

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const loginapi = () => {
        axios
            .post('https://api.chopeai.com/api/employee/login', user)
            .then((res) => {
                if (res) {
                    console.log(res?.data.data ?? []);
                    const Token = res?.data?.data?.token ?? null;

                    sessionStorage.setItem('token', JSON.stringify(Token));
                    console.log(
                        'token',
                        JSON.parse(sessionStorage.getItem('token'))
                    );
                    toast.success(res.data.data.message, {
                        autoClose: 2000,
                        transition: Slide,
                    });
                }
                return res;
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.response?.data?.data?.message ?? err, {
                    autoClose: 2000,
                    transition: Slide,
                });
                return err;
            });
    };
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
                            <img
                                className="crow"
                                src={crow}
                                alt="crow 1"
                                height="40px"
                                width="40px"
                            />
                            <h2 className="logo_text">Logo</h2>
                        </div>

                        <div className="loginfield">
                            <h3>Log in</h3>
                            <div className="form login">
                                <div className="form_field">
                                    <label htmlFor="login_username">
                                        <FaUser />
                                        <span className="hidden">Username</span>
                                    </label>

                                    <input
                                        type="text"
                                        value={user.email}
                                        onChange={(e) => {
                                            setUser({
                                                ...user,
                                                email: e.target.value,
                                            });
                                        }}
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
                                        value={user.password}
                                        onChange={(e) => {
                                            setUser({
                                                ...user,
                                                password: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                                <div className="form_field">
                                    <input
                                        type="submit"
                                        className="form_input"
                                        onClick={loginapi}
                                        value="Sign In"
                                    />
                                </div>
                            </div>
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
                        <LazyLoadImage
                            className="scree1img"
                            src={sideimage}
                            alt="screen Alt 1"
                            //  effect="blur"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <ToastContainer />
                </div>
            </Container>
        </>
    );
}

export default Login;
