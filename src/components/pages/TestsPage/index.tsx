import React from 'react'
import TestsBlockContainer from '../../common/TestsBlock'

import s from './TestsPage.module.css'

const TestsPage: React.FC = () => {
    return (
        <div className={s.testsPage}>
            <TestsBlockContainer />
        </div>
    )
}

export default TestsPage