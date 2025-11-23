import Link from "next/link";
import classes from "./Header.module.css";
import logoImg from "@/assets/logo.png"
import Image from "next/image";

export default function Header() {
    return (
        <header className={ classes.header }>
            <Link href="/" className={ classes.logo }>
                Happy Kitty
            </Link>
            <nav className={ classes.nav }>
                <ul>
                    <li>
                        <Link href="/" className={ classes.link }>Anasayfa</Link>
                    </li>
                    <li>
                        <Link href="/favs" className={ classes.link }>Favori Kediler</Link>
                    </li>
                    <li>
                        <Link href="/about" className={ classes.link }>Hakkımızda</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}