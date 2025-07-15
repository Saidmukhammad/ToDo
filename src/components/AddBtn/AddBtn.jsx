import './add-btn.css'
import { editImg } from '../../assets/image'
import { NotesContext } from '../../context/NotesProvider';
import { useContext } from 'react';

const AddBtn = () => {
    const {setModal} = useContext(NotesContext)
  return (
    <div className='add-btn' onClick={()=>{ setModal(true)}}>
        <img src={editImg} alt="" />
    </div>
  )
}

export default AddBtn