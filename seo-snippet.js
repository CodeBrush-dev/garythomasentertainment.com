// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.garythomasentertainment.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.garythomasentertainment.com/","title_tag":"Live Entertainment & Event Production | Gary Thomas Entertainment","meta_description":"Live Entertainment, Las Vegas Shows, and Event Production by Entertainment Director and Choreographer Gary Thomas. Immersive live show concepts tailored to your event."},{"page_url":"https://www.garythomasentertainment.com/about","title_tag":"Musical Theatre & Entertainment Director | Gary Thomas Entertainment","meta_description":"From Musical Theatre performer to Entertainment Director and choreographer, Gary Thomas creates immersive live shows, cabaret performances, and large-scale live entertainment."},{"page_url":"https://www.garythomasentertainment.com/video","title_tag":"Immersive Live Show & Cabaret Performances | Gary Thomas Entertainment","meta_description":"WHISKEY and HEADLINERS are immersive live shows with cabaret performances, dance shows, and live entertainment. Versatile productions for venues, events, and Las Vegas-style shows."},{"page_url":"https://www.garythomasentertainment.com/gallery","title_tag":"Live Entertainment Event Production | Gary Thomas Entertainment","meta_description":"Discover live entertainment and event production highlights, including rooftop cabaret-style events and immersive live show experiences produced by Gary Thomas Entertainment."},{"page_url":"https://www.garythomasentertainment.com/clients-events","title_tag":"Event Production & Las Vegas Shows | Gary Thomas Entertainment","meta_description":"Professional event production for corporate industrials, Las Vegas shows, nightlife, and musical theatre. Entertainment Director and choreographer for high-impact live entertainment."},{"page_url":"https://www.garythomasentertainment.com/dance","title_tag":"Dance Shows, Choreography & Dance Classes | Gary Thomas Entertainment","meta_description":"International choreography services, dance shows, and dance classes for studios, conventions, and competitions. Jazz, Broadway, and contemporary training by Gary Thomas."},{"page_url":"https://www.garythomasentertainment.com/contact","title_tag":"Book Live Entertainment & Dance Shows | Gary Thomas Entertainment","meta_description":"Contact Gary Thomas Entertainment to book live entertainment, dance shows, cabaret performances, choreography services, and event production for your next show or event."}],"keywords":["Live Entertainment","Dance Shows","Cabaret Performances","Musical Theatre","Choreography Services","Event Production","Entertainment Director","Immersive Live Show","Dance Classes","Las Vegas Shows"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.garythomasentertainment.com/#person",
  "name": "Gary Thomas",
  "url": "https://www.garythomasentertainment.com/",
  "image": "https://static.wixstatic.com/media/f3870e_7538ac62f315466098ffe9787e9f18cc%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f3870e_7538ac62f315466098ffe9787e9f18cc%7Emv2.png",
  "jobTitle": [
    "Producer",
    "Director",
    "Choreographer"
  ],
  "description": "Live events creator and entertainment professional specializing in producing, directing, and choreographing live shows including cabaret, club, rock, and immersive productions for corporate, theatre, nightlife, and special events.",
  "sameAs": [
    "https://www.tiktok.com/",
    "https://www.youtube.com/",
    "https://www.instagram.com/",
    "https://www.facebook.com/"
  ],
  "brand": {
    "@type": "Organization",
    "name": "Gary Thomas Entertainment",
    "url": "https://www.garythomasentertainment.com/",
    "logo": "https://static.wixstatic.com/media/f3870e_7538ac62f315466098ffe9787e9f18cc%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f3870e_7538ac62f315466098ffe9787e9f18cc%7Emv2.png",
    "description": "Gary Thomas Entertainment produces, directs, and choreographs immersive live shows and entertainment experiences for corporate events, theatres, nightclubs, and special engagements.",
    "founder": "Gary Thomas"
  },
  "knowsAbout": [
    "Live event production",
    "Show direction",
    "Choreography",
    "Immersive shows",
    "Corporate industrials",
    "Burlesque shows",
    "Rock shows",
    "Nightclub entertainment",
    "Dance instruction",
    "Competition judging"
  ],
  "makesOffer": [
    {
      "@type": "Service",
      "name": "Live Event Production",
      "url": "https://www.garythomasentertainment.com/",
      "description": "Concept development, producing, and creative direction for live shows and events including corporate industrials, immersive cabaret and club experiences, and theatrical productions."
    },
    {
      "@type": "Service",
      "name": "Choreography",
      "url": "https://www.garythomasentertainment.com/dance",
      "description": "Choreography for theatre, concerts, nightclubs, music videos, and stage productions, with experience across jazz funk, Broadway, contemporary, and revue-style shows."
    },
    {
      "@type": "Service",
      "name": "Show Direction",
      "url": "https://www.garythomasentertainment.com/clients-events",
      "description": "Direction and creative oversight for theatrical productions, immersive shows, and nightlife entertainment concepts from rehearsal through performance."
    }
  ],
  "subjectOf": [
    {
      "@type": "Event",
      "name": "WHISKEY",
      "url": "https://www.garythomasentertainment.com/video",
      "description": "An immersive live show that blends cabaret, club, and rock music to create a high-energy live show experience featuring singers, dancers, musicians, DJs, and comedians.",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "isAccessibleForFree": false
    },
    {
      "@type": "Event",
      "name": "HEADLINERS",
      "url": "https://www.garythomasentertainment.com/video",
      "description": "A production show featuring a variety of specialty acts from around the world, originally created as a virtual show and now adapted for the live stage.",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "isAccessibleForFree": false
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Entertainment Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Corporate Industrials",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Corporate Production Shows",
            "description": "Creation and choreography of production and fashion shows for corporate brands and events."
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Production Shows",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Immersive and Theatrical Productions",
            "description": "Development and direction of full-scale live shows including immersive cabaret, burlesque, rock, tribute, and revue productions."
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Theatre and Nightlife",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Theatre and Nightclub Entertainment Direction",
            "description": "Choreography, directing, and entertainment direction for theatres and nightclubs."
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Dance and Education",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Dance Workshops and Teaching",
            "description": "Jazz funk, Broadway, contemporary, and tap classes and workshops at studios, conventions, and educational institutions."
          },
          {
            "@type": "Service",
            "name": "Dance Competition Judging",
            "description": "Judging services for regional and national dance competitions in the USA and Canada."
          }
        ]
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
