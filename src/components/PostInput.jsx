import { useState } from "react";
import "../styles/Components/PostInput.css";
import { ProfileIcon } from "./ProfileIcon";
import { LargeButton } from "./Buttons";

const PostInput = ({ data }) => {
  const [mensaje, setMensaje] = useState("");
  const [inputText, setInputText] = useState("");

  const iconItems = [
    { id: 1, name: "image", accept: null },
    { id: 2, name: "gif_box", accept: "image/gif" },
    { id: 3, name: "page_info", accept: null },
    { id: 4, name: "sentiment_satisfied", accept: null },
    { id: 5, name: "calendar_clock", accept: null },
    { id: 6, name: "location_on", accept: null },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Lógica para manejar el archivo (por ejemplo, mostrar una vista previa)
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= 300) {
      setInputText(value);
    }
  };

  const percentage = (inputText.length / 300) * 100;

  return (
    <div
      className="post-input-container"
      style={{ height: "600px"}}
    >
      <div className="flex-row">
        <ProfileIcon imageUrl={"https://random-image-pepebigotes.vercel.app/api/random-image"}/>
        <div className="flex-column" style={{ width: "100%" }}>
          <div style={{height: "45px"}}>
            <textarea
              type="text"
              placeholder="¡¿Que está pasando?!"
              className="login-inputText"
              
              value={inputText}
              onChange={handleInputChange}
            />
          </div>

          <div className="line"></div>

          <div
            className="flex-row"
            style={{
              height: "40px",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <div className="flex-row">
              {iconItems.map((item) => (
                <div key={item.id} className="item-control-input">
                  <span className="material-symbols-outlined">{item.name}</span>
                </div>
              ))}
            </div>

            <div className="felx-row">
              <div className="words-counter">
                <div
                  className="circular-counter"
                  style={{
                    background: `conic-gradient(rgb(29, 155, 240) ${percentage}%, transparent ${percentage}%)`,
                  }}
                ></div>
              </div>
              <div
                className="flex-row"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="material-symbols-outlined">add_circle</div>
                <LargeButton label="Postear" styleType="tertiary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
