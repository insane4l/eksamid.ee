import React from 'react';

import s from './TestsBlock.module.css';

const TestsBlock = () => {
    return (
        <div className={s.testsBlock}>
            <button className={s.questionsListBtn}>Вернуться к списку вопросов</button>
            <button className={s.prevQuestionBtn}>Предыдущий</button>
            <div className={s.questionNumber}>Вопрос 2 из 50</div>
            <button className={s.nextQuestionBtn}>Дальше</button>
            <QuestionBlock />
            
        </div>
    )
}


const QuestionBlock = ({question}) => {

    const answers = question.answers.map(a => {
        return (
            <div className={s.customRadio} key={a.id}>
                <input className={s.answerInput} id={a.id} type="radio"/>
                <label className={s.answerLabel} htmlFor={a.id}>
                    {a.label}
                </label>
            </div>
        )
    })

    return (
        <div className={s.questionBlock}>
            <h2 className={s.questionText}>
                {question.title}
            </h2>
            <div className={s.answersWrapper}>
                {answers}
            </div>
            <button className={s.saveAnswerBtn}>Сохранить и продолжить</button>
        </div>

    )
}

export default TestsBlock;