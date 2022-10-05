"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
//# sourceMappingURL=index.js.map