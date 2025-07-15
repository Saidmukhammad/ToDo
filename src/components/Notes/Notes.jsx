import { useContext, useState } from "react";
import { gridImg, listImg } from "../../assets/image"
import './notes.css';
import NotesItem from "./NotesItem";
import { NotesContext } from "../../context/NotesProvider";

const Notes = () => {
  const [list, setList] = useState(true)
  const {notes, search, words, lang} = useContext(NotesContext);
  const newNotes = notes.filter((elem)=>{
    const result = elem.title.concat(elem.text).toLowerCase().includes(search.toLowerCase());
    return result
  })
  return (
    <div className='notes container'>
        <div className="notes__top">
            <h2 className="notes__title">{ newNotes.length > 0 ? words.infobar[lang] : words.noinfobar[lang]}</h2>
            <button className='notes__btn' onClick={()=>{setList(!list)}}>
                <img src={list ? listImg : gridImg} alt="" />
                <span>{ list ? words.list[lang] : words.grid[lang]}</span>
            </button>
        </div>
        <div className={`notes__list ${!list && 'active'}`}>
          {
            newNotes.map((elem)=>{
              return <NotesItem key={elem.id} note={elem} list={list}/>
            })
          }         
        </div>
    </div>
  )
}

export default Notes