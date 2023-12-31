import { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { ColorPicker } from "antd";
import { MdCleaningServices } from "react-icons/md";
import { FaPen, FaEraser, FaUndo, FaRedo } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { Radio } from "antd";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [toolPointer, setToolPointer] = useState("pen-pointer");
  const [color, setColor] = useState("#000000");
  const [allowOnlyPointer, setAllowOnlyPointer] = useState("pen");
  const [canvasZoom, setCanvasZoom] = useState(100);

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
    <div>
      <div
        className="d-flex"
        style={{ position: "absolute", zIndex: "10", left: "28rem" }}
      >
        <CanvasToolbar />
      </div>
      <div
        className={`${toolPointer}`}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: "-1",
          transform: `scale(${canvasZoom / 100})` 
        }}

      >
        <ReactSketchCanvas
          className="bg-white rounded-0"
          ref={canvasRef}
          strokeWidth={4}
          strokeColor={color}
          allowOnlyPointerType={allowOnlyPointer}
        />
      </div>
      <div
        className="d-inline"
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          zIndex: "10",
        }}
      >
        <div>
          <Radio.Group
            value={canvasZoom}
            onChange={(e) => setCanvasZoom(e.target.value)}
          >
            <Radio.Button value={canvasZoom + 10}>+</Radio.Button>
            <Radio.Button value={100}>{canvasZoom}</Radio.Button>
            <Radio.Button value={canvasZoom === 10 ? 10 : canvasZoom - 10}>-</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
