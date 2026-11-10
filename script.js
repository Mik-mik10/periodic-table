const rawElements = `
1|H|Hydrogen|1|1|nonmetal|1.008
2|He|Helium|18|1|noble-gas|4.0026
3|Li|Lithium|1|2|alkali|6.94
4|Be|Beryllium|2|2|alkaline|9.0122
5|B|Boron|13|2|metalloid|10.81
6|C|Carbon|14|2|nonmetal|12.011
7|N|Nitrogen|15|2|nonmetal|14.007
8|O|Oxygen|16|2|nonmetal|15.999
9|F|Fluorine|17|2|nonmetal|18.998
10|Ne|Neon|18|2|noble-gas|20.180
11|Na|Sodium|1|3|alkali|22.990
12|Mg|Magnesium|2|3|alkaline|24.305
13|Al|Aluminium|13|3|post-transition|26.982
14|Si|Silicon|14|3|metalloid|28.085
15|P|Phosphorus|15|3|nonmetal|30.974
16|S|Sulfur|16|3|nonmetal|32.06
17|Cl|Chlorine|17|3|nonmetal|35.45
18|Ar|Argon|18|3|noble-gas|39.948
19|K|Potassium|1|4|alkali|39.098
20|Ca|Calcium|2|4|alkaline|40.078
21|Sc|Scandium|3|4|transition|44.956
22|Ti|Titanium|4|4|transition|47.867
23|V|Vanadium|5|4|transition|50.942
24|Cr|Chromium|6|4|transition|51.996
25|Mn|Manganese|7|4|transition|54.938
26|Fe|Iron|8|4|transition|55.845
27|Co|Cobalt|9|4|transition|58.933
28|Ni|Nickel|10|4|transition|58.693
29|Cu|Copper|11|4|transition|63.546
30|Zn|Zinc|12|4|transition|65.38
31|Ga|Gallium|13|4|post-transition|69.723
32|Ge|Germanium|14|4|metalloid|72.630
33|As|Arsenic|15|4|metalloid|74.922
34|Se|Selenium|16|4|nonmetal|78.971
35|Br|Bromine|17|4|nonmetal|79.904
36|Kr|Krypton|18|4|noble-gas|83.798
37|Rb|Rubidium|1|5|alkali|85.468
38|Sr|Strontium|2|5|alkaline|87.62
39|Y|Yttrium|3|5|transition|88.906
40|Zr|Zirconium|4|5|transition|91.224
41|Nb|Niobium|5|5|transition|92.906
42|Mo|Molybdenum|6|5|transition|95.95
43|Tc|Technetium|7|5|transition|[98]
44|Ru|Ruthenium|8|5|transition|101.07
45|Rh|Rhodium|9|5|transition|102.91
46|Pd|Palladium|10|5|transition|106.42
47|Ag|Silver|11|5|transition|107.87
48|Cd|Cadmium|12|5|transition|112.41
49|In|Indium|13|5|post-transition|114.82
50|Sn|Tin|14|5|post-transition|118.71
51|Sb|Antimony|15|5|metalloid|121.76
52|Te|Tellurium|16|5|metalloid|127.60
53|I|Iodine|17|5|nonmetal|126.90
54|Xe|Xenon|18|5|noble-gas|131.29
55|Cs|Caesium|1|6|alkali|132.91
56|Ba|Barium|2|6|alkaline|137.33
57|La|Lanthanum|3|6|lanthanide|138.91
58|Ce|Cerium|4|6|lanthanide|140.12
59|Pr|Praseodymium|5|6|lanthanide|140.91
60|Nd|Neodymium|6|6|lanthanide|144.24
61|Pm|Promethium|7|6|lanthanide|[145]
62|Sm|Samarium|8|6|lanthanide|150.36
63|Eu|Europium|9|6|lanthanide|151.96
64|Gd|Gadolinium|10|6|lanthanide|157.25
65|Tb|Terbium|11|6|lanthanide|158.93
66|Dy|Dysprosium|12|6|lanthanide|162.50
67|Ho|Holmium|13|6|lanthanide|164.93
68|Er|Erbium|14|6|lanthanide|167.26
69|Tm|Thulium|15|6|lanthanide|168.93
70|Yb|Ytterbium|16|6|lanthanide|173.05
71|Lu|Lutetium|17|6|lanthanide|174.97
72|Hf|Hafnium|4|6|transition|178.49
73|Ta|Tantalum|5|6|transition|180.95
74|W|Tungsten|6|6|transition|183.84
75|Re|Rhenium|7|6|transition|186.21
76|Os|Osmium|8|6|transition|190.23
77|Ir|Iridium|9|6|transition|192.22
78|Pt|Platinum|10|6|transition|195.08
79|Au|Gold|11|6|transition|196.97
80|Hg|Mercury|12|6|transition|200.59
81|Tl|Thallium|13|6|post-transition|204.38
82|Pb|Lead|14|6|post-transition|207.2
83|Bi|Bismuth|15|6|post-transition|208.98
84|Po|Polonium|16|6|post-transition|[209]
85|At|Astatine|17|6|metalloid|[210]
86|Rn|Radon|18|6|noble-gas|[222]
87|Fr|Francium|1|7|alkali|[223]
88|Ra|Radium|2|7|alkaline|[226]
89|Ac|Actinium|3|7|actinide|[227]
90|Th|Thorium|4|7|actinide|232.04
91|Pa|Protactinium|5|7|actinide|231.04
92|U|Uranium|6|7|actinide|238.03
93|Np|Neptunium|7|7|actinide|[237]
94|Pu|Plutonium|8|7|actinide|[244]
95|Am|Americium|9|7|actinide|[243]
96|Cm|Curium|10|7|actinide|[247]
97|Bk|Berkelium|11|7|actinide|[247]
98|Cf|Californium|12|7|actinide|[251]
99|Es|Einsteinium|13|7|actinide|[252]
100|Fm|Fermium|14|7|actinide|[257]
101|Md|Mendelevium|15|7|actinide|[258]
102|No|Nobelium|16|7|actinide|[259]
103|Lr|Lawrencium|17|7|actinide|[266]
104|Rf|Rutherfordium|4|7|transition|[267]
105|Db|Dubnium|5|7|transition|[268]
106|Sg|Seaborgium|6|7|transition|[269]
107|Bh|Bohrium|7|7|transition|[270]
108|Hs|Hassium|8|7|transition|[277]
109|Mt|Meitnerium|9|7|transition|[278]
110|Ds|Darmstadtium|10|7|transition|[281]
111|Rg|Roentgenium|11|7|transition|[282]
112|Cn|Copernicium|12|7|transition|[285]
113|Nh|Nihonium|13|7|post-transition|[286]
114|Fl|Flerovium|14|7|post-transition|[289]
115|Mc|Moscovium|15|7|post-transition|[290]
116|Lv|Livermorium|16|7|post-transition|[293]
117|Ts|Tennessine|17|7|metalloid|[294]
118|Og|Oganesson|18|7|noble-gas|[294]
`;

