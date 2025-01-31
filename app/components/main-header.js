import Link from "next/link";
import classes from './main-header.module.css';

export default function MainHeader() {
    return <div className={classes['links-wrapper']}>
        <Link href="/">Home page</Link>
        <Link href="/news">News page</Link>
    </div>
}