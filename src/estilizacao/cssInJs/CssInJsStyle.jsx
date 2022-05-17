import React from 'react';
import styledComponents from 'styled-components';

const DivStyle = styledComponents.div`
    color: blue;
    background: url('${props => props.imageUrl}');
`;

const CssInJsStyle = () => {
    const url = 'logo192.png';
    return <DivStyle imageUrl={url}>Css In Js Style</DivStyle>
};

export default CssInJsStyle;