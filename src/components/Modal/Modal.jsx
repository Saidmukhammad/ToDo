import './modal.css';
import { NotesContext } from '../../context/NotesProvider';
import { useContext, useEffect, useState } from 'react';
import Transition from '../Transition/Transition';

const Modal = () => {
    const {modal, setModal, addNote, currentId, noteInfo, editNote, closeModal, words, lang} = useContext(NotesContext);
    const [input, setInput] = useState('');
    const [textarea, setTextarea] = useState('');
    const createNote = ()=>{
        const title = input.trim()
        const text = textarea.trim()
        if (title && text) {
            const note = {
                id: currentId + 1,
                title,
                text,
                date: new Date().toLocaleDateString()
            }
            addNote(note);
            setModal(false)
        }
    }

    const changeNote = ()=>{
        const title = input.trim()
        const text = textarea.trim()
        if (title && text) {
            const note = {
                id: noteInfo.id,
                title,
                text,
                date: new Date().toLocaleDateString()
            }
            editNote(note);
            setModal(false)
        }
    }

    useEffect(()=>{
        if (noteInfo) {
            setInput(noteInfo.title);
            setTextarea(noteInfo.text)
        } else {
            setInput('');
            setTextarea('')
        }
    }, [modal])
  return (
    <Transition className="modal" hide={!modal} onClick={closeModal}>
        <div className="modal__form" onMouseDown={(event)=>{event.stopPropagation()}}>
            <h3 className="modal__title">{ noteInfo ? words.titlewindowedit[lang] : words.titlewindow[lang]}</h3>
            <div className="modal__content">
                <label>
                    <span>Title</span>
                    <input value={input} onChange={(event)=>{setInput(event.target.value)}} type="text" placeholder="Title"/>
                </label>
                <label>
                    <span>Content</span>
                    <textarea value={textarea} onChange={(event)=>{setTextarea(event.target.value)}} placeholder="Content"></textarea>
                </label>
            </div>
            <div className="modal__controls">
                <button className="btn red" onClick={closeModal}>{words.closebtn[lang]}</button>
                {
                    noteInfo ? 
                    <button className="btn" onClick={changeNote}>{words.editwindowbtn[lang]}</button> :
                    <button className="btn" onClick={createNote}>{words.addbtn[lang]}</button>
                }
            </div>
        </div>
    </Transition>
  )
}

export default Modal