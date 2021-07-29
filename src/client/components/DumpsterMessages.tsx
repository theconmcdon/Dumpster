import React, { useState, useEffect } from 'react'
import { nameProps } from '../utils/types';


const DumpsterMessages: React.FC<nameProps> = (props) => {




    return (
        <div>
            <div className='pb-1'>
                <div className='row mb-3 pb-2 d-flex flex-row bg-danger bg-gradient text-white'>
                    <div className='col-1 display-4 text-left'>
                        <span className='pl-5 ml-2'>🗑️</span>
                    </div>
                    <div className='col-11' >
                        <h1 className='pl-5 display-4'>Messages</h1>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default DumpsterMessages;