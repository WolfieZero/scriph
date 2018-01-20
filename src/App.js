import React from 'react';
import SplitPane from 'react-split-pane';
import ReactMarkdown from 'react-markdown';

import Editor from './Components/Editor';
import Pane from './Components/Pane';
import './App.css';

class App extends React.PureComponent {

    state = {
        markdownSrc: '# Hello World',
    };

    handleMarkdownChange = (markdownSrc) => {
        this.setState({
            markdownSrc,
        });
    }

    render() {
        return (
            <div className="App">
                <SplitPane split="vertical" defaultSize="50%">
                    <Pane className="editor-pane">
                        <div className="titlebar"></div>
                        <Editor
                            className="editor"
                            value={this.state.markdownSrc}
                            onChange={this.handleMarkdownChange}
                        />
                    </Pane>
                    <Pane className="view-pane">
                        <div className="titlebar"></div>
                        <ReactMarkdown className="result" source={this.state.markdownSrc} />
                    </Pane>
                </SplitPane>
            </div>
        );
    }
}

export default App;
