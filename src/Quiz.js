import React, { useEffect, useState } from 'react'
import "./Quiz.css";
import { MoneyPyramid } from "./Data";
import { Questions } from "./Data";
import Timer from "./component/Timer";
import QuizComp from "./component/QuizComp";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



function Quiz({setQuizPlayer}) {
    
    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeStop, setTimeStop] = useState(false);
    const [earn, setEarn] = useState("$ 0");
    console.log(earn)

    useEffect(() => {
        setEarn(MoneyPyramid.find(m => m.id === questionNumber - 1)?.amount)
    }, [questionNumber])



    return (
        <div className="quiz">

            <>
                <div className="quiz-wrap">
                    {
                        timeStop ? (
                            <div className="Result">
                                <p className="mainResult">You have Earned : {earn}</p>
                                <p className="backtostartpage"> 
                                  <ArrowBackIosIcon 
                                    className="backarrow"
                                    onClick={()=>setQuizPlayer(null)}
                                  />
                                  do u want to start again
                                </p>
                            </div>

                        ) : (
                            <div className="main">
                                <div className="top">
                                    <div className="QuizLogo">
                                        <span className="infocus">Infocus</span><span className="Quiz">Quiz</span>
                                    </div>
                                    <div className="timer">

                                        <Timer setTimeStop={setTimeStop} questionNumber={questionNumber} />
                                    </div>
                                    <div className="questionCounter">
                                        <span className="numberOfQuestion">{questionNumber} of {Questions.length}</span>
                                        <span className="earn">score : {earn}</span>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <QuizComp
                                        data={Questions}
                                        questionNumber={questionNumber}
                                        setQuestionNumber={setQuestionNumber}
                                        setTimeStop={setTimeStop}
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="quiz-score">
                    <div className="score">
                        {
                            MoneyPyramid.map((item) => {
                                return (
                                    <div className={questionNumber === item.id ? "moneyList active" : "moneyList"}>
                                        <span className="moneyListItemNumber">{item.id}</span>
                                        <span className="moneyListItemAmount">{item.amount}</span>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </>
        </div>
    )
}

export default Quiz
