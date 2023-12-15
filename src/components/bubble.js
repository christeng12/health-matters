import { PromptSummaryFilterSensitiveLog } from '@aws-sdk/client-connect';
import React, { useState } from 'react';
import '../style/bubble.css';
import compiledData from '../static/compiled.json';
import ProviderCard from './providerCard.js';
import sample_logo from '../static/logos/sample.png';
import united from '../static/logos/united.png';
import aetna from '../static/logos/aetna.png';
import essence from '../static/logos/essence.png';
import humana from '../static/logos/humana.png';
import anthem from '../static/logos/anthem.png';
import back from '../static/back.png';


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

    const popupContainerStyle = {
        position: 'fixed',
        top: '7.5%', 
        left: '15%',
        width: '70%', 
        height: '85%',
        backgroundColor: 'white',
        border: '1px solid black',
        zIndex: 1000,
        overflow: 'auto',
        display: 'flex', // Use flexbox to center the grid
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center', // Center children horizontally
        justifyContent: 'flex-start', // Align children to the top
    };

    const popupHeaderStyle = {
        display: 'flex',
        justifyContent: 'space-between', // Distributes space between items
        alignItems: 'center', // Align items vertically in the center
        width: '100%',
        backgroundColor: '#012c8c',
        opacity: '50%',
        height: '50px',
        padding: '0 20px', // Add some padding on both sides
    };

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,0fr)', // Creates three columns
        gridGap: '50px', // Adjust the gap between the cards as needed
        paddingTop: '50px'
    };

    const titleStyle = {
        color: 'white', // Ensure the text color is visible
        opactiy: '100%',
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        flexGrow: 1, // Allows the title to take up available space
        // Additional styling for the title can go here
    };

    return (
        <div>
            <div onClick={openWindow} className='bubble'>
                <p style={{width: '80%'}}>{title}</p>
            </div>

            {isWindowOpen && (
                <div style={popupContainerStyle}>
                    <div style={popupHeaderStyle}>
                        <img onClick={closeWindow} src={back} style={{height: '70%', paddingLeft: '5px'}}></img>
                        <span style={titleStyle}>{title}</span>
                        <div style={{ width: '80px' }} /> {/* Placeholder to balance the layout */}
                    </div>
                    {<div style={gridContainerStyle}>
                        <ProviderCard imageUrl={united} provider="United Healthcare" service={type} />
                        <ProviderCard imageUrl={aetna} provider="Aetna" service={type}/>
                        <ProviderCard imageUrl={essence} provider="Essence" service={type}/>
                        <ProviderCard imageUrl={humana} provider="Humana" service={type}/>
                        <ProviderCard imageUrl={anthem} provider="Anthem" service={type}/>
                    </div>}
                </div>
            )}
        </div>
    );
};

export default Bubble;