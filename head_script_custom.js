// Adăugarea stilurilor CSS
var css = `
  body.no-scroll {
    overflow: hidden;
  }
  .global-confirm-checkbox-block label {
    pointer-events: none;
  }
  .my-footer {
    margin-top: 100px;
    margin-left: 28px;
    display: flex;
    gap: 26px;
  }
  .my-footer a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #0d0e10;
    text-decoration: none !important;
  }
  @media only screen and (max-width: 600px) {
    .my-footer {
      flex-direction: column !important;
      margin-top: 70px !important;
    }
  }
  .myLoader {
    position: absolute;
    left: 0px;
    display: flex;
    top: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    align-items: center;
    justify-content: center;
    background: white;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
`;

// Adăugarea stilurilor CSS în head
var style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
document.head.appendChild(style);

// Adăugarea HTML-ului pentru loader
var loaderDiv = document.createElement('div');
loaderDiv.className = 'myLoader';
loaderDiv.innerHTML = '<div id="lottie-container" style="width: 80px; height: 80px"></div>';
document.body.appendChild(loaderDiv);

// Adăugarea scriptului MaskPhone
var scriptMaskPhone = document.createElement('script');
scriptMaskPhone.src = 'https://fs.getcourse.ru/fileservice/file/download/a/521488/sc/346/h/19fa9e3b98d0f2a315d2f79f8f3a5ada.js';
scriptMaskPhone.defer = true;
document.head.appendChild(scriptMaskPhone);
