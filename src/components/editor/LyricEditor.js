import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

const styles = theme => ({
    editorContainer: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4
    }
});

class LyricEditor extends Component {
    constructor (props) {
        super(props);
    
        this.handleModelChange = this.handleModelChange.bind(this);
    
        this.state = {
          model: 'Example text'
        };
      }
    
      handleModelChange=(model) => {
        this.setState({
          model: model
        });
      };
    render () {
        return (
            <FroalaEditor 
                tag='textarea'
                config={{
                    placeholderText: 'Edit Your Lyrics Here...'
                }}
                model={this.state.model}
                onModelChange={this.handleModelChange}
            />
        )
    }
}

export default withStyles(styles)(LyricEditor);

