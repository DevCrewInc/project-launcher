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
      <Button onClick={handleClickOpen('paper')}>Abrir Modal</Button>
      
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
            <h1 className="text-sm text-gray-300 font-normal">Id Avance</h1>
            <input className="w-64 rounded-sm" placeholder="Titulo de tu avance" type="text" id="fname" name=""></input><i class="far fa-check-circle text-gray-400 pl-3"></i> 
            {/* <div sx={{ display: 'inline-flex', justifyContent: 'space-between'}}> */}
            <div className="flex justify-between">
              <h3 className="text-sm font-normal">por Juan Camilo Pérez</h3>
              <div className="flex space-x-4">
                <h3 className="avance_Date text-sm font-normal">Octubre 27</h3>
                <h3 className="avance_Date text-sm font-normal">8:00 a.m.</h3>
              </div>
            </div>
          </Box>
    
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <textarea className="pl-2 pt-2 text-sm bg-gray-100 rounded-md" placeholder="Descripción de tu avance" id="w3review" name="w3review" rows="4" cols="75"></textarea>
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
          <ThemeProvider theme={theme}>
            <Box sx={{display:'flex' , justifyContent: 'end'}}>
              <Button 
              variant="contained" 
              bgcolor='primary'
              >Guardar</Button>
            </Box>  
          </ThemeProvider>
          
        </DialogContent>
        <div>
        <DialogContent>
          <span className="observaciones font-medium text-base text-gray-300">Observaciones</span>
          <div className="pt-2 flex justify-between space-x-4">
            <Avatar src=""></Avatar>
            <textarea className="pl-2 pt-2 text-sm rounded-md bg-gray-100" placeholder="Escribe un comentario" id="w3review" name="w3review" rows="2" cols="67"></textarea>
            {/* <TextareaAutosize minRows={2} style={{ width: 550, backgroundColor: '#F3F4F6', borderRadius:5, pl:8}} label="" focused variant="filled" InputProps={{ disableUnderline: true }}/> */}
            
          </div>
        </DialogContent>
            
            {/* <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button> */}
          
        </div>
      </Dialog>
    </div>
  );
}
