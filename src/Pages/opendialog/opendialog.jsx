import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './opendialog.scss';

function opendialog({ dialogclickagree, dialogclickdisagree, dialogstatus }) {
    return (
        <div>
            <div className="opendialog">
                <Dialog
                    // PaperProps={{
                    //     style: {
                    //         boxShadow: 'none',
                    //         background: 'red',
                    //     },
                    // }}
                    open={dialogstatus}
                    onClose={dialogclickdisagree}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Confirm delete
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Do you really want to delete these records?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={dialogclickdisagree}>Disagree</Button>
                        <Button onClick={dialogclickagree} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default opendialog;
