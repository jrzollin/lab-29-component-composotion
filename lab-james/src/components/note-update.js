import React from 'react';

class NoteUpdate extends React.Component {

  constructor(props){
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      noteUpdate: this.props.note.content
    }
  }

  updateState(e){
    this.setState({noteUpdate: e.target.value});
  }

  handleUpdate(e){
    e.preventDefault();
    this.props.updateNote(this.props.index, this.state.noteUpdate);
    this.props.handleUpdateCancel();
  }

  handleCancel(e){
    this.props.handleUpdateCancel();
  }

  render(){
    const {note} = this.props;

    return (
      <div>
        <h3>Edit Mode</h3>
        <form onSubmit={this.handleUpdate}>
          <input type="text" defaultValue={note.content} onChange={this.updateState}/>
          <input type="submit" value="Update" />
          <button type="button" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default NoteUpdate;
