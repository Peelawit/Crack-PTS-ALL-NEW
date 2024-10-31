import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Moon, Sun1, Trash } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';

const Planned = ({
    text = "",
    open,
    onclick,
    setValueModal,
    style = ""
}) => {

    const [rowDayShift, setRowDayShift] = useState([])
    const [rowNightShift, setRowNightShift] = useState([])
    
    const handleSetValueModal = (value) => {
        setValueModal(value);
    };
    
    const handleAddRowDayShift = () => {
        setRowDayShift(prev => [...prev, 
            {
                DESCRIPTION:"",
                ITEM_CODE:"",
                ON_HAND:"",
                UOM:"",
            },])
    }
    
    const handleDeleteDayShift = (index) => {
        setRowDayShift(prev => {
            const clone = [...prev]
            clone.splice(index, 1)
            return clone
        })
        setDisabledOptions(prev => {
            const clone = [...prev]
            clone[index] = []
            return clone
        })
    }
    
    const handleOnChangeStartDayShift = (e,index,onHand) => { 
        setRowDayShift(prev => {
            const clone = [...prev] 
            clone[index].START = e.target.value
            return clone
        })
    }
    const handleOnChangeStopDayShift = (e,index,onHand) => { 
        setRowDayShift(prev => {
            const clone = [...prev] 
            clone[index].STOP = e.target.value
            return clone
        })
    }

    

    const handleAddRowNightShift = () => {
      setRowNightShift(prev => [...prev, 
          {
              DESCRIPTION:"",
              ITEM_CODE:"",
              ON_HAND:"",
              UOM:"",
          },])
  }
  
  const handleDeleteNightShift = (index) => {
      setRowNightShift(prev => {
          const clone = [...prev]
          clone.splice(index, 1)
          return clone
      })
      setDisabledOptions(prev => {
          const clone = [...prev]
          clone[index] = []
          return clone
      })
  }
  
  const handleOnChangeStartNightShift = (e,index,onHand) => { 
      setRowNightShift(prev => {
          const clone = [...prev] 
          clone[index].START = e.target.value
          return clone
      })
  }
  const handleOnChangeStopNightShift = (e,index,onHand) => { 
      setRowNightShift(prev => {
          const clone = [...prev] 
          clone[index].STOP = e.target.value
          return clone
      })
  }

    console.log("🚀 ~ rowDayShift:", rowDayShift)
    return (
    <div className={``}>
      <dialog id="my_modal_1" className="modal" open={open}>
        <div className="modal-box w-full max-w-7xl h-full flex flex-col justify-between bg-slate-100">
          <div
            onClick={()=>handleSetValueModal(false)}
            >
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
              ✕
            </button>
          </div>
          <h3 className="font-bold text-2xl text-center uppercase  ">
            Set Planned Downtime
          </h3>
          <div className={`flex justify-center w-full h-full gap-2  overflow-y-auto py-2 `}>
            <div className="h-full pt-16">
                <div className="w-[500px] bg-white p-2 rounded-2xl flex justify-center relative shadow-2xl border border-black ">
                    <div className={`w-[100px] h-[100px] bg-white absolute -top-14 rounded-full flex justify-center border border-black items-center `}>
                    <Sun1
                    size="64"
                    color="black"
                    />
                    </div>
                    <div className="bg-white rounded-t-full w-full pt-12 pb-6  ">
                    <div className={`p-4 w-full`}>
                        <div className={``}>
                            <TableContainer component={Paper}>
                            <Table sx={{}} size="small" className={` border-[#1976D2] border-2 w-full  `}>
                                {/* <caption>A basic table example with a caption</caption> */}
                                <TableHead className={`text-center`}>
                                <TableRow>
                                    <TableCell className={`bg-primary  w-[2%]`}align="center"><p className={` text-white font-semibold`}>#</p></TableCell>
                                    <TableCell className={`bg-primary text-white font-bold text-3xl w-[49%]`} align="center"><p className={` text-white font-semibold`}>Down Time Start</p></TableCell>
                                    <TableCell className={`bg-primary text-white font-bold text-3xl w-[49%]`} align="center"><p className={` text-white font-semibold`}>Down Time Stop</p></TableCell>
                                    <TableCell className={`bg-primary text-white font-semibold w-2`} align="center"></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowDayShift.map((row,index) => (
                                    <TableRow key={row.name} >
                                    <TableCell align="center">{index+1}</TableCell>
                                    <TableCell align="center">
                                        <TextField
                                        id="outlined-basic"
                                        type="number"
                                        size="small"
                                        variant="outlined"
                                        onChange={(e)=>handleOnChangeStartDayShift(e,index)}
                                        onKeyDown={(e) => {
                                            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                                              e.preventDefault()
                                            }
                                          }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <TextField
                                        id="outlined-basic"
                                        type="number"
                                        size="small"
                                        variant="outlined"
                                        onChange={(e)=>handleOnChangeStopDayShift(e,index)}
                                        onKeyDown={(e) => {
                                            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                                              e.preventDefault()
                                            }
                                          }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        {<Trash className={`cursor-pointer`} color="red" 
                                        onClick={() => handleDeleteDayShift(index)} />}
                                    </TableCell>
                                    
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </div>
                        <div className={`bg-primary text-white cursor-pointer hover:bg-gradient-to-br from-[#1976D2] from-0% to-[#62B1FF] to-[100%] hover:text-white  hover:shadow-[0_4px_20px_0px_rgba(25,118,210,0.25)] 
                        border-[1px] border-[#B4B6CD] rounded-lg  select-none  mt-2 p-2 text-center font-semibold text-4xl 
                        `}
                        onClick={()=>handleAddRowDayShift()} 
                        >
                            +
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="h-full pt-16">
            <div className="w-[500px] bg-white p-2 rounded-2xl flex justify-center relative shadow-2xl border border-black ">
                    <div className={`w-[100px] h-[100px] bg-white absolute -top-14 rounded-full flex justify-center border border-black items-center `}>
                    <Moon
                    size="64"
                    color="black"
                    />
                    </div>
                    <div className="bg-white rounded-t-full w-full pt-12 pb-6">
                    <div className={`p-4 w-full`}>
                        <div className={``}>
                            <TableContainer component={Paper}>
                            <Table sx={{}} size="small" className={` border-[#1976D2] border-2 w-full `}>
                                {/* <caption>A basic table example with a caption</caption> */}
                                <TableHead className={`text-center`}>
                                <TableRow>
                                    <TableCell className={`bg-primary  w-[2%]`}align="center"><p className={` text-white font-semibold`}>#</p></TableCell>
                                    <TableCell className={`bg-primary text-white font-bold text-3xl w-[49%]`} align="center"><p className={` text-white font-semibold`}>Down Time Start</p></TableCell>
                                    <TableCell className={`bg-primary text-white font-bold text-3xl w-[49%]`} align="center"><p className={` text-white font-semibold`}>Down Time Stop</p></TableCell>
                                    <TableCell className={`bg-primary text-white font-semibold w-2`} align="center"></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowNightShift.map((row,index) => (
                                    <TableRow key={row.name} >
                                    <TableCell align="center">{index+1}</TableCell>
                                    <TableCell align="center">
                                        <TextField
                                        id="outlined-basic"
                                        type="number"
                                        size="small"
                                        variant="outlined"
                                        onChange={(e)=>handleOnChangeStartNightShift(e,index)}
                                        onKeyDown={(e) => {
                                            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                                              e.preventDefault()
                                            }
                                          }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <TextField
                                        id="outlined-basic"
                                        type="number"
                                        size="small"
                                        variant="outlined"
                                        onChange={(e)=>handleOnChangeStopNightShift(e,index)}
                                        onKeyDown={(e) => {
                                            if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                                              e.preventDefault()
                                            }
                                          }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        {<Trash className={`cursor-pointer`} color="red" 
                                        onClick={() => handleDeleteNightShift(index)} />}
                                    </TableCell>
                                    
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </div>
                        <div className={`bg-primary text-white cursor-pointer hover:bg-gradient-to-br from-[#1976D2] from-0% to-[#62B1FF] to-[100%] hover:text-white  hover:shadow-[0_4px_20px_0px_rgba(25,118,210,0.25)] 
                        border-[1px] border-[#B4B6CD] rounded-lg  select-none  mt-2 p-2 text-center font-semibold text-4xl 
                        `}
                        onClick={()=>handleAddRowNightShift()} 
                        >
                            +
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          </div>
          <div>
            <div  className={`flex justify-center mt-2 `}>
              <button
                className="bg-[#1D232A] btn uppercase text-white my-2 mx-2 w-[150px] border-2 border-blue-300
            hover:bg-gradient-to-r 
            hover:from-fuchsia-600 
            hover:to-purple-600 
            hover:shadow-lg
            hover:border-purple-300
            hover:shadow-fuchsia-300 
            "
              >
                submit
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={()=>handleSetValueModal(false)} 
          className="modal-backdrop w-screen h-screen absolute bg-black opacity-50"
        >
          <button>close</button>
        </div>
      </dialog>
      
        


    </div>
  );
};

export default Planned;
