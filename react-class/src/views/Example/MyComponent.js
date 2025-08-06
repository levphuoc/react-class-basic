import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
       
        arrJobs:[
            {id: 'ab12', title: 'developer', salary: '500'},
             {id: 'ab13', title: 'tester', salary: '400'},
              {id: 'ab14', title: 'prject manager', salary: '1500'}
        ]
    }

    addNewJobs = (job) =>{
        // let currenJobs =this.state.arrJobs;
        // currenJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs,job ]
            // arrJobs: currenJobs
        })
        console.log('check job from parent', job)
    }

    deleteJob = (job) =>{
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJobs
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('>> run component DidUpdate: ', 'prev State :', prevState,'current State : ', this.state)
    }
    componentDidMount(){
        console.log('>>> run component didMount ')
    }
    /* 
    JSX => return block
    */
    render() {
        return (
            <>
            <AddComponent 
             addNewJobs={this.addNewJobs}
            />
             
                <ChildComponent 
                 arrJobs={this.state.arrJobs}
                 deleteJob ={this.deleteJob}/>
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