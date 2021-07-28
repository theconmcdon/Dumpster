import * as express from 'express';

import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World')
});

router.get('/api/chirps', async (req, res) => {
    try {
        res.json(await db.Chirps.all());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/api/chirps/:id', async (req, res) => {
    console.log('got')
    try {
        res.json((await db.Chirps.one(req.params.id)));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/api/chirps', async (req, res) => {
    try {
        res.json((await db.Chirps.post(req.params.text)));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;