import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import TestsPageContainer from '../pages/TestsPage'
import s from './MainSection.module.css'

const MainSection: React.FC = () => {
    return (
        <main className={s.mainSection}>
            <Redirect from="/" to="/tests" />
            <Route path="/tests" component={TestsPageContainer} />
        </main>
    )
}

export default MainSection