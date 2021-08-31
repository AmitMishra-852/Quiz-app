import React,{useEffect, useState} from 'react'
import "./QuizComp.css";



function QuizComp({data , questionNumber , setQuestionNumber , setTimeStop}) {
    const [quizData , setQuizData] = useState(null)
    const [selectAnswer , setSelectAnswer] = useState(null)
    const [className , setClassName] = useState("option")



    useEffect(()=>{
        setQuizData(data[questionNumber-1])
    },[data , questionNumber ])

   const delay =(duration , callBack)=>{
     setTimeout(()=>{
        callBack()
     },duration)
   }

   const clickHandler=(a)=>{
    setSelectAnswer(a)
    setClassName("option active")
    delay(2000 , ()=>setClassName(a.isCorrect ? "option correct" : "option wrong"))
    delay(4000 , ()=>{
        if(a.isCorrect){
            setQuestionNumber(questionNumber + 1)
            setSelectAnswer(null)
        }else{
            setTimeStop(true)
        }
    })

   }

    return (
        <div className="QuizComp">
            <div className="Questions">
                <p className="question">{quizData?.question}</p>
            </div>
            <div className="Answers">
                {
                    quizData?.answerOptions.map((a)=>(
                        <p 
                           className={ selectAnswer === a ? className : "option"} 
                           onClick={()=>clickHandler(a)}
                        >
                            {a.answerText}
                        </p>
                    ))
                }
              
            </div>
        
        </div>
    )
}

export default QuizComp;