const serverData = [
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

];





export const GetQuestions = (data: QuestionType[]) => {
    return new Promise<QuestionType[]>((res) => {
        res(data)
    });
};

const SaveToLocalStorage = (data: QuestionType[]) => {
    return new Promise<void>( (res) => {
        const dataStr = JSON.stringify(data);
        localStorage.setItem("server-data", dataStr);
        res();
    })
};

const notify = (message: string) => {
    console.log(message);
};







GetQuestions(serverData)
    .then((data: QuestionType[]) => SaveToLocalStorage(data))
    .then(() => notify('Questions saved successfully'));






type QuestionType = typeof serverData[0] // todo: QuestionType will be upgrade (save and export common types in types.ts)