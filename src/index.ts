import { getSystemInformation } from './system_information';
import express from 'express';
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());
app.get("/api/v1/sysinfo", async (req, res) => {
    const sysinfo = await getSystemInformation();
    res.json(sysinfo);
});
app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
