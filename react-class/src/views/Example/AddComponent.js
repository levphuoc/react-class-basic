import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleOnChangeJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleOnClick = (event) => {
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert('Missing required parameters')
            return;
        }
        console.log('.. this data is : ', this.state)
        this.props.addNewJobs({
            id: Math.floor(Math.random() * 10),
            title: this.state.title,
            salary: this.state.salary
        })
         this.setState({
            title: '',
            salary: ''
         })

    }
    render() {
        return (
            <>
                <div>Hello AddComponent</div>
                <form>
                    <label htmlFor="fname">Job title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleOnChangeJob(event)}
                    /><br />
                    <label htmlFor="lname">Salary :</label><br />
                    <input
                        type="text" value={this.state.salary}
                        onChange={(event) => this.handleOnChangeSalary(event)}
                    /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleOnClick(event)}
                    />
                </form>
            </>

        )

    }
}

export default AddComponent;