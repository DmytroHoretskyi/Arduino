import React, {useEffect} from "react"
import {Box, IconButton, List, ListItem, ListItemText, Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import gameApiService from "../redux/services/userService";

function CommentIcon() {
    return null;
}

function ScorePage(){
    const users = useSelector(
        (state) => state.gameReducer.users
    )
    const dispatch = useDispatch();

    useEffect(() => {
        gameApiService.getUsers(dispatch)
    }, [dispatch]);
    return(
        <Box>
            <Paper elevation={6} sx={{width: "90%", m: "auto", mt: 5}}>
                <List sx={{ width: '100%', maxWidth: 1920, bgcolor: 'background.paper' }}>
                    {users?.sort((a, b) => b.id - a.id).map((user) => (
                        <ListItem
                            sx={{borderBottom: "1px solid",}}
                            key={user}
                            disableGutters
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    <CommentIcon />
                                </IconButton>
                            }
                        >
                            <Box sx={{display: "flex", flexDirection: "raw"}}>
                            <ListItemText sx={{ml: 2}} primary={`${user.name}`} />
                                {
                                    user.Scores.length ? <ListItemText primary={`: score is ${user?.Scores[user.Scores.length - 1]?.score}`} /> :
                                        <ListItemText primary={`: score is 0`} />
                                }

                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    )
}
export default ScorePage;
