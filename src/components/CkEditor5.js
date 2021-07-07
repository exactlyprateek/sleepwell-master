import React, { forwardRef, useEffect, useRef, useState } from 'react'
import {
    CCol,
    CRow,
    CInput,

} from '@coreui/react'

// import { EditorState } from 'draft-js';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import '../App.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

let CkEditor5 = (props, ref) => {
    const editorValueRef = useRef();
   
    const editorOnChange = (event, editor) => {
        if (editor.getData()) {
            props.onEditorValue(editor.getData());
        }
    }
 
    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    {/* <Editor
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
                    /> */}

                    <CKEditor
                        editor={ClassicEditor}
                        data={(props.editorValue ? props.editorValue : '')}
                        // onReady={editor => {
                        //     // You can store the "editor" and use when it is needed.
                        //     console.log('Editor is ready to use!', editor);
                        // }}
                        // onChange={(event, editor) => {
                        //     const data = editor.getData();
                        //     console.log({ event, editor, data });
                        // }}
                        onChange={editorOnChange}
                        // onBlur={(event, editor) => {
                        //     console.log('Blur.', editor);
                        // }}
                        // onFocus={(event, editor) => {
                        //     console.log('Focus.', editor);
                        // }}
                    />
                </CCol>
            </CRow>
        </div>
    )
}

export default CkEditor5
