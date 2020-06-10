import React from 'react';
import './Person/Person.css'

//class UserOutput extends Component {
        //render() {

         const userOutput = (props) => {
             return(

                <div className = "UserOutput">
                   <p> This is paragraph with username {props.username} </p>
                </div>
                );
        }


export default userOutput;