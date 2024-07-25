<!-- Google Tag Manager -->
<script>
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
</script>
<!-- End Google Tag Manager -->

<!-- MaskPhone -->
<script
  src="https://fs.getcourse.ru/fileservice/file/download/a/521488/sc/346/h/19fa9e3b98d0f2a315d2f79f8f3a5ada.js"
  defer
></script>

<script>
  $(function () {
    function applyPhoneMask(selector) {
      phoneAutoMask(selector, {
        fallbackCountry: "ro",
        l10n: "ro",
        intlTelInput: {
          preferredCountries: ["ro", "md"],
        },
      });
    }

    applyPhoneMask('input[name="formParams[phone]"]');
    applyPhoneMask('input[name="phone"]');
  });
</script>
<!-- End MaskPhone -->

<!-- Loading Animation -->
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie.min.js"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>

<div class="myLoader">
  <div id="lottie-container" style="width: 80px; height: 80px"></div>
</div>

<script src="https://community.webcase.md/pl/layout/17104/11/lottie_animation.js"></script>
<!-- End Loading Animation -->

<style>
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
</style>

<script>
  document.body.classList.add("no-scroll");

  var head = document.getElementsByTagName("HEAD")[0];
  var link = document.createElement("link");

  const userInfoisAdmin = window.userInfo.isAdmin;
  const userInfoisManager = window.userInfo.isManager;
  const userInfoisTeacher = window.userInfo.isTeacher;

  if (!userInfoisAdmin && !userInfoisManager && !userInfoisTeacher) {
    // Cod pentru afișarea loaderului pentru studenți
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(function () {
        var loader = document.querySelector(".myLoader");
        loader.style.opacity = "0";
        setTimeout(function () {
          loader.style.display = "none";
          document.body.classList.remove("no-scroll"); // Permite scroll-ul după ce loader-ul dispare
        }, 500);
      }, 800);
    });

    if (window.location.toString().includes("talks/conversation")) {
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "/pl/layout/17104/8/talks_style.css";
      head.appendChild(link);
    }

    if (
      window.location.href ==
      "https://community.webcase.md/teach/control/stream"
    ) {
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "/pl/layout/17104/6/home_trinings.css";
      head.appendChild(link);
    }

    if (
      window.location.href ==
      "https://community.webcase.md/teach/control/stream/index"
    ) {
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "/pl/layout/17104/6/home_trinings.css";
      head.appendChild(link);
    }

    if (window.location.toString().includes("gcmes")) {
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "/pl/layout/17104/6/home_trinings.css";
      head.appendChild(link);
    }

    if (window.location.toString().includes("lesson/view")) {
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "/pl/layout/17104/3/inner_lesson_style.css";
      head.appendChild(link);
    }

    if (window.location.toString().includes("/scale/view-results")) {
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "/pl/layout/17104/10/Punctaj.css";
      head.appendChild(link);
    }

    if (window.location.toString().includes("/webinar/show")) {
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "/pl/layout/17104/12/camera-web.css";
      head.appendChild(link);
    }

    if (window.location.toString().includes("stream/view")) {
      var link1 = document.createElement("link");
      link1.rel = "stylesheet";
      link1.type = "text/css";
      link1.href = "/pl/layout/17104/5/in_modul_lesons.css";
      head.appendChild(link1);

      var link2 = document.createElement("link");
      link2.rel = "stylesheet";
      link2.type = "text/css";
      link2.href = "/pl/layout/17104/4/in_training_modules.css";
      head.appendChild(link2);

      var link3 = document.createElement("link");
      link3.rel = "stylesheet";
      link3.type = "text/css";
      link3.href = "/pl/layout/17104/9/setari_cont.css";
      head.appendChild(link3);
    }
    var link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.type = "text/css";
    link3.href = "/pl/layout/17104/9/setari_cont.css";
    head.appendChild(link3);
  } else {
    // Dacă utilizatorul este admin, manager sau profesor, nu afișați loaderul
    document.body.classList.remove("no-scroll");
    var loader = document.querySelector(".myLoader");
    loader.style.display = "none";
  }
</script>
