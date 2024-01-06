import { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { ColorPicker } from "antd";
import { MdCleaningServices } from "react-icons/md";
import { FaPen, FaEraser, FaUndo, FaRedo } from "react-icons/fa";
import { RxReset } from "react-icons/rx";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [toolPointer, setToolPointer] = useState("pen-pointer");
  const [color, setColor] = useState("#000000");
  const [allowOnlyPointer, setAllowOnlyPointer] = useState("pen");

  const canvasActions = (action, mode = false) => {
    canvasRef.current[action](action === "eraseMode" ? mode : null);
    setToolPointer(
      action === "eraseMode"
        ? mode
          ? "eraser-pointer"
          : "pen-pointer"
        : "cross-hair"
    );
    setAllowOnlyPointer(action === "eraseMode" ? "all" : "pen");
  };

  const ToolPallet = () => {
    return (
      <ColorPicker
        value={color}
        onChangeComplete={(color) => setColor(color.toHexString())}
      />
    );
  };

  const CanvasToolbar = () => (
    <div className="canvas-container fs-5 d-inline my-3 card shadow-sm rounded">
      <MdCleaningServices
        onClick={() => canvasActions("clearCanvas")}
        title="clear canvas"
      />
      <RxReset
        onClick={() => canvasActions("resetCanvas")}
        title="reset canvas"
      />
      <FaEraser
        onClick={() => canvasActions("eraseMode", true)}
        title="eraser"
      />
      <FaPen onClick={() => canvasActions("eraseMode", false)} title="pen" />
      <FaUndo onClick={() => canvasActions("undo")} title="undo" />
      <FaRedo onClick={() => canvasActions("redo")} title="redo" />
      <ToolPallet />
    </div>
  );

  return (
    <div style={{ position: "absolute", zIndex: "1", inset: 0, top: "1rem" }}>
      <div
        className="d-flex justify-content-center"
        style={{
          position: "absolute",
          zIndex: 5,
          left: "30rem",
          top: "1.8rem",
        }}
      >
        <CanvasToolbar />
      </div>
      <div
        className={`${toolPointer}`}
        style={{ position: "absolute", zIndex: "-1", inset: 0 }}
      >
        <ReactSketchCanvas
          className="bg-danger rounded-0"
          ref={canvasRef}
          strokeWidth={4}
          strokeColor={color}
          allowOnlyPointerType={allowOnlyPointer}
        />
      </div>
    </div>
  );
};

export default Canvas;
