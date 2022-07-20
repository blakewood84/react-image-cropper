import React, { useRef, useState } from "react";
import "./App.css";
import CSS from 'csstype';

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {
  navBarStyle,
  navLogo,
  navLeftStyle,
  rightNavStyle,
  inputStyle,
  bannerAreaStyle,
  mainContentStyle,
} from "./styles";

// TODO: Animated Gif and README.MD

const App: React.FC = () => {
  const cropperRef = useRef<HTMLImageElement>(null);
  const [cropData, setCropData] = useState<string | null>(null);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [editBanner, setEditBanner] = useState<boolean>(false);
  const [bannerUrl, setBannerUrl] = useState<string>("/banner2.png");

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

  const onMouseEnter = () => {
    setCanEdit(true);
  };

  const onMouseLeave = () => {
    setCanEdit(false);
  };

  const handleEditBanner = () => {
    setEditBanner(true);
  };

  const handleFinishEditBanner = () => {
    cropImage();
    setEditBanner(false);
  };
  const testStyle = {
    border: "1px solid red",
    width: "800px",
    height: "auto",
  } as React.CSSProperties;

  return (
    <div className="App">
      <img src={'/banner.jpeg'} style={testStyle} />
      {/* <div className="nav-bar" style={navBarStyle}>
        <div className="nav-left" style={navLeftStyle}>
          <div style={navLogo}>Logo Here</div>
          <h5
            style={{ margin: "0px 5px 0px 20px", fontSize: "18px", padding: 0 }}
          >
            Home
          </h5>
          <h5 style={{ margin: "0px 5px", fontSize: "18px", padding: 0 }}>
            About
          </h5>
        </div>
        <div style={rightNavStyle}>
          <input type="text" style={inputStyle} placeholder="Search..." />
        </div>
      </div>

      {editBanner && (
        <div className="edit-banner-area" style={{...bannerAreaStyle, position: 'relative'}}>
          <Cropper
            src={bannerUrl}
            style={{ height: "100%", width: "100%" }}
            // Cropper.js options
            initialAspectRatio={16 / 9}
            viewMode={2}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
          />
          <div style={{width: '100px', height: '40px', border: '1px solid red', backgroundColor: 'black', position: 'absolute', top: '40%', right: '20%', zIndex: 999, cursor: 'pointer'}} onClick={handleFinishEditBanner}>Done</div>
        </div>
      )}
      {!editBanner && (
        <div
          className="banner-area"
          style={bannerAreaStyle}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div
            className="banner-image"
            style={{
              height: "100%",
              width: "100%",
              backgroundImage: cropData ? `url(${cropData})` : 'url("/banner2.png")',
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            {canEdit && (
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "red",
                  position: "absolute",
                  transform: "translate(0%, -50%)",
                  top: "50%",
                  left: "50%",
                  cursor: "pointer",
                }}
                onClick={handleEditBanner}
              ></div>
            )}
          </div>
        </div>
      )}
      <div className="main-content" style={mainContentStyle}>
        <div style={{ marginTop: "20px" }}>
          <h3>Main Content</h3>
        </div>
      </div> */}
    </div>
  );
};

export default App;
