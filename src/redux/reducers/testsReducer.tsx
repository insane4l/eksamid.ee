const initialState = {
    questions: [
        {
            id: 1,
            title: "Name of country?", 
            answers: [
                {id: 1, label: "estonia"},
                {id: 2, label: "Estonia", correctAnswer: true},
                {id: 3, label: "Istonia"}
            ]
        },
        {
            id: 2,
            title: "What is true answer?", 
            answers: [
                {id: 1, label: "blabla"},
                {id: 2, label: "kuku"},
                {id: 3, label: "Ida-Virumaa", correctAnswer: true}
            ]
        },
    
    ],
    activeQuestion: 1,
    userAnswers: [
        {questionId: 1, answerId: 1},
        {questionId: 2, answerId: 3},
        {questionId: 3, answerId: 1}
    ]
}

const testsReducer = (state = initialState, action: any) => { // todo: infer, ActionTypes
    switch(action.type) {
        default:
            return state
    }
}

export default testsReducer