// Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-M39DJPS");

// MaskPhone
function applyPhoneMask(selector) {
  phoneAutoMask(selector, {
    fallbackCountry: "ro",
    l10n: "ro",
    intlTelInput: {
      preferredCountries: ["ro", "md"],
    },
  });
}

$(function () {
  applyPhoneMask('input[name="formParams[phone]"]');
  applyPhoneMask('input[name="phone"]');
});

// Loading Animation
document.addEventListener("DOMContentLoaded", function () {
  var lottieScript = document.createElement("script");
  lottieScript.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie.min.js";
  lottieScript.crossOrigin = "anonymous";
  lottieScript.referrerPolicy = "no-referrer";
  document.head.appendChild(lottieScript);

  var lottieDiv = document.createElement("div");
  lottieDiv.className = "myLoader";
  lottieDiv.innerHTML = "<div id='lottie-container' style='width: 80px; height: 80px'></div>";
  document.body.appendChild(lottieDiv);

  var customScript = document.createElement("script");
  customScript.src = "https://community.webcase.md/pl/layout/17104/11/lottie_animation.js";
  document.head.appendChild(customScript);

  document.body.classList.add("no-scroll");

  const userInfoisAdmin = window.userInfo.isAdmin;
  const userInfoisManager = window.userInfo.isManager;
  const userInfoisTeacher = window.userInfo.isTeacher;

  if (!userInfoisAdmin && !userInfoisManager && !userInfoisTeacher) {
    setTimeout(function () {
      var loader = document.querySelector(".myLoader");
      loader.style.opacity = "0";
      setTimeout(function () {
        loader.style.display = "none";
        document.body.classList.remove("no-scroll");
      }, 500);
    }, 800);
  } else {
    document.body.classList.remove("no-scroll");
    var loader = document.querySelector(".myLoader");
    loader.style.display = "none";
  }
});

// Load additional stylesheets
document.addEventListener("DOMContentLoaded", function () {
  var head = document.getElementsByTagName("HEAD")[0];
  var link;

  const userInfoisAdmin = window.userInfo.isAdmin;
  const userInfoisManager = window.userInfo.isManager;
  const userInfoisTeacher = window.userInfo.isTeacher;

  if (!userInfoisAdmin && !userInfoisManager && !userInfoisTeacher) {
    function addStylesheet(href) {
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = href;
      head.appendChild(link);
    }

    if (window.location.toString().includes("talks/conversation")) {
      addStylesheet("/pl/layout/17104/8/talks_style.css");
    }

    if (window.location.href == "https://community.webcase.md/teach/control/stream" ||
        window.location.href == "https://community.webcase.md/teach/control/stream/index" ||
        window.location.toString().includes("gcmes")) {
      addStylesheet("/pl/layout/17104/6/home_trinings.css");
    }

    if (window.location.toString().includes("lesson/view")) {
      addStylesheet("/pl/layout/17104/3/inner_lesson_style.css");
    }

    if (window.location.toString().includes("/scale/view-results")) {
      addStylesheet("/pl/layout/17104/10/Punctaj.css");
    }

    if (window.location.toString().includes("/webinar/show")) {
      addStylesheet("/pl/layout/17104/12/camera-web.css");
    }

    if (window.location.toString().includes("stream/view")) {
      addStylesheet("/pl/layout/17104/5/in_modul_lesons.css");
      addStylesheet("/pl/layout/17104/4/in_training_modules.css");
      addStylesheet("/pl/layout/17104/9/setari_cont.css");
    }

    addStylesheet("/pl/layout/17104/9/setari_cont.css");
  }
});
