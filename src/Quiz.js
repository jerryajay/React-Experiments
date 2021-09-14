import { useState } from "react";

const quest_collection = {
    question: "What's the first book of the new testament?",
    options: ['matt', 'mark', 'luke', 'john'],
    ans: "matt"
};



function Quiz() {
    
    const [val0, setAns0] = useState(quest_collection.options[0]);
    const [val1, setAns1] = useState(quest_collection.options[1]);
    const [val2, setAns2] = useState(quest_collection.options[2]);
    const [val3, setAns3] = useState(quest_collection.options[3]);
    const [status, setStatus] = useState(false);

    function validate(sel) {
    
     if (sel === quest_collection.ans) {
         setStatus(true);
         setAns0(sel);
         setAns1(sel);
         setAns2(sel);
         setAns3(sel);
     }
        


    }

    return (
        <>
    <div>
    <p> {quest_collection.question} </p>

    <button type="button" className="btn btn-primary" onClick={() => {validate(val0);}}> {val0} </button>
    <button type="button" className="btn btn-primary" onClick={() => {validate(val1);}} > {val1} </button>
    <button type="button" className="btn btn-primary"onClick={() => {validate(val2);}} > {val2} </button>
    <button type="button" className="btn btn-primary" onClick={() => {validate(val3);}} > {val3} </button>



    </div>
    </>
    );
}

export default Quiz;