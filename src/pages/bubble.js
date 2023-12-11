import { PromptSummaryFilterSensitiveLog } from '@aws-sdk/client-connect';
import React, { useState } from 'react';
import '../style/bubble.css';

const Bubble = ({title}) => {
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const openWindow = () => {
        setIsWindowOpen(true);
    };

    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    return (
        <div>
            <div onClick={openWindow} className='bubble'>
                <p style={{width: '80%'}}>{title}</p>
            </div>

            {isWindowOpen && (
                <div 
                    style={{
                        position: 'fixed',
                        top: '5%', 
                        left: '5%',
                        width: '90%', 
                        height: '90%',
                        backgroundColor: 'red',
                        border: '1px solid black',
                        zIndex: 1000,
                        overflow: 'auto'
                    }}
                >
                    <button onClick={closeWindow}>Close Window</button>
                    {/* Content of the window goes here */}
                </div>
            )}
        </div>
    );
};

export default Bubble;