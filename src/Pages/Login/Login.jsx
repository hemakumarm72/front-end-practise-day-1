import React from 'react';
import { Container } from 'Components';
// import { Container } from './styles';
// import { Helmetdata } from 'Elements';
import { lazy } from '@loadable/component';

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
                <div>
                    <p>Login screen</p>
                </div>
            </Container>
        </>
    );
}

export default Login;
