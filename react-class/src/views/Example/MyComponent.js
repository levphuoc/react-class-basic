import React, { Fragment } from "react";  

class MyComponent extends React.Component
{
    state = {
        name: 'Phuoc',
        channel: 'Phuoc dep trai'
    }
    /* 
    JSX => return block
    */
   handleOnChangeName = (event) =>{
    this.setState({
        name: event.target.value
    })
   }

   handleOnClickButton =() =>{
    alert('Click me')
   }
    render(){
        
        return(
            <Fragment>
            <div className="abc">
                <input value={this.state.name} type="text"
                onChange={(event) => this.handleOnChangeName(event)} 
                />
                {/* Hello, My name is : {this.state.name} */}
                Hello, My name is : {this.state['name']}
            </div>
            <div  className="second">
                My Facebook channel is : {this.state.channel}
            </div>
            <div className="third">
                <button onClick={() => this.handleOnClickButton()}>Click me</button>
            </div>
            </Fragment>
        );
    }
}

 export default MyComponent;