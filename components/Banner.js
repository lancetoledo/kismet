import React from 'react'
import FindFlights from './FindFlights'

const styles = {
    banner: `flex flex-col w-full h-96 bg-light-green rounded-2xl p-[50px] gap-[30px]`,
    textWrapper:`w-6/12`,
    headline: `text-6xl text-white font-semibold pr-11`,
    slogin: `text-3xl text-white`,
    select: `bg-neutral-900 text-white w-40 h-12 flex justify-center items-center rounded-t-xl font-semibold`,
    flightsWrapper: `w-4/5`,
    flightsInfo: ` flex h-20 w-full bg-neutral-50 rounded-b-xl rounded-tr-xl`
}
const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.textWrapper}>
            <div className={styles.headline}>Explore New Places</div>
            <div className={styles.slogin}>Go where you are meant to be</div>
        </div>

        <div className={styles.flightsWrapper}>
            <div className={styles.select}>Flights</div>
            <div className={styles.flightsInfo}>
                <FindFlights/>
            </div>
        </div>
    </div>
  )
}

export default Banner