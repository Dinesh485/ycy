import {  useEffect, useRef, useState } from "react"

const Accordion = ({btn, content}) => {
  const contentRef = useRef(null)
  const[contentHeight, setContentHeight] = useState(0)
  const handleClick = () =>{
      if(contentHeight){
         setContentHeight(0)
      }else{
          setContentHeight(contentRef.current.scrollHeight)
      }
  }
  useEffect(() =>{
     if(window.innerWidth >= 1024){
        setContentHeight(contentRef.current.scrollHeight)
     }
  },[])
  return (
    <div>
        <div onClick = {handleClick} >
           {btn(contentHeight >0)}
        </div>
        <div ref = {contentRef} className="transition-all duration-150 ease-out overflow-y-hidden" style = {{height: contentHeight + 'px'}}>
            {content}
        </div>
    </div>
  )
}

export default Accordion