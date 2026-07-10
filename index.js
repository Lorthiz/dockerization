const express = require('express');

const app = express();
const PORT = process?.env?.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/env', (req, res) => {
    res.send(`
  <html>
    <body>
      <pre>${JSON.stringify(process.env, null, 2)}</pre>
    </body>
  </html>
`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});