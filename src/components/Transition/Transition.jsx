import { useEffect, useRef } from "react"

const Transition = ({children, className, hide, onClick}) => {
    const elem = useRef(null);
    useEffect(()=>{
      if (elem.current && hide) {
          elem.current.classList.add('hide')
      } else if(elem.current && !hide) {
          elem.current.classList.remove('hide')        
      }
    })
  return (
    <div ref={elem} className={className} onMouseDown={onClick}>{children}</div>
  )
}

export default Transition