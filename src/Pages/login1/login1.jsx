import React, { useState } from 'react';
import './login1.scss';
import { Checkbox, Container, LoadButton } from 'Components';

const login1 = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const submitlogin = () => {
        setLoading(true);
        setTimeout(() => {
            console.log('submitlogin');
            setLoading(false);
        }, 2000);
    };
    return (
        <div>
            <Container>
                <div className="logincontainer">
                    <div className="logincontent">
                        <h1>Sign in</h1>
                        <p>Sign in and start managing your candidates!</p>
                        <div className="loginflied">
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
                                id="login_email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                type="text"
                                value={user.password}
                                onChange={(e) => {
                                    setUser({
                                        ...user,
                                        password: e.target.value,
                                    });
                                }}
                                className="form_input"
                                id="login_password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                            <div className="labeldiv">
                                <Checkbox label="Remember me" checked={false} />
                                <p>Forgot password?</p>
                            </div>
                            {/* <button type="button">login</button> */}
                            <LoadButton
                                id="login1btn"
                                loadfunction={submitlogin}
                                loadingdata={loading} // true or false set value
                                loadingbeforetext="Login"
                                loadingaftertext="Waiting"
                            />
                        </div>
                    </div>
                    <div className="containerwaves">
                        <svg
                            className="waves"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 24 150 28"
                            preserveAspectRatio="none"
                            shapeRendering="auto"
                        >
                            <defs>
                                <path
                                    id="gentle-wave"
                                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                />
                            </defs>
                            <g className="parallax">
                                <use
                                    xlinkHref="#gentle-wave"
                                    x="48"
                                    y="0"
                                    fill="rgba(32, 223, 127, 0.8)"
                                />
                                <use
                                    xlinkHref="#gentle-wave"
                                    x="48"
                                    y="3"
                                    fill="rgba(34, 73, 87, 0.8)"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default login1;
