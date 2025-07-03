import React, { Children, Fragment } from "react";

class ChildComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }
    /* 
    JSX => return block
    */


   handleOnChangeFirstName = (event) =>{
    this.setState({
        firstName: event.target.value
    })
   }
    
   handleOnChangeLastName = (event) =>{
    this.setState({
        lastName: event.target.value
    })
   } 

   handleOnClick = (event) => {
        event. preventDefault()
        console.log('.. this data is : ', this.state)
   }
    render() {
        console.log('>>> check props ; ', this.props)
        //  let name = this.props.name;
        //  let age = this.props.age;

        //key:value declare variable name the same key cuar props 
         let {name , age } = this.props;
        return (
            <div>
                child components name : {name} - {age}
            </div>
        );
    }
}
export default ChildComponent;