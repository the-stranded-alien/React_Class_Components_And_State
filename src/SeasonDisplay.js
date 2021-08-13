import './SeasonDisplay.css';
import React from 'react';

// Config Object
const seasonConfig = {
    summer: {
        text: "Lets Hit The Beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, It is Cold!",
        iconName: 'snowflake'
    }
};

// Helper Function
const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

// Component at Bottom
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());  
    // const text = season === 'winter' ? 'Burr, it is chilly!' : 'Lets hit the beach!';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    const { text, iconName } = seasonConfig[season]; // {text, iconName}
    return (
        <div className = {`season-display ${season}`}>
            <i className = {`icon-left massive ${iconName} icon`} />
            <h1> {text} </h1>
            <i className = {`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;