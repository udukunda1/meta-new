import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join('public')));

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });

app.listen(process.env.PORT || 5000)