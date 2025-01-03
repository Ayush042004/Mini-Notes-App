import React from 'react'
import { FaRegFileAlt} from "react-icons/fa";
import {IoCloseSharp} from "react-icons/io5";
import { motion } from 'framer-motion';

//passings the things we wanna use as prop 
function Card({reference, title, desc, onDelete}) {
    const deleteHandler = () => {
        onDelete();
    }
  return (
  // this is for the framer motion to work passing reference in this for animation
    <motion.div
    drag
    dragConstraints={reference}
    whileDrag={{scale: 1.2}}
    dragElastic={0.5}
    dragTransition={{bounceStiffness: 300, bounceDamping: 10}}
    className='Card relative flex-shrink h-72 w-60 rounded-[40px] bg-blue-600/40 py-8 px-6 text-white'
    >

    <div className='flex justify-between'>
        <FaRegFileAlt />
        <button onClick={deleteHandler}>
        <IoCloseSharp className='cursor-pointer' />
        </button>
    </div>
    <div className='flex flex-col items-center justify-center gap-3 mt-6'>
    <h4 className="card-info text-center">{title}</h4>
    <p className="card-info mt-6 leading-tight text-center text-wrap">{desc}</p>
    </div>
    </motion.div>
  )
}

export default Card