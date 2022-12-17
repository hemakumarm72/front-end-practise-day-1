import React, { Suspense } from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { lazy } from '@loadable/component';
import { Loader } from 'Elements';

const Loginpages = lazy(() =>
    import('Pages').then((module) => module.Loginpages)
);
function Routers() {
    return (
        <Routes>
            <Suspense fallback={<Loader />}>
                {/* <Header /> */}
                <Switch>
                    <Route path="/" exact component={Loginpages} />

                    {/* <Route path="/services" component={Logopages} /> */}
                </Switch>
            </Suspense>
        </Routes>
    );
}

export default Routers;
