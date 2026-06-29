(function () {
  var consentKey = "clarity_consent";
  var clarityProjectId = "xeiurjpii0";

  function getStoredConsent() {
    try {
      return window.localStorage && window.localStorage.getItem(consentKey);
    } catch (e) {
      return null;
    }
  }

  function storeConsent(value) {
    try {
      if (window.localStorage) {
        window.localStorage.setItem(consentKey, value);
      }
    } catch (e) {}
  }

  function applyClarityConsent(value) {
    if (typeof window.clarity === "function") {
      window.clarity("consentv2", {
        ad_Storage: value,
        analytics_Storage: value,
      });
    }
  }

  var storedConsent = getStoredConsent();
  var defaultConsent = storedConsent === "granted" ? "granted" : "denied";

  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };

    c[a]("consentv2", {
      ad_Storage: defaultConsent,
      analytics_Storage: defaultConsent,
    });

    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", clarityProjectId);

  function createBanner() {
    if (getStoredConsent() || document.getElementById("cookie-consent-banner")) {
      return;
    }

    var banner = document.createElement("div");
    banner.id = "cookie-consent-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Cookie consent");
    banner.innerHTML =
      '<p>Clarity analytics cookies. ' +
      '<a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies" target="_blank" rel="noopener">Learn more</a></p>' +
      '<div class="consent-buttons">' +
      '<button type="button" id="cookie-consent-decline">Decline</button>' +
      '<button type="button" id="cookie-consent-accept">Accept</button>' +
      "</div>";

    document.body.appendChild(banner);

    document.getElementById("cookie-consent-accept").addEventListener("click", function () {
      storeConsent("granted");
      applyClarityConsent("granted");
      banner.remove();
    });

    document.getElementById("cookie-consent-decline").addEventListener("click", function () {
      storeConsent("denied");
      applyClarityConsent("denied");
      banner.remove();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createBanner, { once: true });
  } else {
    createBanner();
  }
})();
