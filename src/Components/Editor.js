// =============================================================================
// Components >> Editor
// =============================================================================

// Imports
// =============================================================================

import React from 'react';
import CodeMirror from '@skidding/react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/markdown/markdown';

// Component
// =============================================================================

export default class extends React.PureComponent {

    options = {
        mode: 'markdown',
        theme: 'material',
    }

    handleChange = (e) => {
        this.props.onChange(e);
    }

    render() {
        return (
            <CodeMirror
                onChange={this.handleChange}
                value={this.props.value}
                options={this.options}
                height="100%"
            />
        )
    }

}
