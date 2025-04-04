import EditorApp from "../../component/editor/editor";
import "./post-editor.css";


export function ToolbarPlugin() {

  return (
    <div className="toolbar">
      <EditorApp />
    </div>
  );
}
