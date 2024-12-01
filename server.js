// server.js  
const express = require('express');  
const cors = require('cors');  
const os = require('os');  

const app = express();  
const PORT = process.env.PORT || 5000;  

app.use(cors());  

app.get('/api/user', (req, res) => {  
  const userInfo = os.userInfo();  
  res.json(userInfo);  
});  

app.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);  
});