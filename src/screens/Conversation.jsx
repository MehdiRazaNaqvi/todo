import { useEffect, useState } from 'react';
import '../style/login.css';
import '../style/chat.css';

import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import SendIcon from '@mui/icons-material/Send';
import React from "react"
import { createTheme } from '@mui/material/styles';
import Navbar from '../components/navbar'
import { useDispatch, useSelector } from 'react-redux';

import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Card } from '@mui/material';

import axios from "axios"
import { addToChat, setChat } from '../store/counterSlice';
import { useRef } from 'react';
import { IconButton, Badge, Avatar } from '@mui/material';
import Logo from "../asset/logo.png"
import { Alert, Snackbar, InputAdornment, TextField, Backdrop, CircularProgress } from '@mui/material';
import Stepper from "../components/stepper"
import { addTodo } from '../store/counterSlice';






export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8e24aa',

    },
    secondary: {
      main: '#8e24aa',

    },

  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: '#8e24aa',
        '&:hover': {
          backgroundColor: '#8e24aa',
        },
        '&.Mui-focused': {
          backgroundColor: '#8e24aa',
        },
      },
    },
  },



});





function App() {

  const divRef = useRef(null);

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isDarkTheme = theme.palette.mode === 'dark';




  const [loading, setLoading] = useState(false)
  const [arhamic, setArhamic] = useState(false)
  const [dummyText, setDummyText] = useState(false)
  const [message, setMessage] = useState("")



  const state = useSelector(state => state?.counter)






  useEffect(() => {


    // !state?.currentUser?.uid ? navigate("/todo/signin") : fetch_chat()



  }, [])




  const [showalert, setShowAlert] = useState({ text: "", open: false, severity: "error" })




  return (


    <div className={state?.darkMode ? 'main_parent_div main_parent_div_dark' : 'main_parent_div'}>




      <Snackbar open={showalert.open} autoHideDuration={5000} onClose={() => setShowAlert(false)} >
        <Alert severity={showalert.severity} sx={{ width: '100%' }} onClose={() => setShowAlert(false)}>
          {`${showalert.text}`}
        </Alert>
      </Snackbar>





      <Navbar setArhamic={setArhamic} arhamic={arhamic} />

      <span ref={divRef} className="chat_screen_middle">


        <PerfectScrollbar className="chat_area">






          {state?.steps?.length > 0 && <Stepper state={state} />}





        </PerfectScrollbar>




        <TextField
          required
          value={message}
          disabled={loading}

          InputProps={{
            endAdornment: (
              <InputAdornment onClick={() => dispatch(addTodo(message))} position="end">
                <SendIcon sx={{ fontSize: "2.3rem" }} />
              </InputAdornment>
            ),
            sx: {
              '& input': {
                color: isDarkTheme ? '#fff' : 'inherit',
              },
              '& label': {
                color: isDarkTheme ? '#fff' : 'inherit',
              },
              '& .MuiFilledInput-underline::before': {
                borderBottomColor: isDarkTheme ? '#fff' : 'rgba(0, 0, 0, 0.42)',
              },
              '& .MuiFilledInput-underline::after': {
                borderBottomColor: isDarkTheme ? '#fff' : '#1976d2',
              },
            },
          }}
          size='large'
          id="input-with-icon-adornment"
          fullWidth
          onChange={(e) => setMessage(e.target.value)}
          label="Send a message" type="text" variant="outlined" />


      </span>






    </div >


  );
}

export default App;

