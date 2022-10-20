import React from "react";
import AddMusic from "../icons/add-music.png";
import AddImage from "../icons/add-image.png";

export default function AddBar() {

  const [content, setContent] = React.useState("");
  const [selectedImages, setSelectedImages] = React.useState([]);
  const [selectedMusics, setSelectedMusics] = React.useState([]);

  const selectedImagesRef = React.createRef();

  React.useEffect(() => {
    appendSelectedImages(selectedImages);
  }, [selectedImages, selectedMusics]);

  const appendSelectedImages = (files) => {
    selectedImagesRef.current.innerHTML = "";
    for (let i = 0; i < files.length; i++) {
      const mainDiv = document.createElement("div");
      selectedImagesRef.current.appendChild(mainDiv);

      const deleteButton = document.createElement("div");
      const x = document.createElement("span");
      x.addEventListener("click", () => {
        setSelectedImages(selectedImages.filter((e, j) => j !== i));
      });
      x.classList.add("activable-button");
      x.innerHTML = "X";
      deleteButton.appendChild(x);
      deleteButton.classList.add("selected-images__delete-button");
      mainDiv.appendChild(deleteButton);

      const img = document.createElement("img");
      img.file = files[i];
      mainDiv.appendChild(img);

      var reader = new FileReader();
      reader.onload = (function (aImg) {
        return function (e) {
          aImg.src = e.target.result;
        };
      })(img);
      reader.readAsDataURL(files[i]);
    }
  };

  const showModalWindowAddMusic = () => {};

  const createPost = () => {
    const formData = new FormData();
    formData.append("content", content);
    // .map((e) => formData.append("file", e));
  };

  return (
    <div className="add-music-container">
      <div
        className="select-add-item"
        onClick={() => {
        }}
      >
      </div>
      <div className="add-music news-page__item border-element">
        <label
          className="add-music__item add-image__select-file activable-button"
          title="Добавить картинку к музыке"
        >
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => {
              while (e.target.firstChild) {
                e.target.removeChild(e.target.firstChild);
              }
              setSelectedImages([...e.target.files, ...selectedImages]);
              e.target.value = "";
            }}
          />
          <div className="add-music__item__image">
            <img src={AddImage} alt="" />
          </div>
        </label>
        <input
          className="add-music__input activable-button"
          type="text"
          placeholder="Контент..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label className="add-music__item add-music__select-file activable-button">
          <div
            className="add-music__item__image"
            onClick={() => {
              showModalWindowAddMusic();
            }}
          >
            <img src={AddMusic} alt="" />
          </div>
        </label>

        <div className="create-post activable-button create-button">
          Создать пост
        </div>
      </div>

      <div className={`add-music-container__selected-files ${selectedImages.length ? 'news-page__item border-element' : ""}`}>
        <div className="selected-images-container">
          {selectedImages.length ? <span>Добавленные картинки:</span> : ""}
          <div className="selected-images" ref={selectedImagesRef}></div>
        </div>

        <div className="selected-musics-container">
          <div className="selected-musics"></div>
        </div>
      </div>
    </div>
  );
}
