import React, { Suspense } from 'react';
// import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from '@loadable/component';
import { Loader } from 'Elements';

const Loginpages = lazy(() =>
    import('Pages').then((module) => module.Loginpages)
);
function Routers() {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                {/* <Header /> */}

                <Routes>
                    <Route path="/" element={<Loginpages />} />

                    {/* <Route path="/services" component={Logopages} /> */}
                </Routes>
            </Suspense>
        </Router>
    );
}

export default Routers;
