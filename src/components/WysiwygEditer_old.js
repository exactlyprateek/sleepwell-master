import React, { forwardRef, useEffect, useRef, useState } from 'react'
import {
    CCol,
    CRow,
    CInput,

} from '@coreui/react'

import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../App.css';

let WysiwygEditor = (props, ref) => {
    const editorValueRef = useRef();
    const [wysiwygDescription, setWysiwygDescription] = useState(() => EditorState.createEmpty(),);
    const onEditorStateChange = editorState => {
        // const enteredEditorValue = editorValueRef.current.value;
        // console.log(enteredEditorValue);
        // setDescription(description)
        // console.log(wysiwygDescription);
        return setWysiwygDescription(editorState)
    }
    // forwardRef


    const editorOnChange = (e) => {
        // setDescription('changing')
        // const enteredEditorValue = editorValueRef.current.value;
        // console.log(enteredEditorValue);
        // console.log(e.blocks[0].text);
        if (wysiwygDescription.getCurrentContent().getPlainText()) {
            props.onEditorValue(wysiwygDescription.getCurrentContent().getPlainText());
            // props.onEditorValue(e.blocks[0].text);
        }
        // if (enteredEditorValue) {
        //     // props.onEditorValue(wysiwygDescription.getCurrentContent().getPlainText());
        //     // console.log('test');
        //     // props.onEditorValue(e.blocks[0].text);
        // }
    }
   
    const _uploadImageCallBack = (file) => new Promise(
        (resolve, reject) => {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            let img = new Image();
            // let url = ''
            reader.onload = function (e) {
                img.src = this.result
                resolve({
                    data: {
                        link: img.src
                    }
                })
            }
        }
    );

    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <Editor
                        toolbar={{
                            image: {
                                urlEnabled: true,
                                uploadEnabled: true,
                                uploadCallback: _uploadImageCallBack,
                                alignmentEnabled: true,
                                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg'
                            }
                        }}
                        editorState={wysiwygDescription}
                        onEditorStateChange={onEditorStateChange}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        onChange={editorOnChange}
                        ref={editorValueRef}
                        // ref={ref => editorValueRef(ref)}
                    />
                </CCol>
            </CRow>
        </div>
    )
}

export default WysiwygEditor
