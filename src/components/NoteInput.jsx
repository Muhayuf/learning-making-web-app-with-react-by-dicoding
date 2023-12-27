import React from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { showFormattedDate } from '../utils/index';
 
class NoteInput extends React.Component {
    constructor(props) {
    super(props);
    
    this.state = {
        title: '',
        body: '',
    };
    
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    onTitleChangeEventHandler(event) {
      const { value } = event.target;
      if (value.length <= 50) {
        this.setState({
          title: value,
        });
      }
    }

    onBodyChangeEventHandler(event) {
        const { value } = event.target;
        this.setState({
          body: value,
        });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        const { title, body } = this.state;
        const { addNote } = this.props;
    
        const newData = {
          id: +new Date(),
          title: title,
          body: body,
          archived: false,
          createdAt: new Date(),
        };

        addNote(newData);

        this.setState({
          title: '',
          body: '',
        });
    
      }
    

    render() {
        return (
            <form className='formInput' onSubmit={this.onSubmitEventHandler}>
                <input className='input' type="text" placeholder="Judul" requiredvalue={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea className='input' type="text" placeholder="Catatan" required value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit" className='addBtn'>Tambah Catatan <FontAwesomeIcon icon={faPlus} style={{ color: '#393E46' }} /></button>
            </form>
        )
    }
}
 
export default NoteInput;