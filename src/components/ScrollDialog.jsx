import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';
import { borders } from '@mui/system';




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
      <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Dialog
        className= "bg-black bg-opacity-50"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      > 
        <DialogTitle id="scroll-dialog-title">
          <h1 className="text-base text-gray-300">Id Avance</h1>
          <h2>Creación del repositorio <i class="far fa-check-circle"></i></h2> 
          {/* <div sx={{ display: 'inline-flex', justifyContent: 'space-between'}}> */}
          <div className="flex justify-between">
            <h3 className="text-sm font-normal">por Juan Camilo Pérez</h3>
            <div className="flex space-x-4">
              <h3 className="avance_Date text-sm font-normal">Octubre 27</h3>
              <h3 className="avance_Date text-sm font-normal">8:00 a.m.</h3>
            </div>
            
          </div>
          

        </DialogTitle>
        <DialogContent className="text-red-500 " dividers={scroll === 'paper'}>
          <DialogContentText
            className="py-10"
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => `Emplear herramienta para control de versiones y compartirla con los tripulantes.
                https://github.com/DevCrewInc/project-launcher/tree/main`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <div>
        <DialogContent>
          <span className="observaciones font-medium text-base text-gray-300">Observaciones</span>
          <div className="pt-2 flex justify-between space-x-4">
            <Avatar sx={{ bgcolor: deepOrange[500] }} sx={{ width: 55, height: 55 }}>N</Avatar>
          
            <TextField className="w-full" label="" sx={{ borderRadius: '50%' }} focused variant="filled" InputProps={{ disableUnderline: true }}/>
            
          </div>
        </DialogContent>
            
            {/* <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button> */}
          
        </div>
      </Dialog>
    </div>
  );
}