const elements = rawElements.trim().split("\n").map((line) => {
  const [number, symbol, name, group, period, category, mass] = line.split("|");
  return {
    number: Number(number),
    symbol,
    name,
    group: Number(group),
    period: Number(period),
    category,
    mass,
  };
});

const layouts = {
  table: {
    title: "THE CLASSIC ARRANGEMENT",
    description: "Elements arranged by atomic number, period, and group",
  },
  sphere: {
    title: "A SPHERICAL PERSPECTIVE",
    description: "The elements orbit a shared center",
  },
  helix: {
    title: "THE ELEMENTAL HELIX",
    description: "118 elements, connected in a winding sequence",
  },
  grid: {
    title: "EVERY ELEMENT, ONE GRID",
    description: "A direct, atomic-number view of all elements",
  },
};

const layout = document.querySelector("#element-layout");
const visualization = document.querySelector("#visualization");
const searchInput = document.querySelector("#element-search");
const resultCount = document.querySelector("#result-count");
const viewTitle = document.querySelector("#view-title");
const emptyState = document.querySelector("#empty-state");
const detailPlaceholder = document.querySelector(".detail-placeholder");
const detailContent = document.querySelector("#detail-content");
let activeView = "table";
let activeCategory = "all";
let query = "";
let selectedNumber = null;

function categoryLabel(category) {
  return category.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function categoryClass(category) {
  return `cat-${category}`;
}

function spherePosition(index, total) {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / (total - 1)) * 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = goldenAngle * index;
  return {
    x: `${50 + Math.cos(theta) * radius * 39}%`,
    y: `${50 + y * 39}%`,
    scale: `${0.78 + (y + 1) * 0.16}`,
  };
}

function matchesSearch(element) {
  return !query || element.name.toLowerCase().includes(query)
    || element.symbol.toLowerCase().includes(query)
    || String(element.number) === query;
}

