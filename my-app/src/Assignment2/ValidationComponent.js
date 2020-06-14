import React from 'react';

const validationComponent = (props) => {

    let validationMessage = 'Text too long';
        if (props.textLength < 5){
            validationMessage = 'Text entered is too short! ';
        }
    return(
            <div>
                <p>{validationMessage}</p>
            </div>
          )

}

export default validationComponent;