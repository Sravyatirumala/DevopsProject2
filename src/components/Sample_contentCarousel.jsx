import React from "react";
import ContentTile from "./ContentTile";
import ContentTileData from "./ContentTileData";

function abc(data) {
  return <ContentTile poster={data.poster} />;
}

function ContentCarousel() {
  return (
    <div style={{ marginBottom: 48 }}>
      <div
        style={{
          marginLeft: 72,
          marginRight: 72,
          paddingBottom: 16,
          alignItems: "center",
          display: "flex",
        }}
      >
        <h2 style={{ margin: 0 }}>Movies List</h2>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left Scroll Button */}
        <button
          onClick={() => {
            document.getElementById("container").scrollLeft -= 1400;
          }}
          style={{
            position: "absolute",
            left: 0,
            zIndex: 10,
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            height: "100%",
            padding: "0 10px",
          }}
        >
          &#8592;
        </button>

        {/* Carousel Container */}
        <ul
          id="container"
          style={{
            listStyle: "none",
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            padding: "0 72px",
            margin: 0,
          }}
        >
          {ContentTileData.map(abc)}
        </ul>

        {/* Right Scroll Button */}
        <button
          onClick={() => {
            document.getElementById("container").scrollLeft += 1400;
          }}
          style={{
            position: "absolute",
            right: 0,
            zIndex: 10,
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            height: "100%",
            padding: "0 10px",
          }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default ContentCarousel;
