import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 p-3 m-2 bg-gray-200 rounded-md w-24 text-center'>{name} </button>
    </div>
  )
}

export default Button;
