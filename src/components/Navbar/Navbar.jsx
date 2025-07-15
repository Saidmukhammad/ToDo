import { useContext, useState } from "react"
import { searchImg, backImg, closeImg } from "../../assets/image"
import './navbar.css'
import Transition from "../Transition/Transition"
import { NotesContext } from "../../context/NotesProvider"

const Navbar = () => {
    const {search, setSearch, words, lang, setLang} = useContext(NotesContext)
    const [hide, setHide] = useState(false);
    

    const changeHide = ()=>{
        setHide(!hide)
        setSearch('')
    }
    const changeSearch = (event)=>{
        setSearch(event.target.value);
    }
  return (
    <header className='header'>
        <Transition hide={hide} className="header__content">
            {
                lang == 'uz' ? 
                <button className="header__lang" onClick={()=>{setLang('ru')}}>ru</button> :
                <button className="header__lang" onClick={()=>{setLang('uz')}}>uz</button>
            }
            <h1 className='header__title'>{words.appbartitle[lang]}</h1>
            <button className='header__search' onClick={changeHide}>
                <img src={searchImg} alt="" />
            </button>
        </Transition>
        <Transition hide={!hide} className="header__form hide">
            <button onClick={changeHide}>
                <img src={backImg} alt="" />
            </button>
            <input value={search} onChange={changeSearch} type="text" className="container header__input" placeholder={words.appbarseacrch[lang]}/>
            <button onClick={()=>{setSearch('')}}>
                <img src={closeImg} alt="" />
            </button>
        </Transition>
    </header>
  )
}

export default Navbar