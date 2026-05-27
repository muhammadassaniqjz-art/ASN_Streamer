const express = require('express');
const app = express();
app.use(express.json());

app.post('/verify', (req, res) => {
    res.json({ success: true, message: "Server is working" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));
