import Link from 'next/link'
import styles from '@/styles/Header.module.css'

export function Header(props) {
    return (
        <header className={styles.header}>
            <Link className={styles.anchor} href="/">
                Index
            </Link>
            <Link className={styles.anchor} href="/about">
                About
            </Link>
        </header>
    )
}
