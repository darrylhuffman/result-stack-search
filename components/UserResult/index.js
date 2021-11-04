import { useEffect, useState } from 'react'
import styles from './UserResult.module.scss'

import Link from 'next/link'

export default function UserResult({ user }) {

    return (
        <Link href={'/user/' + user.login}>
            <a className={styles.UserResult}>
                <div className={styles.userInfo}>
                    <h3><span className={styles.avatar} style={{ backgroundImage: `url(${user.avatar_url})` }} />{user.login}</h3>
                </div>
            </a>
        </Link>
    )
}