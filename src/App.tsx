import React, { useRef, useState } from "react";
import "./App.css";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const App: React.FC = () => {
  const cropperRef = useRef<HTMLImageElement>(null);
  const [cropData, setCropData] = useState<string | null>(null);

  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    const dataUrl: string = cropper.getCroppedCanvas().toDataURL();
  };

  const cropImage = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    const dataUrl: string = cropper.getCroppedCanvas().toDataURL();
    setCropData(dataUrl);
  };

  return (
    <div className="App">
      <div style={{ height: "300px", width: "100%", border: "1px solid red" }}>
        {cropData && (
          <img
            src={cropData}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        )}
        {!cropData && (
          <Cropper
            src="/banner2.png"
            style={{ height: "100%", width: "100%" }}
            // Cropper.js options
            viewMode={2}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
          />
        )}
        <div style={{ height: "100px" }} />
        <button style={{ padding: "10px 40px" }} onClick={cropImage}>Crop</button>
      </div>
    </div>
  );
};

export default App;