function createCard(element, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `element-card ${categoryClass(element.category)}`;
  card.dataset.number = String(element.number);
  card.dataset.category = element.category;
  card.setAttribute("aria-label", `${element.name}, atomic number ${element.number}`);
  card.setAttribute("aria-pressed", String(selectedNumber === element.number));
  card.style.setProperty("--index", String(index));
  card.style.setProperty("--depth", String(4 + (index % 5) * 2));
  card.style.setProperty("--angle", index % 2 === 0 ? "-5deg" : "5deg");
  card.style.setProperty("--col", String(element.group));
  card.style.setProperty("--row", String(element.period));
  if ((element.category === "lanthanide" && element.number > 57)
    || (element.category === "actinide" && element.number > 89)) {
    card.dataset.fblock = "true";
    card.style.setProperty("--col", String(element.group - 1));
  }
  if (activeView === "sphere") {
    const position = spherePosition(index, elements.length);
    card.style.setProperty("--x", position.x);
    card.style.setProperty("--y", position.y);
    card.style.setProperty("--scale", position.scale);
  }
  card.style.setProperty("--entrance-delay", `${(index % 36) * 12}ms`);
  card.innerHTML = `<span class="atomic-number">${element.number}</span><span class="element-symbol">${element.symbol}</span><span class="element-name">${element.name}</span>`;
  card.addEventListener("click", () => selectElement(element));
  return card;
}

function renderElements() {
  layout.replaceChildren(...elements.map(createCard));
  layout.dataset.view = activeView;
  visualization.dataset.view = activeView;
  const visibleElements = elements.filter((element) => {
    return matchesSearch(element) && (activeCategory === "all" || element.category === activeCategory);
  });
  layout.querySelectorAll(".element-card").forEach((card) => {
    const element = elements[Number(card.dataset.number) - 1];
    const matches = matchesSearch(element) && (activeCategory === "all" || element.category === activeCategory);
    card.classList.toggle("filtered-out", !matches);
    card.hidden = activeView === "helix" && !matches;
  });
  resultCount.textContent = `${visibleElements.length} ELEMENT${visibleElements.length === 1 ? "" : "S"}`;
  emptyState.hidden = visibleElements.length > 0;
  visualization.setAttribute("aria-label", `${layouts[activeView].description}, ${visibleElements.length} elements shown`);
  viewTitle.textContent = layouts[activeView].title;
  if (activeView === "helix") {
    layout.querySelectorAll(".element-card").forEach((card) => {
      const element = elements[Number(card.dataset.number) - 1];
      card.hidden = !matchesSearch(element) || (activeCategory !== "all" && element.category !== activeCategory);
    });
  }
}

function selectElement(element) {
  selectedNumber = element.number;
  layout.querySelectorAll(".element-card").forEach((card) => {
    const selected = Number(card.dataset.number) === element.number;
    card.classList.toggle("selected", selected);
    card.setAttribute("aria-pressed", String(selected));
  });
  detailPlaceholder.hidden = true;
  detailContent.hidden = false;
  detailContent.innerHTML = `
    <div class="detail-symbol ${categoryClass(element.category)}">${element.symbol}</div>
    <div class="detail-heading"><strong>${element.name}</strong><span>ATOMIC NUMBER ${element.number}</span></div>
    <div class="detail-property"><span>ATOMIC MASS</span><strong>${element.mass} u</strong></div>
    <div class="detail-property"><span>GROUP / PERIOD</span><strong>${element.group} / ${element.period}</strong></div>
    <div class="detail-property"><span>CATEGORY</span><strong>${categoryLabel(element.category)}</strong></div>
  `;
}

document.querySelectorAll(".view-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.view;
    document.querySelectorAll(".view-button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderElements();

    visualization.addEventListener("pointermove", (event) => {
      if (activeView === "sphere") return;
      const bounds = visualization.getBoundingClientRect();
      const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
      const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
      visualization.style.setProperty("--tilt-x", `${vertical * -7}deg`);
      visualization.style.setProperty("--tilt-y", `${horizontal * 9}deg`);
    });

    visualization.addEventListener("pointerleave", () => {
      visualization.style.setProperty("--tilt-x", "0deg");
      visualization.style.setProperty("--tilt-y", "0deg");
    });
    if (selectedNumber) {
      selectElement(elements[selectedNumber - 1]);
    }
  });
});

document.querySelectorAll(".legend-item").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll(".legend-item").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    renderElements();
    if (selectedNumber) {
      const selected = elements[selectedNumber - 1];
      if (activeCategory === "all" || selected.category === activeCategory) {
        selectElement(selected);
      } else {
        selectedNumber = null;
        detailContent.hidden = true;
        detailPlaceholder.hidden = false;
      }
    }
  });
});

searchInput.addEventListener("input", () => {
  query = searchInput.value.trim().toLowerCase();
  renderElements();
  if (selectedNumber) {
    const selected = elements[selectedNumber - 1];
    if (matchesSearch(selected) && (activeCategory === "all" || selected.category === activeCategory)) {
      selectElement(selected);
    } else {
      selectedNumber = null;
      detailContent.hidden = true;
      detailPlaceholder.hidden = false;
    }
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    query = "";
    renderElements();
    searchInput.blur();
  }
});

renderElements();
