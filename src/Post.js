import React, { useState } from 'react'
export default function Post ({title, description, dateCreated}) {
    const [completedDate, setCompletedDate] = useState();
    const [isComplete, setIsComplete] = useState(false);
    const handleCompleted = () => {
        setIsComplete(!isComplete);
        if(!isComplete){
            setCompletedDate(dateCreated);
        }else {
            setCompletedDate("");
        }
        
    }
    return (
       <div>
          <h3>Title: {title}</h3>
          <div>Description: {description}</div>
          <br />
          <i><b>Created on: {dateCreated}</b></i>
          <br />
          <label>completed?</label>
          <input type="checkbox" onChange={handleCompleted} />
          <i><b>Created on: {completedDate}</b></i>
      </div> 
 )
}
