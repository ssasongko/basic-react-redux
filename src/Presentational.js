import React from 'react';

class Presentational extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: '',
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteAllList = this.deleteAllList.bind(this)
    }

    onSubmit(){
        this.props.submitNewMessage(this.state.input)
        this.setState({
            input: ''
        })
    }

    onChangeHandler(e){
        this.setState({
            input: e.target.value
        })
    }

    deleteAllList(){
        this.setState({
            input: '',
            messages: []
        })
    }

    render(){
        let messages = this.props.messages.map((el, id)=> <li key={id}>{el}</li>)

        return(
            <div>
                <h1>Type in a new Message</h1>
                <input value={this.state.input} onChange={this.onChangeHandler}></input>
                <button onClick={this.onSubmit}>Submit</button>
                <button onClick={this.deleteAllList}>Delete All List</button>
                <u>{messages}</u>
            </div>
        )
    }
}

export default Presentational