import React, { Suspense } from 'react';
// import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from '@loadable/component';
import { Loader } from 'Elements';
import { Locker, Navbar } from 'Pages';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from 'Components/protectedRouter';

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

const Adminpages = lazy(() => import('Pages').then((module) => module.Admin));

const Login = lazy(() => import('Pages').then((module) => module.Login1)); // const OpenDialogpages = lazy(() =>
//     import('Pages').then((module) => module.OpenDialog)
// );

function Routers() {
    return (
        <>
            <Router>
                <Suspense fallback={<Loader />}>
                    {/* <Header /> */}
                    <Routes>
                        <Route element={<ProtectedRoute />}>
                            <Route
                                exact
                                path="/login"
                                element={<Loginpages />}
                            />
                            <Route
                                exact
                                path="/button"
                                element={<Newspages />}
                            />
                            <Route
                                exact
                                path="/dummytable"
                                element={<DummyTablepages />}
                            />
                            <Route exact path="/locker" element={<Locker />} />

                            <Route
                                exact
                                path="/admin"
                                element={<Adminpages />}
                            />

                            {/* <Route path="/" element={<OpenDialogpages />} /> */}
                        </Route>
                        <Route exact path="/login1" element={<Login />} />

                        <Route exact path="/" element={<Navbar />} />
                        {/* <Route path="/services" component={Logopages} /> */}
                    </Routes>
                </Suspense>
            </Router>
            <ToastContainer />
        </>
    );
}

export default Routers;
