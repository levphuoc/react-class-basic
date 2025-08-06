import React, { Children, Fragment } from "react";
import './Demo.scss'
class ChildComponent extends React.Component {

    //    // re-render
    state = {
        showButton: false
    }
    handleOnClick = () => {
        this.setState({
            showButton: !this.state.showButton
        })
    }
    handleOnClickDelete = (job) =>{
        console.log('>>>> handle delele', job)
        this.props.deleteJob(job)
    }
    render() {
        //console.log('>>> check props ; ', this.props)
        //  let name = this.props.name;
        //  let age = this.props.age;

        //key:value declare variable name the same key cuar props 
        //let {name , age, address, arrJobs } = this.props;
        let { arrJobs } = this.props;
        let { showButton } = this.state;
        let check = showButton === true ? 'showButton = true' : 'showButton = false';
        console.log('gai tri cua check la. : ', check)

        return (
            <>
                {showButton === false ?
                     <div>
                        <button className="btn-show"
                        onClick={() => this.handleOnClick()}>
                            Show
                        </button>
                    </div>
                :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} 
                                            <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div><button onClick={() => this.handleOnClick()}>Hide</button></div>
                    </>
                }

            </>

        );
    }
}

//function arrow
// const ChildComponent = (props) =>{
//     let {arrJobs} = props;
//       return (
//             <div className="job-lists">
//                {
//                arrJobs.map((item, index) => {
//                 if(item.salary >= 500){
//                      return (
//                         <div key={item.id}>
//                             {item.title} - {item.salary} $
//                         </div>
//                     )
//                 }    
//                 })
//                }
//             </div>
//         );
// } 
export default ChildComponent;
//Shift + Option (⌥) + F toàn bộ code
//Command (⌘) + K, sau đó nhấn Command (⌘) + F 1 vùng đc chọn