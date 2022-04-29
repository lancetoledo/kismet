import React from 'react'
import Image from 'next/image'

const styles = {
    header: `h-20 flex w-full p-[30px] text-lg font-bold items-center justify-between`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl px-4 `,
    nav: `flex justify-center items-center gap-[20px]`,
    navItem:`relative mr-1 cursor-pointer hover:text-green-500`,
    navLink: `flex mx-[10px]` ,
    // badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 ml-3`,
    button: `flex justify-center items-center mx-[10px] bg-orange-500 w-20 h-10 text-white`,
}

const Header = () => {
  return (
    <div className={styles.header}>
        Kismet
        <div className={styles.headerWrapper}>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>Catalogue</div>

                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Your Cart</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Favourites</div>

                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Your Orders</div>

                </div>

            </nav>

            <div className='flex items-center'>
            <div className={styles.button}>Login</div>
            </div>
        </div>
    </div>
  )
}

export default Header 