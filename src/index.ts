import express from 'express';

const app = express();
const port = 5000;

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

const db = {
	vacancies: [
		{ id: 1, title: 'senior front-end developer' },
		{ id: 2, title: 'middle back-end developer' },
	],
};

app.get('/api/vacancies', (req, res) => {
	if (!req.body.title) return db;

	const filteredTitles = db.vacancies.filter(
		(el) => el.title.indexOf(req.body.title as string) > -1
	);

	// если такая запись есть, то возвращает ее, иначе - 404
	filteredTitles ? res.json(filteredTitles) : res.sendStatus(404);
	res.json(db.vacancies);
});

app.post('/api/vacancies', (req, res) => {
	db.vacancies.push({ id: +new Date(), title: req.body.title });
	res.sendStatus(201);
});

app.delete('/api/vacancies/:id', (req, res) => {
	if (!db.vacancies.find((el) => el.id === +req.params.id)) {
		// если
		res.sendStatus(404);
		return;
	}
	delete db.vacancies[+req.params.id];
	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
