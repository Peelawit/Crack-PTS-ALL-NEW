import { useState } from 'react'
import Planned from './components/planned';


function App() {
  const handleButtonClick = () => {
    const youtubeVideoUrl = 'https://drive.google.com/file/d/1DZpHFTZJCvP5z01NYxmMLxjNx5UbA_-O/view?usp=sharing'; // เปลี่ยนเป็น URL วิดีโอที่คุณต้องการ
    window.location.href = youtubeVideoUrl;
  };
  const handleButtonClick2 = () => {
    const youtubeVideoUrl = 'https://drive.google.com/file/d/1SklxJf_l2vEm1AJM3BndQ0CUclqDRbAM/view?usp=sharing'; // เปลี่ยนเป็น URL วิดีโอที่คุณต้องการ
    window.location.href = youtubeVideoUrl;
  };
  const handleButtonClick3 = () => {
    const youtubeVideoUrl = 'https://drive.google.com/file/d/161XLtAvtDOWWcY-e9FY-7IGg7EgWuNji/view?usp=sharing'; // เปลี่ยนเป็น URL วิดีโอที่คุณต้องการ
    window.location.href = youtubeVideoUrl;
  };
  const handleButtonClick4 = () => {
    const youtubeVideoUrl = 'https://drive.google.com/file/d/1ahX-Fx4E6DaA_xwZRKnnJzLXmdHl0bLz/view?usp=sharing'; // เปลี่ยนเป็น URL วิดีโอที่คุณต้องการ
    window.location.href = youtubeVideoUrl;
  };
  const handleButtonClick5 = () => {
    const youtubeVideoUrl = 'https://drive.google.com/file/d/19wpLGZY7tqklyGYpZNGvcdh83lFqliNQ/view?usp=sharing'; // เปลี่ยนเป็น URL วิดีโอที่คุณต้องการ
    window.location.href = youtubeVideoUrl;
  };
  const handleButtonClick6 = () => {
    const youtubeVideoUrl = 'https://drive.google.com/file/d/1nr92o2N_GfY_yYgZJhAHj46mpWCi4IR6/view?usp=sharing'; // เปลี่ยนเป็น URL วิดีโอที่คุณต้องการ
    window.location.href = youtubeVideoUrl;
  };


  return (
    <>
    <div>
      <div className={`flex justify-center items-center flex-col pt-[5%] gap-10`}>
          <label className='text-2xl text-black font-bold bg-red-500 p-2 rounded-md'>Crack All Adobe Photoshop CC new !!!</label>
          <div onClick={handleButtonClick} className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
            Adobe Photoshop CC v1 2019.exe
          </div>

          <div onClick={handleButtonClick2} className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
          Adobe Photoshop CC v1 2020.exe
          </div>

          <div  onClick={handleButtonClick3} className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
          Adobe Photoshop CC v2 2021.exe
          </div>

          <div onClick={handleButtonClick4} className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
          Adobe Photoshop CC v2 2022.exe 
          </div>

          <div onClick={handleButtonClick5} className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
          Adobe Photoshop CC v1 2023.exe
          </div>

          <div onClick={handleButtonClick6} className={` bg-white text-black text-xl font-semibold cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-sm p-4 rounded-lg w-[40%] hover:bg-black hover:text-white hover:border-2`}>
          Adobe Photoshop CC v1 2024.exe
          </div>
      </div>
    </div>
    </>
  )
}

export default App
