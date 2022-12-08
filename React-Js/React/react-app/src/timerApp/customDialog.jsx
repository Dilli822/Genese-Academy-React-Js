
import React, {useState, useEffect} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";

export default function CustomDialog(props){

    const [open, setOpen] = useState(false);

    function handleClose() {
        // setOpen(false)
        props.onCloseDialog();
    }

    useEffect(()=> {

        // openDialog action will be triggered and useeffect will watch the passed parameter value
        setOpen(props.openDialog)
    }, [props.openDialog])

    return (
        <div>
            <h3> This is Custom Dialogue! </h3>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
              >
                  <DialogTitle id="responsive-dialog-title">
                      Alert !!! Time's Up!
                  </DialogTitle>
                  <DialogContent>
                      <p> Timer Stopped! </p>
                      {props.DialogContent}
                  </DialogContent>
              </Dialog>
        </div>
    )
}