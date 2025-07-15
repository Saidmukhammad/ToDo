import Modal from "./components/Modal/Modal"
import Navbar from "./components/Navbar/Navbar"
import Notes from "./components/Notes/Notes"
import NotesProvider from "./context/NotesProvider"
import AddBtn from "./components/AddBtn/AddBtn"

const App = () => {
  return (
    <NotesProvider>
      <Navbar/>
      <Notes/>
      <Modal/>
      <AddBtn/>
    </NotesProvider>
  )
}

export default App