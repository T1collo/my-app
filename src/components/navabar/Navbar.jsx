"use client";

import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Portfolio", url: "/portfolio" },
    { id: 3, title: "Blog", url: "/blog" },
    { id: 4, title: "About", url: "/about" },
    { id: 5, title: "Contact", url: "/contact" },
    { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                Belmont
            </Link>
            <div className={styles.links}>
                {links.map(link => (
                    <Link
                        key={link.id}
                        href={link.url}
                        className={`${styles.link} ${pathname === link.url ? styles.active : ''}`} //if pathname === to link.url then call styles.active
                    >
                        {link.title}
                    </Link>
                ))}
                <button
                    onClick={() => console.log('Logout')}
                    className={styles.logout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
