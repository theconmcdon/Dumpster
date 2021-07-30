export interface IChirp {
    id?: string,
    name: string,
    text: string,
    time: string,
    day: string,
    email: string,
    edit: string
}

export interface nameProps {
    username: string,
    nickName: string
}

export interface editProps {
    text: string,
    id: string,
    username: string,
    nickName: string,
    pageID: string
}

export interface prePost {
    text: string,
    name: string,
    email: string,
    day: string,
    time: string

}

export interface editPost {
    text: string,
    name: string,
    email: string,
    edit: string

}