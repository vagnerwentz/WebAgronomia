import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
          <nav>
            <ul className={styles.navLinks}>
              <li>
                <Link to="/A">A</Link>
              </li>
              <li>
                <Link to="/B">B</Link>
              </li>
              <li>
                <Link to="/C">C</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
}