import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'
// import  Image from 'next/image'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1>Ig.News</h1>
                {/* <img src='/images/Logo.svg' alt='ig.news' /> */}
                <nav>
                    <a className={styles.active}>Home</a>
                    <a className={styles.headerContent}>Posts</a>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}