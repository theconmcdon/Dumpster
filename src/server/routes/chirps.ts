import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "./chirpstore";
import * as express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    const chirps = GetChirps()
    let chirpArr: any[] = []
    Object.keys(chirps).map(key => chirpArr.push({id: key, name: chirps[key].name, text: chirps[key].text, day: chirps[key].day, time: chirps[key].time}))
    let x = chirpArr.pop()
    res.send(chirpArr)
})

router.get('/:id?', (req, res) => {
    const id = req.params.id
    if(id) {
        let x = GetChirp(id)
        const y = [x]
        res.json(y)
    }
});


router.post('/', (req, res) => {
    CreateChirp(req.body);
    res.sendStatus(200);
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    UpdateChirp(id, req.body);
    res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    DeleteChirp(id);
    res.sendStatus(200);
});

export default router