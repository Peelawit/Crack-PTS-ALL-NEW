import React,{ useEffect, useState } from 'react'
const Button = ({
    label = 'Button',
    onClick,
    className = '',
    data= 'data',
}) => {
    return(
        <div className={`${className}   rounded-lg  select-none cursor-pointer min-w-[120px] text-center 
        hover:bg-gradient-to-br from-[#1976D2] from-0% to-[#62B1FF] to-[100%] hover:text-white  hover:shadow-[0_4px_20px_0px_rgba(25,118,210,0.25)]
        `} onClick={onClick} >
            <div className='text-md font-semibold px-[14px] py-2 truncate'>{`${label}`}</div>
        </div>
    )
}
export default Button