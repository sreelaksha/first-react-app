import React from 'react';

const validationComponent = (props) => {
    return(
           <div className = "validationComponent">
                   {
                       (props.textLength < 5)?
                            <p> Text entered is too short! </p>
                        :   <p> Text entered is too long!</p>
                   }
           </div>
          )

}

export default validationComponent;