import style from  "./header.module.css"
import Link from "next/link"

const Header = () => {
  return (
    <nav className={style.top}>
       <ul className={style.ul}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>SREVICES</li>
        

       </ul>
      
    </nav>
  )
}

export default Header