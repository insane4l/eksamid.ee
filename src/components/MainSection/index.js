import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import TestsPage from '../pages/TestsPage';

import s from './MainSection.module.css';

const MainSection = () => {
    return (
        <main className={s.mainSection}>
            <Redirect from="/" to="/tests" />
            <Route path="/tests" component={TestsPage} />
        </main>
    )
}

export default MainSection;