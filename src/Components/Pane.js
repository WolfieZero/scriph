// =============================================================================
// Component >> Pane
// =============================================================================

// Import
// =============================================================================

import React from 'react';

// Render
// =============================================================================

export default ({ children, className }) => (
    <div className={'pane ' + className}>
        {children}
    </div>
);