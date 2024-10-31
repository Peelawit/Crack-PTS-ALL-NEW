import { useState } from 'react'
import Planned from './components/planned';


function App() {
  const [open,setOpen] = useState()
  const [timeArray, setTimeArray] = useState([
    ['08:10', '08:20'],
    ['09:10', '09:20'],
    ['20:40', '20:50'],
  ]);
  
  const handleSetOpenModal = (newValue) => {
    setOpen(newValue);
  };

  return (
    <>
    <div>
      <div className={`flex justify-center items-center flex-col pt-[5%] gap-10`}>
          <label className='text-2xl text-black font-bold bg-red-500 p-2 rounded-md'>Crack All Adobe Photoshop CC new !!!</label>
          <div className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
            Adobe Photoshop CC v1 2019.exe
          </div>

          <div className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
          Adobe Photoshop CC v1 2020.exe
          </div>

          <div className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
          Adobe Photoshop CC v2 2021.exe
          </div>

          <div className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
          Adobe Photoshop CC v2 2022.exe 
          </div>

          <div className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
          Adobe Photoshop CC v1 2023.exe
          </div>

          <div className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
          Adobe Photoshop CC v1 2024.exe
          </div>
      </div>
    </div>
    </>
  )
}

export default App
