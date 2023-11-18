import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "../assets/sounds_correct.mp3"
import wrong from "../assets/wrong.mp3"

const QuizBox = ({data,setTime,qId,setQId}) => {
    const [question,setQuestion] = useState(null);
    const [selectedAnswer,setSelectedAnswer] = useState([]);
    const [className,setClassName] = useState("answer");
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);    

    useEffect(()=>{
        if(qId>=15) {
            setTime(true);
        }
        setQuestion(data[qId-1]);
    },[qId,data]);

    const delay = (duration,callback) => {
        setTimeout(()=>{
            callback();
        },duration);
    }

    const handleClick = (answer) => {
        setSelectedAnswer(answer);
        setClassName("answer active");
        delay(1000,()=> setClassName(answer.correct ? "answer correct" : "answer wrong"));
        delay(2900,()=>{
            if(answer.correct) {
                correctAnswer();
                delay(7000,()=>{
                    setQId(qId+1);
                    setSelectedAnswer(null);
                });
            }
            else{
                wrongAnswer();
                delay(4000,()=>{
                    setTime(true);
                });
            }
        });
    }

    return (
            <div className="quizBox">
                <div className="question">{question?.question}</div>
                <div className="answers">
                    {question?.answers.map((answer)=>(
                        <div className={selectedAnswer === answer ? className : "answer"} onClick={()=>{handleClick(answer)}}>
                            {answer.text}
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default QuizBox;