
import Login from "./screens/Login"
import ForgetPassword from "./screens/Forget"
import Signup from "./screens/Signup"
import Contact from "./screens/Contact"
import Authenticate from "./screens/authenticate"
import Conversation from "./screens/Conversation"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './screens/Conversation.jsx';
import { useSelector } from "react-redux";






const App = () => {

    const darkMode = useSelector(state => state.counter?.darkMode)



    return (

        <Router>

            <Routes>
                <Route path="/todo" element={<Authenticate />} />
                <Route path="/todo/signin" element={<ThemeProvider theme={darkMode && darkTheme} > <Login /> </ThemeProvider>} />
                <Route path="/todo/contactUs" element={<ThemeProvider theme={darkMode && darkTheme} > <Contact /> </ThemeProvider>} />
                <Route path="/todo/forgetPassword" element={<ThemeProvider theme={darkMode && darkTheme} > <ForgetPassword /> </ThemeProvider>} />
                <Route path="/todo/signup" element={<ThemeProvider theme={darkMode && darkTheme} > <Signup /> </ThemeProvider>} />
                <Route path="/todo/conversation" element={<ThemeProvider theme={darkMode && darkTheme} > <Conversation /> </ThemeProvider>} />
                <Route path="/*" element={<ThemeProvider theme={darkMode && darkTheme} > <Login /> </ThemeProvider>} />

            </Routes>
        </Router>
    )


}



export default App