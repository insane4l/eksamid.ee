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





const GetQuestions = (data) => {
    return new Promise((res) => {
        res(data)
    });
};

const SaveToLocalStorage = (data) => {
    return new Promise(res => {
        const dataStr = JSON.stringify(data);
        localStorage.setItem("server-data", dataStr);
        res();
    })
};

const notify = (message) => {
    console.log(message);
};







GetQuestions(serverData)
    .then(data => SaveToLocalStorage(data))
    .then(() => notify('Questions saved successfully'));