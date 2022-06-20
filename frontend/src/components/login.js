import React, {useState, useEffect} from "react"
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import gameApiService from "../redux/services/userService";
import {useDispatch} from "react-redux";

function Login(){
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUserName(event.target.value)
    }
    const handleLogin = async () => {
        await gameApiService.loginUser(dispatch, {name: userName})
        navigate("/user")
    }
    const handleScore = () => {
        navigate("/score")
    }
    useEffect(() => {
        gameApiService.getUsers(dispatch)
    }, [dispatch]);

    return(
        <Box>
            <Typography sx={{mt: 2, textAlign: "center"}} variant="h3">
                Wrack a MOLE!!!!
            </Typography>
            <Paper sx={{width: "50%", m: "auto", mt: 15, display: "flex",  flexDirection: "column"}} elevation='5'>
            <Typography sx={{m: "auto", mt: 2}}>
            Please enter your name:
            </Typography>
                <TextField
                    sx={{width: "90%", m: "auto", mb: 4}}
                    id="standard-basic"
                    label="Your nickname"
                    variant="standard"
                onChange={handleChange}
                />
                <Button sx={{m: "auto", mt: 2, mb: 2, width: "25%"}} onClick={handleLogin} variant="outlined">Lets Go!</Button>
            </Paper>
            <Button sx={{ml: "25%", mt: 2}} onClick={handleScore} variant="outlined">SCORE</Button>
        </Box>
    )
}
export default Login;
