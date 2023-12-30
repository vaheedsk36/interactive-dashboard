import { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
// import { Button } from "antd";
import { MdCleaningServices } from "react-icons/md";
import { FaPen, FaEraser, FaUndo, FaRedo } from "react-icons/fa";
import { RxReset } from "react-icons/rx";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [toolPointer, setToolPointer] = useState("pointer");
  const canvasActions = (action, mode = false) => {
    canvasRef.current[action](action === "eraseMode" ? mode : null);
    setToolPointer(
      action === "eraseMode"
        ? mode
          ? "eraser-pointer"
          : "pen-pointer"
        : "cross-hair"
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
    </div>
  );
  return (
    <div className="container text-center">
      <div className="row">
        <CanvasToolbar />
      </div>
      <div className={`row ${toolPointer}`}>
        <ReactSketchCanvas
          ref={canvasRef}
          // style={styles}
          width="80vw"
          height="80vh"
          strokeWidth={4}
          strokeColor="red"
        />
      </div>
    </div>
  );
};

export default Canvas;
