import React from 'react';
import Header from './Header';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import Footer from './Footer';
import { getInitialData } from '../utils/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            unfilteredNotes: getInitialData(),
        }
        
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
              }
            ]
          }
        });
    }

    onSearchHandler(text) {
        if (text.length !== 0 && text.trim() !== '') {
            const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(text.toLowerCase()));
            this.setState({
                notes: filteredNotes,
            });
        } else {
            this.setState({
                notes: getInitialData(),
            })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="formNotes">
                    <h2>Tambah Catatan</h2>
                    <NoteInput addNote={this.onAddNoteHandler} />
                </div>
                <div className="showNotes">
                    <h2>Daftar Catatan</h2>
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;