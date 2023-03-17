import React, { Suspense } from 'react';
// import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from '@loadable/component';
import { Loader } from 'Elements';
import { Locker, Navbar } from 'Pages';

const DummyTablepages = lazy(() =>
    import('Pages').then((module) => module.DummyTable)
);
// import DummyTablepages from 'Pages/table/dummytable';

const Loginpages = lazy(() =>
    import('Pages').then((module) => module.Loginpages)
);
const Newspages = lazy(() =>
    import('Pages').then((module) => module.Newspages)
);

const Login = lazy(() => import('Pages').then((module) => module.Login1)); // const OpenDialogpages = lazy(() =>
//     import('Pages').then((module) => module.OpenDialog)
// );

function Routers() {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                {/* <Header /> */}

                <Routes>
                    <Route path="/login" element={<Loginpages />} />
                    <Route path="/button" element={<Newspages />} />
                    <Route path="/dummytable" element={<DummyTablepages />} />
                    <Route path="/locker" extr element={<Locker />} />
                    <Route path="/login1" element={<Login />} />
                    <Route path="/" element={<Navbar />} />
                    {/* <Route path="/" element={<OpenDialogpages />} /> */}

                    {/* <Route path="/services" component={Logopages} /> */}
                </Routes>
            </Suspense>
        </Router>
    );
}

export default Routers;
