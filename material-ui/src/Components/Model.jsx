import { Box, Button, Link, Modal, Typography } from "@mui/material"
import { useState } from "react"

const Model = () => {
    const [open,setOpen]=useState(false)
  return (
    <div>
        <Button onClick={()=>setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={()=>setOpen(false)}>
            <Box position={"absolute"} top={"50%"} left={"50%"} >
            <Typography variant="h6">This is a Modal</Typography>
            <Button variant="contained" onClick={()=>setOpen(false)}>Close</Button>

            </Box>

        </Modal>
        
        <Link  variant="h6" color="primary" href="#" underline="hover">Link</Link>  
    </div>
  )
}
export default Model