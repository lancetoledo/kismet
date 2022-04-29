import React from 'react'

const styles = {
    banner: `flex flex-col w-full h-96 bg-light-green rounded-2xl p-[50px] gap-[30px]`,
    textWrapper:`w-6/12`,
    headline: `text-6xl text-white font-semibold pr-11`,
    slogin: `text-3xl text-white`,
    select: `bg-neutral-900 text-white w-52 h-12 flex justify-center items-center rounded-t-xl font-semibold`
}
const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.textWrapper}>
            <div className={styles.headline}>Explore New Places</div>
            <div className={styles.slogin}>Enjoy every good moment</div>
        </div>

        <div className={styles.flightsWrapper}>
            <div className={styles.select}>Online Booking</div>
            <div className={styles.flightsInfo}></div>
        </div>
    </div>
  )
}

export default Banner