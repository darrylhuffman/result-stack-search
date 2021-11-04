
import styles from '../../styles/Home.module.scss'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <a
                href="https://darrylhuffman.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Created by Darryl Huffman
            </a>
        </footer>
    )
}