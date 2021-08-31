export const Questions = [
    {
        id:1,
        question:"Everything in React is a _______________ ",
        answerOptions:[
            {answerText:"Module",isCorrect:false},
            {answerText:"package",isCorrect:false},
            {answerText:"Component",isCorrect:true},
            {answerText:"class",isCorrect:false}
        ]
    },{
        id:2,
        question:"In which directory React Componant are Saved ?",
        answerOptions:[
            {answerText:"Inside js/components",isCorrect:true},
            {answerText:"Inside vendor/components/",isCorrect:false},
            {answerText:"Inside external/components/",isCorrect:false},
            {answerText:"Inside vendor/",isCorrect:false}
        ]
    },{
        id:3,
        question:"How Many element does a react component returns",
        answerOptions:[
            {answerText:"2 Elements",isCorrect:false},
            {answerText:" 1 Element",isCorrect:false },
            {answerText:"Multiple Elements",isCorrect:true},
            {answerText:"None of These",isCorrect:false }
        ]
    },{
        id:4,
        question:"What is state in React",
        answerOptions:[
            {answerText:"A persistant storage",isCorrect:false},
            {answerText:" An internal data store (object) of a component",isCorrect:true},
        ]
    },{
        id:5,
        question:"What is babel?",
        answerOptions:[
            {answerText:"A transpiler.",isCorrect:false},
            {answerText:"An interpreter",isCorrect:false},
            {answerText:"A Compiler",isCorrect:false},
            {answerText:"Both Compiler and Transpilar",isCorrect:true}
        ]
    },{
        id:6,
        question:" What does the webpack command do?",
        answerOptions:[
            {answerText:"Transpiles all the Javascript down into one file",isCorrect:false},
            {answerText:"Runs react local development server.",isCorrect:false},
            {answerText:"A module bundler",isCorrect:true}
        ]
    },{
        id:7,
        question:" What is ReactJS?",
        answerOptions:[
            {answerText:" Server side Framework",isCorrect:false},
            {answerText:"User-interface framework",isCorrect:false},
            {answerText:"A Library for building interaction interfaces",isCorrect:true},
            {answerText:"None of These",isCorrect:false}
        ]
    },{
        id:8,
        question:"What port is the default where the webpack-dev-server will run?",
        answerOptions:[
            {answerText:"3000",isCorrect:false},
            {answerText:"3306",isCorrect:false},
            {answerText:"8080",isCorrect:true},
            {answerText:"2306",isCorrect:false}
        ]
    },{
        id:9,
        question:" What are the two ways that data gets handled in React?",
        answerOptions:[
            {answerText:"state and props",isCorrect:true},
            {answerText:"services & components",isCorrect:false}
        ]
    },{
        id:10,
        question:"In React what is used to pass data to a component from outside?",
        answerOptions:[
            {answerText:"setState",isCorrect:false},
            {answerText:"render with arguments",isCorrect:false},
            {answerText:"props",isCorrect:true},
        ]
    },{
        id:11,
        question:"How can you access the state of a component from inside of a member function?",
        answerOptions:[
            {answerText:" this.getState()",isCorrect:false},
            {answerText:"this.prototype.stateValue",isCorrect:false},
            {answerText:"this.values",isCorrect:true},
        ]
    },{
        id:12,
        question:" Props are __________ into other components",
        answerOptions:[
            {answerText:"Methods",isCorrect:true},
            {answerText:"Injected",isCorrect:false},
            {answerText:"Both 1 and 2",isCorrect:false},
            {answerText:"all of the above",isCorrect:false},


        ]
    },{
        id:13,
        question:"What is a react.js in MVC?",
        answerOptions:[
            {answerText:"Middleware",isCorrect:false},
            {answerText:"Model",isCorrect:false},
            {answerText:"Controller",isCorrect:true},
            {answerText:"Router",isCorrect:false}

        ]
    },{
        id:14,
        question:" ReactJS uses _____ to increase performance",
        answerOptions:[
            {answerText:"Original DOM",isCorrect:false},
            {answerText:"Virtual DOM",isCorrect:true},
            {answerText:"Bth 1 and 2",isCorrect:false},
            {answerText:"None of above",isCorrect:false}
        ]
    },{
        id:15,
        question:"Which of the following is the correct data flow sequence of flux concept?",
        answerOptions:[
            {answerText:"Dispatcher->Action->Store->View",isCorrect:false},
            {answerText:"Action->Dispatcher->View->Store",isCorrect:false},
            {answerText:"Action->Dispatcher->Store->View",isCorrect:true},
            {answerText:"Action->Store->Dispatcher->View",isCorrect:false},

        ]
    },{
        id:16,
        question:"React.js Covers only the view layer of the app.",
        answerOptions:[
            {answerText:"YES",isCorrect:false},
            {answerText:"NO",isCorrect:true}
        ]
    },{
        id:17,
        question:"What is the name of React.js Developer ?",
        answerOptions:[
            {answerText:"Jordan Mike",isCorrect:false},
            {answerText:"Jordan Lee",isCorrect:false},
            {answerText:"Jordan Walke",isCorrect:true},
            {answerText:"Tim Lee",isCorrect:false},

        ]
    },{
        id:18,
        question:" Who Develop React.js?",
        answerOptions:[
            {answerText:"Twitter",isCorrect:false},
            {answerText:"Apple",isCorrect:false},
            {answerText:"FaceBook",isCorrect:true},
            {answerText:"Google",isCorrect:false}
        ]
    },{
        id:19,
        question:" .............. helps react for keeping their data unidirectional.",
        answerOptions:[
            {answerText:"JSX",isCorrect:false},
            {answerText:"FLUX",isCorrect:true},
            {answerText:"Dom",isCorrect:false},
            {answerText:"props",isCorrect:false},

        ]
    }
        
]


export const MoneyPyramid=[
    {id:1 , amount: "$ 100"},
    {id:2 , amount: "$ 200"},
    {id:3 , amount: "$ 300"},
    {id:4 , amount: "$ 400"},
    {id:5 , amount: "$ 500"},
    {id:6 , amount: "$ 1000"},
    {id:7 , amount: "$ 2000"},
    {id:8 , amount: "$ 3000"},
    {id:9 , amount: "$ 4000"},
    {id:10, amount: "$ 8000"},
    {id:11, amount: "$ 16000"},
    {id:12, amount: "$ 32000"},
    {id:13, amount: "$ 64000"},
    {id:14, amount: "$ 128000"},
    {id:15, amount: "$ 256000"},
    {id:16, amount: "$ 512000"},
    {id:17, amount: "$ 1024000"},
    {id:18, amount: "$ 2048000"},
    {id:19, amount: "$ 4096000"}
].reverse()