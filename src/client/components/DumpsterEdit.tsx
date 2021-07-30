import React, { useState, useEffect } from 'react'
import { editProps } from '../utils/types';
import Modal from 'react-bootstrap/Modal'
import { editPost } from '../utils/types'
import { useHistory } from 'react-router';


const DumpsterEdit: React.FC<editProps> = (props) => {


    const history = useHistory();

    
    

    



    const fontBuddy = {
        fontSize: '16px',
        cursor: 'pointer'
    }

    const hoverBuddy = {
        cursor: 'pointer'
    }

    const textBuddy = {
        height: '100%',
        width: '100%',
        padding: '0px',
        fontSize: '20px'
    }

    const sideBuddy = {
        transform: 'translate(4px)'
    }

    const [reload, setReload] = useState<boolean>()
    const [show, setShow] = useState(false);
    const [text, setText] = useState(props.text);
    const [id, setID] = useState(props.id);

    const [confirm, setConfirm] = useState(false)
    const [test, setTest] = useState<editPost>()
    const [update, setUpdate] = useState<string>(props.text)
    const [array2, setArray2] = useState([])
    const [array, setArray] = useState([])

    

    const handleClose = () => {
        setShow(false);
        
    }
    const handleShow = () => {
        setShow(true);
    }
    const hoverEnterButton = (id) => {
        let postBtn = document.querySelector(`#${id}`)
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveButton = (id) => {
        let postBtn = document.querySelector(`#${id}`)
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterPost = () => {
        let postBtn = document.querySelector('#btnPost2')
        postBtn.classList.add('text-danger')
        
    }

    const hoverLeavePost = () => {
        let postBtn = document.querySelector('#btnPost2')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterImg = () => {
        let postBtn = document.querySelector('#btnImg2')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveImg = () => {
        let postBtn = document.querySelector('#btnImg2')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterLink = () => {
        let postBtn = document.querySelector('#btnLink2')
        postBtn.classList.add('text-danger')
        
    }

    const hoverLeaveLink = () => {
        let postBtn = document.querySelector('#btnLink2')
        postBtn.classList.remove('text-danger')
    }

    const newPost = async () => {
        let editPost = {
            text: update,
            name: props.username,
            email: props.nickName,
            edit: '*'
        };
        setArray([...array, editPost]);
        setTest(editPost)
        setConfirm(true)
    }

    useEffect(() => {
        sendPost(props.pageID);
    }, [test])


    const sendPost = async (id) => {
        if (confirm) {
            let res = await fetch(`/dumpster/feed/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(test)
            });
            setConfirm(false);
            if (res.ok) {
                handleClose();
            } else {
                console.log('uh oh');
            }
        }
    }

    return (
        <div>


            <div id={props.id} style={fontBuddy} onMouseEnter={() => hoverEnterButton(props.id)} onMouseLeave={() => hoverLeaveButton(props.id)} onClick={() => handleShow()} className='ml-5 font-weight-lighter col-1'>edit</div>

            <Modal
                text={text}
                show={show}
                onHide={() => handleClose()}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                
            >
                <Modal.Header style={{ marginRight: '0.001em', marginTop: '0.001em'}} className='bg-danger'>
                    <Modal.Title style={{ fontSize: '25px'}} className='lead text-white' id="contained-modal-title-vcenter">
                        edit post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row d-flex'>
                        <div className='col-2'>
                            <div className=''>
                                <div className='border-right mt-3 lead border-secondary text-right pr-2' id='btnPost2' onClick={() => newPost()} style={hoverBuddy} onMouseEnter={() => hoverEnterPost()} onMouseLeave={() => hoverLeavePost()}>post</div>
                            </div>
                            <div>
                                <div className='border-right lead border-secondary text-right pr-2' id='btnImg2' style={hoverBuddy} onMouseEnter={() => hoverEnterImg()} onMouseLeave={() => hoverLeaveImg()}>add image</div>
                            </div>
                            <div>
                                <div className='border-right mb-3 lead border-secondary text-right pr-2' id='btnLink2' style={hoverBuddy} onMouseEnter={() => hoverEnterLink()} onMouseLeave={() => hoverLeaveLink()}>add link</div>
                            </div>
                        </div>
                        <div className='col-9'>

                            <textarea value={update} style={textBuddy} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setUpdate(e.target.value)} className="p-2" rows={2}></textarea>
                        </div>
                        <div className='col-1'></div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                   
                </Modal.Footer>
            </Modal>
        </div>
    );


};

export default DumpsterEdit;