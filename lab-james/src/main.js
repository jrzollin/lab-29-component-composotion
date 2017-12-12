import React from 'react';
import ReactDom from 'react-dom';

import NoteForm from './components/note-form.js';
import NoteList from './components/note-list.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

import './style/components/header.scss';

class App extends React.Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);

    this.state = {
      notes: [],
    };
  }

    addNote(note){
      let noteArray = this.state.notes;
      noteArray.push(note);
      this.setState({notes: noteArray});
    };

    deleteNote(index){
      let noteArray = this.state.notes;
      noteArray.splice(index, 1);
      this.setState({notes: noteArray});
    }

    updateNote(index, note){
      let noteArray = this.state.notes;
      noteArray[index].content = note;
      this.setState({notes: noteArray});
    }

    render(){
      return (
        <div>
          <Header />
          <NoteForm addNote={this.addNote}/>
          <NoteList notes={this.state.notes} deleteNote={this.deleteNote} updateNote={this.updateNote}/>
          <Footer />
        </div>
      )
    }

}

ReactDom.render(<App/>, document.getElementById('root'));
