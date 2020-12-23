import React from 'react';
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: null | string
    logout: () => void
}

const Header = (props: PropsType) => {
    return (
        <header className={styles.header}>
            <img
                src="https://vignette.wikia.nocookie.net/memoryalpha/images/9/9c/%D0%9E%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%97%D0%B5%D0%BC%D0%BB%D1%8F.gif/revision/latest/scale-to-width-down/340?cb=20160827090311&path-prefix=ru"/>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout} >Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>   }

            </div>
        </header>
    );
}

export default Header;