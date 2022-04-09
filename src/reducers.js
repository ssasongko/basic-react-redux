import Presentational from "./Presentational"
import { connect } from "react-redux"

const ADD_MESSAGE = 'ADD_MESSAGE'

const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}

const rootReducer = (state = [], action) => {
    switch(action.type){
        case ADD_MESSAGE : {
            return [
                ...state,
                action.message
            ]
        }
        default:{
            return state
        }
    }
}


const mapStateToProps = (state) => {
  return {
    messages: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

export {rootReducer, Container}