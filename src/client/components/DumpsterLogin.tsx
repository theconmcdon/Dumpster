import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import DumpsterRouter from './DumpsterRouter';


const DumpsterLogin = () => {

    const [username, setUsername] = useState('');
    const [mainPage, setMainPage] = useState(false);
    const [availability, setAvailability] = useState('');
    const [extra, setExtra] = useState('')
    const [nickName, setnickName] = useState('')
    const [at, setAt] = useState('')
    const [logEffect, setlogEffect] = useState(false)

    const buttonBuddy = {
        width: '100%'
    }

    useEffect(() => {
        if (nickName.length > 20) {
            setExtra(`Nickname contains ${nickName.length} characters but must be 20 characters or less!`)
        } else {
            setExtra('Nickname is within 20 characters!')
        }
    }, [nickName]);

    useEffect(() => {
        if (username.length < 1) {
            setAvailability('')
            setAt('')
        } else if (username.length > 15) {
            setAvailability(`contains ${username.length} characters!`)
            setAt('@')
            setExtra('Username must be 15 characters or less!')
        } else {
            setAvailability('is available!')
            setAt('@')
            setExtra('Username is within 15 characters!')
        }
    }, [username]);

    useEffect(() => {
        if (nickName.length === 0) {
            setExtra('Nickname must include at least 1 character.')
        } else if (username.length > 15) {
            setExtra('Shorter username required.')
        } else if (username.length === 0) {
            setExtra('Username must include at least 1 character.')
        } else if (nickName.length > 20) {
            setExtra('Shorter nickname required.')
        } else {

        };
    }, [logEffect]);

    const enterName = (e) => {
        setUsername(e.target.value)
    }

    const clickLogin = () => {
        setlogEffect(false)
        if (nickName.length === 0) {
            setlogEffect(true)
        } else if (username.length > 15) {
            setlogEffect(true)
        } else if (username.length === 0) {
            setlogEffect(true)
        } else if (nickName.length > 20) {
            setlogEffect(true)
        } else {
            setMainPage(true)
        };
    };

    if (mainPage === false) {
        return (
            <div>
                <div className='row justify-content-center d-flex flex-row'>
                    <h1 className='display-1 text-center text-danger pt-5 mt-5'>dive in</h1>
                </div>
                <div className='row d-flex flex-row pt-5'></div>
                <div className='row d-flex flex-row justify-content-center'>
                    <div className="form-row align-items-center">
                        <div className="col-sm-4 my-1">
                            <label className="sr-only" >Name</label>
                            <input type="text" className="form-control" id="inlineFormInputName" placeholder="Nickname" value={nickName} onChange={(e) => setnickName(e.target.value)} />
                        </div>
                        <div className="col-sm-4 my-1">
                            <label className="sr-only" >Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" value={username} onChange={e => enterName(e)} />
                            </div>
                        </div>
                        <div  className="col-4 my-1">
                            <input style={buttonBuddy} type="submit" className="btn btn-danger" onClick={() => clickLogin()} value='Join' />
                        </div>
                    </div>
                </div>
                <div className='mt-3 row justify-content-center d-flex flew-row'>
                    <p id='avail' className=''>{at}{username} {availability}</p>
                </div>
                <div className='row justify-content-center d-flex flew-row'>
                    <p id='help' className=''>{extra}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <>
                <DumpsterRouter username={username} nickName={nickName}/>
            </>
        )
    };
};

export default DumpsterLogin;