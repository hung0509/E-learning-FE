import "./post-editor.css";
import TextEditor from "../../component/editor/editor";

export function ToolbarPlugin() {

  return (
    <div className="toolbar">
      <TextEditor />
    </div>
  );
}
