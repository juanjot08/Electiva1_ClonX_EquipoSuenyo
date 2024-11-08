import React, { useState } from 'react';
import './ToolTips.css'; // Make sure to create and style this CSS file

const ToolTips = ({ children, content, customClass = "usertag-tooltip" }) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <div className={`tooltip-container`} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            {visible && <div className={`tooltip-content ${customClass}`}>{content}</div>}
        </div>
    );
};

export default ToolTips;

