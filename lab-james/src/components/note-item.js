import React from 'react';
import NoteUpdate from './note-update.js';
import '../style/components/_note-item.scss';

class NoteItem extends React.Component {

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdateCancel = this.handleUpdateCancel.bind(this);
  }

  handleDelete(e){
    this.props.deleteNote(e.target.dataset['key']);
  }

  handleEdit(e){
    let id = `${this.props.note.id}_final`;
    e.target.id = id;
    e.target.className = 'hide';
    let ele = document.getElementById(this.props.note.id);
    ele.setAttribute("class", '');
  }

  handleUpdateCancel(){
    let eleEdit = document.getElementById(this.props.note.id);
    eleEdit.setAttribute("class", 'hide');
    let eleFinal = document.getElementById(`${this.props.note.id}_final`);
    eleFinal.setAttribute("class", '');

  }

  render(){
    const {note} = this.props;

    return (
      <div>
        <p>Note ID: {note.id}</p>
        <p>Subject: {note.subject}</p>
        <p onDoubleClick={this.handleEdit} data-key={this.props.index}>{note.content}</p>
        <div id={this.props.note.id} className="hide">
          <NoteUpdate note={note} index={this.props.index} updateNote={this.props.updateNote} handleUpdateCancel={this.handleUpdateCancel}/>
        </div>
        <button type="button" onClick={this.handleDelete} data-key={this.props.index}>Delete</button>
      </div>
    )
  }
}

export default NoteItem;
