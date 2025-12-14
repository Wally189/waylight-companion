/*JMJ */
/*
Ecc 3:1 (Gaeilge): "Tá a thráth féin ag gach rud, agus a am féin ag gach gnó faoin spéir."
Ár nAthair atá ar neamh, go naofar d’ainm...
Sé do bheatha, a Mhuire, atá lán de ghrásta...
*/

const ACCESS_CODE = "WAYLIGHT"; // <-- This is the access code (case-insensitive)

/* =========================================================
   THEME + LANGUAGE TOGGLES
========================================================= */

function initThemeToggle(){
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const saved = localStorage.getItem("wlc-theme") || document.body.dataset.theme || "parchment";
  document.body.dataset.theme = saved;
  themeToggle.value = saved;

  themeToggle.addEventListener("change", (e) => {
    const v = e.target.value;
    document.body.dataset.theme = v;
    localStorage.setItem("wlc-theme", v);
  });
}

function initLangToggle(){
  const langToggle = document.getElementById("langToggle");
  if (!langToggle) return;

  const saved = localStorage.getItem("wlc-lang") || document.documentElement.lang || "en";
  document.documentElement.lang = saved;
  langToggle.value = saved;

  langToggle.addEventListener("change", (e) => {
    const v = e.target.value;
    document.documentElement.lang = v;
    localStorage.setItem("wlc-lang", v);
    applyI18n();
    updateClock();
  });
}

/* =========================================================
   LANDING PAGE LOCK FLOW (index.html)
========================================================= */

function initLandingLock(){
  const enterBtn = document.getElementById("pt-enter-btn");
  const lockOverlay = document.getElementById("pt-lock");
  const lockForm = document.getElementById("pt-lock-form");
  const passInput = document.getElementById("pt-pass");
  const errEl = document.getElementById("pt-lock-error");

  if (!enterBtn || !lockOverlay || !lockForm || !passInput) return;

  function openOverlay(){
    lockOverlay.classList.remove("hidden");
    lockOverlay.setAttribute("aria-hidden", "false");
    setTimeout(() => passInput.focus(), 50);
  }

  function closeOverlay(){
    lockOverlay.classList.add("hidden");
    lockOverlay.setAttribute("aria-hidden", "true");
  }

  enterBtn.addEventListener("click", openOverlay);

  lockForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const code = (passInput.value || "").trim();

    if (!code){
      if (errEl) errEl.textContent = "Please enter an access code.";
      return;
    }

    if (code.toUpperCase() !== ACCESS_CODE){
      if (errEl) errEl.textContent = "Incorrect code.";
      return;
    }

    if (errEl) errEl.textContent = "";
    closeOverlay();

    // compatibility + robust navigation
    document.dispatchEvent(new Event("playtrix-unlocked"));
    window.location.href = "waylight.html";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lockOverlay.classList.contains("hidden")) closeOverlay();
  });
}

/* =========================================================
   CLOCK (24h + full date; Gaeilge option)
========================================================= */

