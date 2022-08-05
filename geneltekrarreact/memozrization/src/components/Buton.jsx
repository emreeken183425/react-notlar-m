import {Children, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
function Buton({Children}) {
    const data=useContext(ThemeContext);
  return (
    <div>
      {Children}
    </div>
  )
}

export default Buton
