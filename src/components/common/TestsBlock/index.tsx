import React from 'react'
import {connect} from 'react-redux'
import TestsBlock from './TestsBlock'

const TestsBlockContainer = (props: any) => { // todo:
    return <TestsBlock {...props}/>
}

const mapStateToProps = (state: any) => ({ // todo: AppStateType
    questions: state.questions
})

export default connect(mapStateToProps)(TestsBlockContainer)