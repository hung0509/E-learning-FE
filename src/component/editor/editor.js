import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { $generateHtmlFromNodes } from "@lexical/html";
import { EditorState, $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useState } from "react";

const editorConfig = {
  theme: {},
  onError(error) {
    console.error(error);
  },
};

function Toolbar() {
  const [editor] = useLexicalComposerContext();

  return (
    <div className="editor-toolbar">
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}><b>B</b></button>
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}><i>I</i></button>
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}><u>U</u></button>
      <button onClick={() => document.execCommand("justifyLeft")}>⬅</button>
      <button onClick={() => document.execCommand("justifyCenter")}>⬆</button>
      <button onClick={() => document.execCommand("justifyRight")}>➡</button>
      <button onClick={() => document.execCommand("insertOrderedList")}>1.</button>
      <button onClick={() => document.execCommand("insertUnorderedList")}>•</button>
      <button onClick={() => {
        const url = prompt("Nhập URL:");
        if (url) document.execCommand("createLink", false, url);
      }}>🔗</button>
    </div>
  );
}

function SaveHTMLPlugin({ setHtmlContent }) {
  const [editor] = useLexicalComposerContext();

  return (
    <OnChangePlugin
      onChange={() => {
        editor.update(() => {
          const htmlString = $generateHtmlFromNodes(editor);
          setHtmlContent(htmlString);
        });
      }}
    />
  );
}

export default function TextEditor() {
  const [htmlContent, setHtmlContent] = useState("");

  return (
    <div className="editor-container">
      <LexicalComposer initialConfig={editorConfig}>
        <Toolbar />
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<div className="editor-placeholder">Nhập nội dung...</div>}
        />
        <HistoryPlugin />
        <SaveHTMLPlugin setHtmlContent={setHtmlContent} />
      </LexicalComposer>
      <button className="save-button" onClick={() => console.log(htmlContent)}>
        Lưu HTML
      </button>
      <div className="html-preview">
        <h3>HTML đã lưu:</h3>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
}
