import React from 'react'


const Button = ({label, iconURL, backgroundColor, textColor,fullWidth}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} `
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && `w-full`}`}
    >
        {label}
        <img src={iconURL} alt="arrow right" className='ml-2 rounded-full w-5 h-5' />
    </button>

  )
}

export default Button