import ora from 'ora';
import app from './app';

ora('Server running...').start();

app.listen(3333);
