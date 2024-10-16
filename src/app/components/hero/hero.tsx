import Image from "next/image"
import style from "./hero.module.css"
const Hero = () => {
  return (
    <div className={style.hero}>
        <h1 className={style.heading}> Welcme to Nextjs world</h1>
        <Image 
        className={style.img}
        src="/main-pic.jpg"
        alt="laptop"
        height={100}
        width={100}
        />
      
    </div>
  )
}

export default Hero
