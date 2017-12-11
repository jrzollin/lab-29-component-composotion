import React from 'react';

class NoteItem extends React.Component {

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    this.props.deleteNote(e.target.dataset['key']);
  }

  render(){
    const {note} = this.props;

    return (
      <div>
        <p>Note ID: {note.id}</p>
        <p>Subject: {note.subject}</p>
        <p>{note.content}</p>
        <button type="button" onClick={this.handleDelete} data-key={this.props.index}>Delete</button>
      </div>
    )
  }
}

export default NoteItem;
