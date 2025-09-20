import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock,setLock]=useState(false);
  let [score,setScore]=useState(0);
  let [result,showresult]=useState(false);

  const option1=useRef(null);
  const option2=useRef(null);
  const option3=useRef(null);
  const option4=useRef(null);

  const option_array=[option1,option2,option3,option4];
 

  const handlenext = () => {
    if(lock==true){
    if (index < data.length-1) {
      setIndex(index + 1);
      setQuestion(data[index+1]);
      setLock(false);

      option_array.forEach((option)=>{
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
      })
    } 
  }
  };

  const handleReset=()=>{
    setIndex(0);
    setQuestion(data[0]);
    showresult(false);
  }

  const handleAns=(e,ans)=>{
    if(lock==false){
    if(question.ans===ans){
      e.target.classList.add("correct");
      setScore(prev=>prev+1);
      setLock(true);
    }
    else{
      e.target.classList.add("wrong");
      setLock(true);
      option_array[question.ans-1].current.classList.add("correct");
    }
   }
  }

  const handleFinish=()=>{
     showresult(true);
  }
 


  return (
    <>
      { result===false ?(
        <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <h3>{index+1}.{question.question}</h3>
        <ul className="options">
          <li key={1} ref={option1} onClick={(e)=>handleAns(e,1)} >
            {question.option1}
          </li>
          <li key={2} ref={option2} onClick={(e)=>handleAns(e,2)} >
            {question.option2}
          </li>
          <li key={3} ref={option3} onClick={(e)=>handleAns(e,3)}>
            {question.option3}
          </li>
          <li key={4} ref={option4} onClick={(e)=>handleAns(e,4)} >
            {question.option4}
          </li>
        </ul>
        {index < data.length-1 ? (
          <button onClick={handlenext}>Next</button>
        ) : (
          <button onClick={handleFinish}>Finish</button>
        )}
        <div className="index">
          {index+1} of {data.length} questions
        </div>
        </div>)
        : (<div className="resultbox"><p>Your Score : {score} out of {data.length}</p> <button onClick={handleReset}>Reset</button></div>)
      }
    </>
  );
};

export default Quiz;
