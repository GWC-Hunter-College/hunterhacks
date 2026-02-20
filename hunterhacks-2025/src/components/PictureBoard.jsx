import "./PictureBoard.css";

import { useState, useEffect, useRef } from "react";

function PictureBoard({ profileArray , sizingArray}) {
  const [imageMatrix, setImageMatrix] = useState([[]]);
  const sortedImageArray = useRef([]);

  const rowCount = useRef(3);
  const sortedSizingArray = useRef([])

  useEffect(() => {
    console.log("profile array: ", profileArray);
    async function initialUpdate() {
      await loadAndSortImages();
      updateMatrix();
    }

    initialUpdate();

    // Sort by breakpoint ascending
    sortedSizingArray.current = [...sizingArray].sort((a, b) => a.breakpoint - b.breakpoint);

    const updateLevel = () => {
      const width = window.innerWidth;
      
      if(sortedSizingArray.current.length <= 0) return;

      let newRowCount = sortedSizingArray.current[0].size;

      for (let i = 1; i < sortedSizingArray.current.length; i++) {
        const { breakpoint, size } = sortedSizingArray.current[i];
        
        if (width < breakpoint) {
          break; // stop if it doesnt hit breakpoint
        }

        newRowCount = size;
      }

      if (newRowCount !== rowCount.current) {
        rowCount.current = newRowCount;
        console.log("Viewport level changed →", newRowCount);

        updateMatrix();
      }
    };

    updateLevel(); // run once on load
    window.addEventListener("resize", updateLevel);

    return () => window.removeEventListener("resize", updateLevel);
  }, []);

  async function loadAndSortImages() {
    const results = await Promise.all(
      profileArray.map((profile, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          const name = profile.name;
          const src = profile.src;
          const profession = profile.profession;
          img.src = src;
          img.onload = () => {
            const heightToWidthRatio = img.naturalHeight / img.naturalWidth;
            resolve({ src, heightToWidthRatio, index, name, profession });
          };
        });
      })
    );

    results.sort((a, b) => b.heightToWidthRatio - a.heightToWidthRatio);
    sortedImageArray.current = results;
  }

  function updateMatrix() {
    const sortMatrix = Array.from({ length: rowCount.current }, () => []);

    const currHeights = Array.from({ length: rowCount.current }, () => 0);

    for (let i = 0; i < sortedImageArray.current.length; i++) {
      let colToAdd = 0;
      let min = currHeights[0];

      for (let j = 1; j < rowCount.current; j++) {
        if (currHeights[j] < min) {
          min = currHeights[j];
          colToAdd = j;
        }
      }

      sortMatrix[colToAdd].push(sortedImageArray.current[i]);
      currHeights[colToAdd] += sortedImageArray.current[i].heightToWidthRatio;
    }

    for (let i = 0; i < rowCount.current; i++) {
      sortMatrix[i].sort((a, b) => a.index - b.index);
    }

    console.log(sortMatrix);
    // console.log(imageArray[sortedSrc[0]])
    setImageMatrix(sortMatrix);
  }

  return (
    <div className="picture-board">
      {imageMatrix.map((row, rowIndex) => (
        <div key={rowIndex} className="picture-board-column">
          {row.map((profile, columnIndex) => (
            <figure key={columnIndex} className="picture-board-image">
              <img src={profile.src} alt={profile.name}></img>

              <figcaption className="picture-board-caption">
                <h3 className="picture-board-caption-name">{profile.name}</h3>
                <h3 className="picture-board-caption-desc">
                  {profile.profession}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
export default PictureBoard;
