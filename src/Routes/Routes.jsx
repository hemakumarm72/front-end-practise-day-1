import React, { Suspense } from 'react';
// import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from '@loadable/component';
import { Loader } from 'Elements';
import { Locker, Navbar } from 'Pages';
import ProtectedRoute from 'Components/protectedRouter';
import { createBrowserHistory } from 'history';

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
const Reduxpages = lazy(() => import('Pages').then((module) => module.redux));
const Reduxpages1 = lazy(() => import('Pages').then((module) => module.redux1));

const Adminpages = lazy(() => import('Pages').then((module) => module.Admin));
const Csspage = lazy(() => import('Pages').then((module) => module.csspages)); // const OpenDialogpages = lazy(() =>

const Login = lazy(() => import('Pages').then((module) => module.Login1)); // const OpenDialogpages = lazy(() =>
//     import('Pages').then((module) => module.OpenDialog)
// );
export const history = createBrowserHistory();
function Routers() {
    // const auth = JSON.parse(localStorage.getItem('token'));
    // console.log(auth);
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                {/* <Header /> */}
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route exact path="/admin" element={<Adminpages />} />
                        {/* <Route path="/" element={<OpenDialogpages />} /> */}
                    </Route>
                    <Route exact path="/login" element={<Loginpages />} />
                    <Route exact path="/button" element={<Newspages />} />
                    <Route
                        exact
                        path="/dummytable"
                        element={<DummyTablepages />}
                    />
                    <Route exact path="/csspage" element={<Csspage />} />
                    <Route exact path="/locker" element={<Locker />} />
                    <Route exact path="/redux" element={<Reduxpages />} />
                    <Route exact path="/redux1" element={<Reduxpages1 />} />
                    ;
                    <Route exact path="/login1" element={<Login />} />
                    ;
                    <Route exact path="/" element={<Navbar />} />
                    {/* <Route path="/services" component={Logopages} /> */}
                </Routes>
            </Suspense>
        </Router>
    );
}

export default Routers;
