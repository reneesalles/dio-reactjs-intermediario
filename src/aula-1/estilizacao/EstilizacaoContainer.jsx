import React from 'react';
import InlineStyle from './inline/InlineStyle';
import InlineStyle2 from './inline/InlineStyle2';
import ClassStyle from './classes/ClassStyle';
import CssInJsStyle from './cssInJs/CssInJsStyle';

const EstilizacaoContainer = () => {
    return (
        <div>
            <InlineStyle />
            <InlineStyle2 />
            <ClassStyle />
            <CssInJsStyle />
        </div>
    );
};

export default EstilizacaoContainer;