function ordinalEN(n){
  const s = ["th","st","nd","rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function updateClock(){
  const timeEl = document.getElementById("pt-clock-time");
  const dateEl = document.getElementById("pt-clock-date");
  if (!timeEl || !dateEl) return;

  const now = new Date();
  const lang = document.documentElement.lang || "en";

  timeEl.textContent = now.toLocaleTimeString("en-GB", { hour:"2-digit", minute:"2-digit" });

  if (lang === "ga"){
    const weekday = now.toLocaleDateString("ga-IE", { weekday: "long" });
    const day = now.getDate();
    const month = now.toLocaleDateString("ga-IE", { month: "long" });
    const year = now.getFullYear();
    dateEl.textContent = `${weekday} ${day} ${month} ${year}`;
  } else {
    const weekday = now.toLocaleDateString("en-GB", { weekday: "long" });
    const day = ordinalEN(now.getDate());
    const month = now.toLocaleDateString("en-GB", { month: "long" });
    const year = now.getFullYear();
    dateEl.textContent = `${weekday} ${day} ${month} ${year}`;
  }
}

/* =========================================================
   SIMPLE I18N (labels)
========================================================= */

const I18N = {
  en: {
    personal_title:"Personal", personal_desc:"Administration, health, home, prayer, routines.", open_personal:"Open Personal",
    work_title:"Work", work_desc:"NHS, Digital, Private.", open_work:"Open Work",
    civic_title:"Civic", civic_desc:"WayLight Commonwealth, local missions, public-square work.", open_civic:"Open Civic",
    creative_title:"Creative", creative_desc:"Writing, music, design, websites, experiments, videos and TV.", open_creative:"Open Creative",
    systems_title:"Systems Centre", systems_desc:"WayLight systems, data, backups, devices, finances.", open_systems:"Open Systems",
    calendar_title:"Calendar", calendar_desc:"Link to master diary.", open_calendar:"Open Calendar",
    tools_title:"Tool Shed", tools_desc:"MS / Google / coding / messaging / banking / news.", open_tools:"Open Tools",
    waylight_title:"WayLight", waylight_desc:"Pipeline · Pending Board · Missions.", open_waylight:"Open WayLight",
    methods_title:"Methods", methods_desc:"Life · Agile · Kaizen · Lean · Benedictine.", open_methods:"Open Methods",
    phil_title:"Philosophy and Religion", phil_desc:"Faith, ethics, formation, prayer, and first principles.", open_phil:"Open Philosophy & Religion"
  },
  ga: {
    personal_title:"Pearsanta", personal_desc:"Riarachán, sláinte, baile, urnaí, nósanna.", open_personal:"Oscail Pearsanta",
    work_title:"Obair", work_desc:"NHS, Digiteach, Príobháideach.", open_work:"Oscail Obair",
    civic_title:"Sibhialta", civic_desc:"Comhlathas WayLight, misean áitiúil, obair sa spás poiblí.", open_civic:"Oscail Sibhialta",
    creative_title:"Cruthaitheach", creative_desc:"Scríbhneoireacht, ceol, dearadh, suíomhanna, turgnaimh, físeáin agus teilifís.", open_creative:"Oscail Cruthaitheach",
    systems_title:"Lárchóras", systems_desc:"Córais WayLight, sonraí, cúltacaí, gléasanna, airgeadas.", open_systems:"Oscail Córais",
    calendar_title:"Féilire", calendar_desc:"Nasc le príomh-dhialann.", open_calendar:"Oscail Féilire",
    tools_title:"Scioból Uirlisí", tools_desc:"MS / Google / códú / teachtaireachtaí / baincéireacht / nuacht.", open_tools:"Oscail Scioból Uirlisí",
    waylight_title:"WayLight", waylight_desc:"Píblíne · Bord ar feitheamh · Misin.", open_waylight:"Oscail WayLight",
    methods_title:"Modhanna", methods_desc:"Saol · Agile · Kaizen · Lean · Beinidicteach.", open_methods:"Oscail Modhanna",
    phil_title:"Fealsúnacht agus Creideamh", phil_desc:"Creideamh, eitic, foirmiú, urnaí, agus príomhsmaointe.", open_phil:"Oscail Fealsúnacht & Creideamh"
  }
};

function applyI18n(){
  const lang = document.documentElement.lang || "en";
  const dict = I18N[lang] || I18N.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

/* =========================================================
   MODAL + “ADD LINKS” (console buttons now work)
========================================================= */

function initModal(){
  const modal = document.getElementById("wl-modal");
  if (!modal) return;

  const titleEl = document.getElementById("wl-modal-title");
  const descEl = document.getElementById("wl-modal-desc");
  const closeBtn = document.getElementById("wl-modal-close");
  const addBtn = document.getElementById("wl-add-link");
  const clearBtn = document.getElementById("wl-clear-links");
  const listEl = document.getElementById("wl-links-list");

  let currentKey = null;

  function loadStore(){
    return JSON.parse(localStorage.getItem("wlc-links") || "{}");
  }
  function saveStore(store){
    localStorage.setItem("wlc-links", JSON.stringify(store));
  }

  function openModal(key, title, desc){
    currentKey = key;
    titleEl.textContent = title;
    descEl.textContent = desc;
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden","false");
    renderLinks();
  }

  function closeModal(){
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden","true");
    currentKey = null;
  }

  function renderLinks(){
    const store = loadStore();
    const links = (store[currentKey] || []);
    listEl.innerHTML = "";

    if (!links.length){
      const li = document.createElement("li");
      li.textContent = "No links yet.";
      listEl.appendChild(li);
      return;
    }

    links.forEach((l, idx) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = l.label;
      li.appendChild(a);

      const del = document.createElement("button");
      del.className = "pt-lock-button";
      del.type = "button";
      del.style.marginLeft = "0.5rem";
      del.textContent = "Remove";
      del.addEventListener("click", () => {
        const s = loadStore();
        s[currentKey] = (s[currentKey] || []).filter((_, i) => i !== idx);
        saveStore(s);
        renderLinks();
      });

      li.appendChild(del);
      listEl.appendChild(li);
    });
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal(); });

  addBtn.addEventListener("click", () => {
    if (!currentKey) return;
    const label = (prompt("Link label (e.g., Outlook, SharePoint, Notes):") || "").trim();
    if (!label) return;
    const url = (prompt("URL (include https://):") || "").trim();
    if (!url) return;

    const store = loadStore();
    store[currentKey] = store[currentKey] || [];
    store[currentKey].push({ label, url });
    saveStore(store);
    renderLinks();
  });

  clearBtn.addEventListener("click", () => {
    if (!currentKey) return;
    if (!confirm("Clear all links for this panel?")) return;
    const store = loadStore();
    store[currentKey] = [];
    saveStore(store);
    renderLinks();
  });

  // wire buttons
  document.querySelectorAll(".pt-card-open[data-open]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-open");
      const card = btn.closest(".pt-card");
      const title = card?.querySelector(".pt-card-title")?.textContent || "Panel";
      const desc = card?.querySelector(".pt-card-text")?.textContent || "";
      openModal(key, title, desc);
    });
  });
}

/* =========================================================
   INIT
========================================================= */

initThemeToggle();
initLangToggle();
applyI18n();

initLandingLock();
initModal();

updateClock();
setInterval(updateClock, 60 * 1000);
