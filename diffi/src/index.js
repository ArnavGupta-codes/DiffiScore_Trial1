import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//to download
function downloadImage(url, filename) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      // Create a link element
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename; // Set the download filename
      document.body.appendChild(link);
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up
    })
    .catch((error) => {
      console.error("Error downloading image:", error);
    });
}
//done

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".img-card");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  cards.forEach((card) => {
    const imgWrapper = card.querySelector(".img-wrapper");
    const downloadBtn = card.querySelector(".download-btn");

    // Expand card on hover over the image
    imgWrapper.addEventListener("mouseenter", () => {
      card.classList.add("expanded");
      overlay.style.display = "block";
    });

    // Collapse card when mouse leaves the image
    imgWrapper.addEventListener("mouseleave", () => {
      card.classList.remove("expanded");
      overlay.style.display = "none";
    });

    // Download image when the download button is clicked
    downloadBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the hover effect from triggering
      const imgSrc = card.querySelector("img").src;
      const link = document.createElement("a");
      link.href = imgSrc;
      link.download = "image.jpg"; // Default download filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });

  // Close expanded card when clicking outside
  overlay.addEventListener("click", () => {
    const expandedCard = document.querySelector(".img-card.expanded");
    if (expandedCard) {
      expandedCard.classList.remove("expanded");
      overlay.style.display = "none";
    }
  });
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

