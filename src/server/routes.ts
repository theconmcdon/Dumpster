import * as express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendStatus(200)
});

export default router;