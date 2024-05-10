import styles from './header.module.css'
import { MdLightMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

export const Header = () => {

    return (
        <header className={`${styles.header}`}>
            <div className={`btn ${styles.sidebar__menu}`}>
                <IoMenu />
            </div>
            <div className={`${styles.logo__container}`}>
                GIDI
            </div>
            <div className={`flex ${styles.header__options}`}>
                <div className={`btn ${styles.dark__light__mode}`}>
                    <MdLightMode />
                </div>
                <div className='btn'>login</div>
            </div>
        </header>
    )
}