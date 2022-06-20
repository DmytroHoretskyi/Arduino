import React from "react"
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function User(){
    const navigate = useNavigate();
    const user = useSelector(
        (state) => state.gameReducer.current
    )
    const handleScore = () => {
        navigate("/score")
    }
    console.log(user)
    return(
        <Box>
            <Typography sx={{mt: 2, textAlign: "center"}} variant="h3">
                {`Hello ${user.name}`}
            </Typography>
            <Paper sx={{width: "50%", m: "auto", mt: 15, display: "flex",  flexDirection: "column"}} elevation='5'>
                <Typography sx={{m: "auto", mt: 2}}>
                    Your best:
                </Typography>
                <Typography sx={{m: "auto", mt: 2, mb: 2}}>
                    Sorry you have`n any score yet
                </Typography>
            </Paper>
            <Button sx={{ml: "25%", mt: 2}} onClick={handleScore} variant="outlined">SCORE</Button>
        </Box>
    )
}
export default User;
