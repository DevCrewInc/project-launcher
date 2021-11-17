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


const theme = createTheme({
  palette: {
    primary: {
      main: '#C71745',
      dark: '#A5143A'
    }
  },
});

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
    <div>
      <Button onClick={handleClickOpen('paper')}>Diálogo crear proyecto</Button>
      
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
              <div>
                <input className="w-full rounded-sm" placeholder="Nombre del proyecto" type="text" id="fname" name=""></input>
                <h1 className="text-sm text-gray-300 font-normal">Id Proyecto</h1>
              </div>
              
              <div className="flex self-center">
                <div className="flex space-x-4">
                <img className="rounded-full w-9 h-9" src={fotoman}/>
                    <div className = "flex flex-col ">
                        <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                        <span className = "font-light text-xs">2345</span>
                    </div>
                </div>
              </div>
            </div>
            
            {/* <div sx={{ display: 'inline-flex', justifyContent: 'space-between'}}> */}

          </Box>
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
          <div className= "flex space-x-4">
            <div className= "space-x-2">
              <i className = "far fa-calendar-alt date-budget"/>
                <span className = "date-icon date-budget">Feb 01- Dic 12</span>
            </div>
            <div className= "space-x-2">
              <i className = "fas fa-calculator date-budget"/>
                <span className = "date-icon date-budget">Feb 01- Dic 12</span>
            </div>
          </div>
          
          <textarea className="mt-4 pl-2 pt-2 text-sm bg-gray-100 rounded-md" placeholder="Describe tu proyecto" id="w3review" name="w3review" rows="7" cols="75"></textarea>
          
          {/* <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Escribe aquí tu avance"
            pl={10}
            minRows={2}
            style={{ width: 550, backgroundColor: '#F3F4F6', borderRadius:5 }}
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => `Emplear herramienta para control de versiones y compartirla con los tripulantes. https://github.com/DevCrewInc/project-launcher/tree/main`,
              )
              .join('\n')}
          </TextareaAutosize> */}
          
        </DialogContent>

        <div>
          <DialogContent>
            <span className="objetivos-dialogo">Objetivos generales y específicos</span>
            <div className="pt-2 mt-3 flex justify-between space-x-4 text-center">
              <input className="w-full h-8 text-sm rounded-sm pl-2 text-m bg-gray-100" placeholder="Objetivo general" type="text" id="fname" name=""></input>
              <button className="add-button bg-green self-center w-6 h-6 rounded-full text-center"><i class="fas fa-plus fa-xs text-center"></i></button> 
            </div>
            <div className="pt-2 mt-2 flex justify-between space-x-4 text-center">
              <input className="w-full h-8 text-sm rounded-sm pl-2 text-m bg-gray-100" placeholder="Objetivo específico" type="text" id="fname" name=""></input>
              <button className="add-button bg-green self-center w-6 h-6 rounded-full text-center"><i class="fas fa-plus fa-xs text-center"></i></button> 
            </div>
            <div className="text-center">
              <button className="w-1/3 h-7 filled-button mt-8">GUARDAR</button>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

