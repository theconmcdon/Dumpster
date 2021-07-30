import { Query } from "./index";

const all = async () => Query(`
    select chirps.id, chirps.text, chirps.location, chirps.day, chirps.time, chirps.edit, users.name, users.email
    from chirps
    join users on chirps.userid = users.id;
`);
const one = async (id: any) => Query(`
    select chirps.text, chirps.location, chirps.day, chirps.time, chirps.edit, users.name, users.email
    from chirps
    join users on chirps.userid = users.id
    where chirps.id = ?;
`, [id]);

const post = async (userid: string, text: string, day: string, time: string) => Query(`
    insert into chirps (userid, text, day, time) values (?, ?, ?, ?)
`, [userid, text, day, time]);

const put = async (id: string, newText: string, edit: string) => Query(`
    UPDATE chirps
    SET text = ?,edit = ?
    WHERE chirps.id = ?;
`, [newText, edit, id]);

const destroy = async (id: string) => Query(`
    DELETE FROM chirps WHERE chirps.id = ?;
`, [id]);

export default {
    all,
    one,
    post,
    put,
    destroy
}
