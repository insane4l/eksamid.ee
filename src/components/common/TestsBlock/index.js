import React from 'react';
import {connect} from 'react-redux';
import TestsBlock from './TestsBlock';

const TestsBlockContainer = (props) => {
    return <TestsBlock {...props}/>
}

const mapStateToProps = (state) => ({
    questions: state.questions
})

export default connect(mapStateToProps)(TestsBlockContainer);