import React from 'react';
import { Container } from 'Components';
import './Login.css';
import { lazy } from '@loadable/component';
import sideimage from '../../Asset/image/img3.webp';

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
                        <p>Screen 1</p>
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
