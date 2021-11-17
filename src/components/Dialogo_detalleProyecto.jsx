import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import { TextareaAutosize } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box} from '@mui/system';
import { Typography } from '@mui/material';
import fotoman from 'fotoman.jpeg';



export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  

  return (
    <>
    
      <div>
        <Button onClick={handleClickOpen('paper')}>Diálogo detalle proyecto</Button>
        
        <Dialog
          className= "bg-black bg-opacity-50"
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        > 
          <DialogTitle id="scroll-dialog-title">
            <Box>
              <div className="flex justify-between">
                <div className="w-64">
                  <h1 className="mt-5 leading-6">Para titulos largos se puede poner limite de caracteres</h1>
                  <h1 className="mt-2 text-sm text-gray-300 font-normal">Id Proyecto</h1>
                </div>
                
                <div className="flex mt-5 self-baseline">
                  <div className="flex space-x-4">
                  <img className="rounded-full w-9 h-9" src={fotoman}/>
                      <div className = "flex flex-col ">
                        <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                        <span className = "font-light text-xs">2345</span>
                      </div>
                  </div>
                </div>
              </div>
              <div className= "flex space-x-4 mt-2">
                <div className= "space-x-2">
                  <i className = "far fa-calendar-alt date-budget"/>
                    <span className = "date-budget">Feb 01- Dic 12</span>
                </div>
                <div className= "space-x-2">
                  <i className = "fas fa-calculator date-budget"/>
                    <span className = "date-budget">Feb 01- Dic 12</span>
                </div>
              </div>

            </Box>
          </DialogTitle>

          <p className="my-2 mx-6 text-sm text-justify h-58 overflow-auto ">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>


          <div className="">
            <DialogContent>
              <div className="space-x-8 cursor-pointer">
                    <a className="tabs-modal">Objetivos generales</a>
                    <a className="tabs-modal">Objetivos específicos</a>
                </div>
            
                <div className="pt-2 mt-4 flex-col h-20 text-left overflow-auto">
                  <span className="w-full text-sm">1.Objetivo general ljdlkjaldkjaklsdjsklajdklsajdklsadlksja sdkjasdjsdkjsahjkdhsa</span>
                  <span className="w-full text-sm"> <br/>2.Objetivo general ljdlkjaldkjaklsdjsklajdklsajdklsadlksja sdkjasdjsdkjsahjkdhsa</span>
                  <span className="w-full text-sm"> <br/>3.Objetivo general ljdlkjaldkjaklsdjsklajdklsajdklsadlksja sdkjasdjsdkjsahjkdhsa</span>
                  <span className="w-full text-sm"> <br/>4.Objetivo general ljdlkjaldkjaklsdjsklajdklsajdklsadlksja sdkjasdjsdkjsahjkdhsa</span>
                </div>
              
                
              </DialogContent>
              <div className="text-center space-x-4 mt-5">
                <button className="w-1/5 h-7 filled-button  mb-8 ">ACEPTAR</button>
                <button className="w-1/5 h-7 outlined-button mb-8 ">RECHAZAR</button>
              </div>
            
          </div>
        </Dialog>
      </div>
    </>
  )
  }
