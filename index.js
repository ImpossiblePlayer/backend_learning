express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('%database%');
});

app.post('/api/login', (req, res) => {
	res.send('login info got');
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
