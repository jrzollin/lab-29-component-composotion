import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Note from '../../lib/Note.js';

class NoteForm extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = {
      noteSubject: '',
      noteContent: ''
    }
  }

  changeState(e){
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let note = new Note(this.state.noteSubject, this.state.noteContent);
    this.props.addNote(note);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="noteSubject">Subject:
            <input type="text" id="noteSubject" onChange={this.changeState}/>
          </label>
          <label htmlFor="noteContent">Content:
            <input type="text" id="noteContent" onChange={this.changeState}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteForm;
