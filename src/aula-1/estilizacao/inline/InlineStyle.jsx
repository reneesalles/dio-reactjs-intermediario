import React from 'react';

const divStyle = {
    color: 'blue',
    backgroundImage: 'url(logo192.png)',
};
const InlineStyle = () => {
    return <div style={divStyle}>Inline Style (com variavel)</div>;
};

export default InlineStyle;