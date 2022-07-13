import React, {useState} from 'react'

const Love = () => {
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [result, setResult] = useState("");

    const submithandle =(e)=>{
        e.preventDefault();

        if(mname===""){
            alert('Please Enter The Name');
        }

        else if(mname <=2){
            alert('Minimum 3 Characters Are Required');
        }

        else if(!isNaN(mname)){
            alert(`Numbers And Symbols Aren't Allow`);
        }

        if(lname===""){
            alert('Please Enter The Name');
        }

        else if(lname <=2){
            alert('Minimum 3 Characters Are Required');
        }

        else if(!isNaN(lname)){
            alert(`Numbers And Symbols Aren't Allow`);
        }

        else{
            
         let result = Math.floor(Math.random()*100);
         setResult(`${result} %`);
        }

    };

    const refresh =()=>{
        window.location.reload();
    }
  return (
    <>
      <div className="love">
        <form action="" onSubmit={submithandle}>
            <input type="text" value={mname} onChange={(e)=>{
                setMname(e.target.value);
            }} placeholder=' Your Name' />

            <p>+</p>

            <input type="text" value={lname} onChange={(e)=>{
                setLname(e.target.value);
            }} placeholder='Love Name' />
            
            <br />
            <button className='Btn' type='submit'>Start</button>
            
            <br />

            <input type="text" value={result} onChange={(e)=>{
                setResult(e.target.value)
            }} placeholder='Result' />

        </form>
        <button className='refresh' onClick={refresh} >Refresh</button>
      </div>
    </>
  );
};

export default Love;
