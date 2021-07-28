import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/:id?', async (req, res) => { // /api/chirps/3
  const id: string = req.params.id;

  if (id) {
    const chirp = await db.Chirps.one(id);
    res.json(chirp[0]);
  } else {
    const chirps = await db.Chirps.all();
    res.json(chirps);
  }
});


router.post('/', async (req, res) => {
  const chirpObj: chirp = req.body;

  try {
    const newUser = await db.Users.post(chirpObj.name, chirpObj.email);

    await db.Chirps.post(newUser.insertId, chirpObj.text, chirpObj.day, chirpObj.time);

    res.send("success");
  } catch (error) {
    console.log(error);
  }
});

//mandatory id param to tell the server which chirp to update
router.put('/:id', async (req, res) => {
  const id: string = req.params.id;
  const newText: string = req.body.text;

  try {
    await db.Chirps.put(id, newText);

    res.send("edited successfully");
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  const id: string = req.params.id;

  try {
    await db.Chirps.destroy(id);

    res.send("deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

interface chirp {
  id?: string,
  name: string,
  email: string,
  text: string,
  day: string,
  time: string
}

export default router