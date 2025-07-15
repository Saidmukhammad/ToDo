import { useContext } from "react"
import { editImg, deleteImg } from "../../assets/image"
import { NotesContext } from "../../context/NotesProvider"

const NotesItem = ({list, note}) => {
    const {delNote, getNote, words, lang} = useContext(NotesContext)
  return (
    <div className='card'>
        <div className={ !list ? "card__block" : ''}>
            <h3 className="card__title">{note.title}</h3>
            <p className="card__date">{note.date}</p>
        </div>
        <p className="card__desc">{note.text}</p>
        <div className="card__controls">
            <button className="btn" onClick={()=>{getNote(note.id)}}>
                <img src={editImg} alt="" />
                {words.editbtn[lang]}
            </button>
            <button className="btn red" onClick={()=>{delNote(note.id)}}>
                <img src={deleteImg} alt="" />
                {words.deledit[lang]}
            </button>
        </div>
    </div>
  )
}

export default NotesItem