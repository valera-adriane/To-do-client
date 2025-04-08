import axios from "axios";
import { useState } from "react";
import { usenNavigate } from "react -router_dom"
import dotenv from 'dotenv'
dotenv.config();

function App() {
  const navigate = usenNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState9('');

  //conditional rendering
  const [showError, setShowError] = useState(false);

  const handlelogin = async () => {
    await axios.post(& {
      process.env.ENDPOINT_URL'}/check_user,{username, password})
      .then(response) => {
    if (response.data.exit) {
      console.log("login successful");
      navigate('/todo')
    } else { 
      setShowError(true);
    }
  });
