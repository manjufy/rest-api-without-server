import { Wayne } from '@jcubic/wayne';
const app = new Wayne();

app.get('/api/hello', (req, res) => {
    return res.json('Hello, From the other side');
});