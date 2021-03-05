import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">BLOGIN'</Link></li>
                <li><Link to="/new">+ new post</Link></li>    
            </ul> 
        </nav>
    )
}

export default Nav