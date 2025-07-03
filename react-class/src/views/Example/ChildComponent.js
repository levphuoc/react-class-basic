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
         let {name , age, address, arrJobs } = this.props;
         let a ='';
        return (
            <div className="job-lists">
               {
               a =  arrJobs.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.title} - {item.salary}
                        </div>
                    )
                })
               }
               {console.log('check arrJobs la ', a)}
            </div>
        );
    }
}
export default ChildComponent;