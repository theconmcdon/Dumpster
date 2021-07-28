import { Query } from './index';

const all = async () => Query('SELECT * FROM chirps');
const one = async (id: any) => Query('Select * from chirps WHERE id = ?', [id])

const post = async (text: any) => Query('insert into chirps (text) values', [text])

export default {
    all,
    one,
    post
}