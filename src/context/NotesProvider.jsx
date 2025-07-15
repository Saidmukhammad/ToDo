import { createContext, useEffect, useState } from "react"
export const NotesContext = createContext(null);
import words from "../assets/lang";

const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'React',
      date: '07.03.2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id: 2,
      title: 'Vue.js',
      date: '07.03.2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id: 3,
      title: 'Angular',
      date: '07.03.2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
  ])
  const [modal, setModal] = useState(false);
  const [currentId, setCurrentId] = useState(0)
  const [noteInfo, setNoteInfo] = useState(null)
  const [search, setSearch] = useState('')
  const [lang, setLang] = useState('ru')
  
  const addNote = (note)=>{
    setNotes([...notes, note])
    setCurrentId(note.id)
  }

  const delNote = (id)=>{
    const newNotes = notes.filter((elem)=>{return elem.id != id});
    setNotes(newNotes);
  }

  const getNote = (id)=>{
    const note = notes.find((elem)=>{ return elem.id == id});
    setNoteInfo(note);
    setModal(true)
  }

  const editNote = (note)=>{
    const newNotes = notes.map((elem)=>{
      if (elem.id == note.id) {
        elem.title = note.title;
        elem.text = note.text;
        elem.date = note.date;
      }
      return elem
    })
    setNotes(newNotes)
    setNoteInfo(null);
  }

  const closeModal = ()=>{
    setModal(false);
    setNoteInfo(null);
  }

  useEffect(()=>{
    let localNotes = localStorage.getItem('notes');
    localNotes = JSON.parse(localNotes);
    if(localNotes) {
      setNotes(localNotes);
      // console.log(localNotes);
    }
    let localLang = localStorage.getItem('lang');
    localLang = JSON.parse(localLang);
    if (localLang) {
      setLang(localLang)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
    const lastIndex = notes.length - 1;
    const newId = lastIndex >= 0 ? notes[lastIndex].id : 0
    setCurrentId(newId);
  }, [notes])
 
  useEffect(()=>{
    localStorage.setItem('lang', JSON.stringify(lang))
  }, [lang])
  return (
    <NotesContext value={ 
      {notes, modal, setModal, addNote, currentId, delNote, getNote, noteInfo, editNote, closeModal, search, setSearch, words, lang, setLang}
      }>
        {children}
    </NotesContext>
  )
}

export default NotesProvider