import ora from 'ora';
import app from './app';

app.listen(process.env.PORT || 3333, () => {
  ora('Server running...').succeed();
});
