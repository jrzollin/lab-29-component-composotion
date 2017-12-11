import React from 'react';
import ReactDom from 'react-dom';

import NoteForm from './components/note-form.js';
import NoteList from './components/note-list.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.state = {
      notes: [],
    };
  }

    addNote(note){
      let noteArray = this.state.notes;
      noteArray.push(note);
      this.setState({notes: noteArray});
    };

    deleteNote(id){
      let noteArray = this.state.notes;
      noteArray.splice(id, 1);
      this.setState({notes: noteArray});
    }

    render(){
      return (
        <div>
          <NoteForm addNote={this.addNote}/>
          <NoteList notes={this.state.notes} deleteNote={this.deleteNote}/>
        </div>
      )
    }

}

ReactDom.render(<App/>, document.getElementById('root'));
