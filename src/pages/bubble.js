import { PromptSummaryFilterSensitiveLog } from '@aws-sdk/client-connect';
import React, { useState } from 'react';
import '../style/bubble.css';
import compiledData from '../static/compiled.json';


const Bubble = ({title, type}) => {
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const openWindow = () => {
        setIsWindowOpen(true);
    };

    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    const tableStyle = {
        margin: 'auto',
        borderCollapse: 'collapse',
        width: '80%', // Adjust as needed
      };
      
      const cellStyle = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'left',
      };
      

    function renderTable(data) {
        const filteredData = data.filter(item => item.ServiceType === type);
        console.log(filteredData);

        return (
            <table style={tableStyle}>
            <thead>
                <tr>
                <th style={cellStyle}>Provider</th>
                <th style={cellStyle}>Resource</th>
                <th style={cellStyle}>Address</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item, index) => (
                <tr key={index}>
                    <td style={cellStyle}>{item.Provider}</td>
                    <td style={cellStyle}>{item.ResourceName}</td>
                    <td style={cellStyle}>{`${item.Street}, ${item.City}, ${item.State} ${item.ZipCode}`}</td>
                    
                </tr>
                ))}
            </tbody>
            </table>
        );
    }


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
                        backgroundColor: 'white',
                        border: '1px solid black',
                        zIndex: 1000,
                        overflow: 'auto'
                    }}
                >
                    <button onClick={closeWindow}>Close Window</button>
                    {renderTable(compiledData)}
                </div>
            )}
        </div>
    );
};

export default Bubble;