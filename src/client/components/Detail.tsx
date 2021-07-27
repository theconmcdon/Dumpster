import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useState, useEffect } from 'react';


export interface DetailProps extends RouteComponentProps<{ id: string; }> { }

const Detail = ({history, match: { params: { id }}}) => {

    const imgBuddy = {
        height: '70px',
        width: '70px',
        borderRadius: '10px'
    }

    const chirpBuddy = {
        borderRadius: '10px'
    }

    const [array, setArray] = useState([])

    const getPosts = async () => {
        try {
            const res = await fetch(`/api/chirps/${id}`);
            let post = await res.json();
            setArray(post);
            console.log(post)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [id]);


    return(
        <section>
            <article className="col-md-12"> 
                <div className="card m-1 p-1 shadow">
                {array.map(val => {
                    return (
                        
                            <blockquote key={id} style={chirpBuddy} className="blockquote bg-white border p-5">
                                <div className='row'>
                                    <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                                    <div className='col-8'>
                                        <div className='pl-5 lead'>(nickname)</div>
                                        <p  className="pl-5 mb-0">{val.text}</p>
                                        <footer className="ml-5 blockquote-footer">@username on <cite title="Source Title">{val.day} at {val.time}</cite></footer>
                                    </div>
                                </div>
                            </blockquote>
                        
                    )
                })}
                    <div className="card-body text-center">
                        <h4 className="lead card-title">refresh page to see server result otherwise this is broken</h4>
                        <div className="d-flex justify-content-center align-items-center mb-2">
                            <p className="card-text m-3"></p>
                            
                        </div>
                        
                        <button onClick={() => history.goBack()} className='btn btn-danger mx-auto'>go back</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Detail;

    