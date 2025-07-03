import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJobs:[
            {id: 'ab12', title: 'developer', salary: '500 $'},
             {id: 'ab13', title: 'tester', salary: '400 $'},
              {id: 'ab14', title: 'prject manager', salary: '1500 $'}
        ]
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

        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleOnChangeFirstName(event)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input 
                    type="text" value={this.state.lastName} 
                    onChange={(event) => this.handleOnChangeLastName(event)}
                    /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleOnClick(event)}
                    />
                </form>
                <ChildComponent 
                name={this.state.firstName}
                 age={'25'}
                 address={'Ha Noi'}
                 arrJobs={this.state.arrJobs}/>
                {/* <ChildComponent 
                name={'child two'} 
                age={'22'}/>
                <ChildComponent 
                name={'child three'} 
                age={'23'}/> */}

            </>  
        );
    }
    
}

export default MyComponent;