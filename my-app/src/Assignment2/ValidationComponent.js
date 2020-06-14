import React from 'react';

const validationComponent = (props) => {
    return(
           <div className = "validationComponent">
                <p> Text length is: {props.textLength} </p>

           </div>
          )

}

export default validationComponent;