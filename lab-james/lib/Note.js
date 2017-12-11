import uuid from 'uuid';

class Note {
  constructor(subject, content){
    this.id = uuid();
    this.subject = subject;
    this.content = content;
    this.editing = false;
    this.completed = false;
  }

}

export default Note;
