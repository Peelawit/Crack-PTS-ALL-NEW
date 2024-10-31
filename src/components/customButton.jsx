import React from 'react'

const KuntiButton = ({
    text = "",
    onclick,
    style = ""
}) => {
  return (
    <div>
        <div 
        className={`bg-blue-300 rounded-full hover:bg-blue-800 text-black p-2 ${style}`}
        onClick={onclick}
        >
            <p>{`${text}`}</p>
        </div>
    </div>
  )
}

export default KuntiButton