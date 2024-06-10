import React from 'react';

const ItemListContainerComponent = ({ greeting }) => {
    return (
        <div className="greeting-container">
            {greeting}
        </div>
    );
};

export default ItemListContainerComponent;