import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { prePost } from './Albums'

export interface DetailProps extends RouteComponentProps<{ id: string; }> { }

const Detail = ({history, match: { params: { id }}}) => {

    const [album, setAlbum] = useState<prePost>({
        text: null,
        day: null,
        time: null,
        id: null
    });

    const getAlbum = async () => {
        let res = await fetch(`/api/chirps/${id}`);
        let mike = await res.json();
        setAlbum(mike);
    }

    useEffect(() => { getAlbum(); }, [id])

    return(
        <section>
            <article className="col-md-12"> 
                <div className="card m-1 p-1 shadow">
                    
                    <div className="card-body text-center">
                        <h4 className="lead card-title">refresh page to see server result otherwise this is broken</h4>
                        <div className="d-flex justify-content-center align-items-center mb-2">
                            <p className="card-text m-3">{album.day} {album.time}</p>
                            
                        </div>
                        
                        <button onClick={() => history.goBack()} className='btn btn-danger mx-auto'>go back</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Detail;

    