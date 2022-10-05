import express from 'express';

const app = express();
const port = 5000;

app.get('/api/gettasks', (req, res) => {
	res.json({ sth: 'sth' });
});

app.post('/api/createtask', (req, res) => {
	res.json('successfully created');
});

app.post('/api/deletetask', (req, res) => {
	res.json('successfully deleted');
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
