import React, { useRef, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";

interface TinyEditorProps {
    value: string;
    onChange: (content: string) => void;
    height?: number;
    placeholder?: string;
    disabled?: boolean;
}

const TinyEditor: React.FC<TinyEditorProps> = ({
    value,
    onChange,
    height = 400,
    placeholder = "Write product description...",
    disabled = false,
}) => {
    const editorRef = useRef<any>(null);
    const apiKey = import.meta.env.VITE_TINY_EDITOR_API_KEY;

    return (
        <Editor
            apiKey={apiKey}
            value={value}
            disabled={disabled}
            onInit={(_, editor) => (editorRef.current = editor)}
            onEditorChange={(content) => {
                onChange(content);
            }}
            init={{
                plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
            initialValue='Welcome to TinyMCE!'
        />
    );
};

export default TinyEditor;

//<div dangerouslySetInnerHTML={{ __html: editorContent }}></div>
