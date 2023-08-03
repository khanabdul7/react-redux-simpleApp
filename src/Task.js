import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWork, deleteWork } from './redux';
import './style.css';

const mapStateToProps = state => {  //used to fetching state from store, then sending same by props to presentation component(which is AddList in our case).
  return {
    toDoList: state.toDoList
  }
}
const mapDispatchToProps = dispatch => {  //used to dispatch actions, toDo and toDoDel is invoked using props by presentation component and then corresponding action will be dispathced. 
  return {
    toDo: (todo) => { dispatch(addWork(todo)) },
    toDoDel: (id) => { dispatch(deleteWork(id)) }
  }
}
export class AddList extends Component {
  state = { toDo: "" }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-5 offset-md-4'>
            <h2 className='text-info text-center display-4'>My ToDo</h2>
            <div className='forn-group'>
              <input type='text' value={this.state.toDo} placeholder='Plan task' className='form-control' onChange={(e) => this.setState({ toDo: e.target.value })} />
            </div><br />
            <button onClick={() => { this.props.toDo(this.state.toDo); this.setState({ toDo: '' }) }} type='button' className='btn btn-primary'>Add ToDo</button><br /><br />
            <ol className='card'>{this.props.toDoList.map((user, index) => <li onDoubleClick={() => { this.props.toDoDel(index) }} key={index}>{user}</li>)}</ol></div>
        </div>
      </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddList)