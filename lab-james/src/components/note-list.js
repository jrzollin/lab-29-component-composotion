import React from 'react';
import NoteItem from './note-item.js';
import PropTypes from 'prop-types';

class NoteList extends React.Component {

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    this.props.deleteNote(e.target.dataset['key']);
  }

  render(){
    const {notes} = this.props;

    const listNotes = notes.map( (note, i) => (
      <li key={i}>
        <NoteItem note={note} index={notes.indexOf(note)} deleteNote={this.props.deleteNote} updateNote={this.props.updateNote}/>
      </li>
    ));

    return(
      <ul>
        {
          listNotes
        }
      </ul>
    )
  }
}

NoteList.propTypes = {
  deleteNote: PropTypes.func.isRequired,
}

export default NoteList;
