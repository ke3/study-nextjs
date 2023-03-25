
import Image from 'next/image'
import styles from '@/styles/Main.module.css'
import { Links } from '@/components/Links'
import { HeadLine } from '@/components/HeadLine'

export function Main(props) {
    return (
        <>
            <main className={styles.main}>
                <HeadLine content={props.children} page={props.page} />
                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                    <div className={styles.thirteen}>
                        <Image
                            src="/thirteen.svg"
                            alt="13"
                            width={40}
                            height={31}
                            priority
                        />
                    </div>
                </div>
                <Links />
            </main>
        </>
    )
}
