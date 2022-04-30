import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { MdOutlineCardTravel } from 'react-icons/md'
import { IoMdGlobe } from 'react-icons/io'
import { FaCalendarAlt } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'

const styles = {
  inputContainer:` flex items-center justify-center w-44 gap-2 p-[8px]`,
  icon:`w-6 h-6 opacity-50`,
  inputTitle: `flex flex-col border-stone-200 border-r-2 w-full `,
  inputField: `outline-0 w-32 h-6 bg-transparent`,
  dateContainer:`flex items-center justify-center w-28`,
  dateField: `flex items-center justify-center gap-2 w-full `,
  dateTitle: `flex flex-col border-stone-200 border-r-2 w-full items-center`,
  calendar:`cursor-pointer`,
  passengerContainer:`flex items-center justify-center w-36`,
  passengerTitle:`flex flex-col border-stone-200 border-r-2 w-full items-center`,
  passengerField:`flex items-center w-full justify-center`,
  dropDown:`w-6 h-6 cursor-pointer`,
  buttonContainer:`flex justify-center items-center w-44`,
  searchBtn:`bg-orange-500 w-28 h-14 flex justify-center items-center text-xl text-white font-semibold rounded-xl cursor-pointer`,
}

const FindFlights = () => {
  return (
    <>

      <div className={styles.inputContainer}>
        <MdOutlineCardTravel  className={styles.icon}/>
        <div className={styles.inputTitle}>
          <div className='text-sm'>Origin</div>
          <input className={styles.inputField} placeholder = "Newark Airport" type="text" />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <MdOutlineLocationOn  className={styles.icon}/>
        <div className={styles.inputTitle}>
          <div className='text-sm'>Destination</div>
          <input className={styles.inputField} placeholder = "Haneda Airport" type="text" />
        </div>
      </div>

      <div className={styles.dateContainer}>
        <div className={styles.dateTitle}>
          <div className='text-sm'>Depart Date</div>
          <div className={styles.dateField}>
            April, 17th
            <FaCalendarAlt className={styles.calendar}/>
          </div>
        </div>
      </div>

      <div className={styles.dateContainer}>
        <div className={styles.dateTitle}>
          <div className='text-sm'>Return Date</div>
          <div className={styles.dateField}>
            Dec, 24th
            <FaCalendarAlt className={styles.calendar} />
          </div>
        </div>
      </div>

      <div className={styles.passengerContainer}>
        <div className={styles.passengerTitle}>
          <div className='text-sm'>Passengers/Class</div>
          <div className={styles.passengerField}>
            <div>
              <p className='text-sm'>2 passengers</p>
              <p className='text-xs'>coach/economy</p>
            </div>
            <RiArrowDropDownLine className={styles.dropDown}/>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.searchBtn}>
          Search
        </div>
      </div>
    </>

  )
}

export default FindFlights