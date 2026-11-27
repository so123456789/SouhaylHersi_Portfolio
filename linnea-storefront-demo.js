/* ============ ICONS ============ */
const ICON = {
  leaf: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M10 38C6 22 16 8 38 8C38 30 24 40 10 38Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M10 38C16 30 24 22 34 14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4h2l2.2 11.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 8H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="20" r="1.3" fill="currentColor"/><circle cx="17.5" cy="20" r="1.3" fill="currentColor"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle cx="10.5" cy="10.5" r="6.2" stroke="currentColor" stroke-width="1.8"/><path d="M20 20l-4.5-4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M20 12H4M11 5l-7 7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M5 13l4 4 10-10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  checkBig: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><circle cx="24" cy="24" r="21" stroke="currentColor" stroke-width="2.3"/><path d="M14 25l7 7 13-14" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  star: `<svg viewBox="0 0 24 24" width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.4l-5.4 2.9 1-6.1L3.2 10l6.1-.9L12 3.5Z" fill="currentColor"/></svg>`,
  empty: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="46" height="46"><path d="M10 16h28l-2.5 22a3 3 0 0 1-3 2.7H15.5a3 3 0 0 1-3-2.7L10 16Z" stroke="currentColor" stroke-width="1.8"/><path d="M17 16v-3a7 7 0 0 1 14 0v3" stroke="currentColor" stroke-width="1.8"/></svg>`
};

const CAT_COLOR = {
  "Tops":       {bg:"var(--sage-tint)",  fg:"var(--sage-dark)"},
  "Bottoms":    {bg:"var(--amber-tint)", fg:"var(--amber-dark)"},
  "Outerwear":  {bg:"var(--blush-tint)", fg:"var(--blush-dark)"},
  "Footwear":   {bg:"var(--sage-tint)",  fg:"var(--sage-dark)"},
  "Accessories":{bg:"var(--amber-tint)", fg:"var(--amber-dark)"}
};
const CAT_EMOJI = { "Tops":"👕", "Bottoms":"👖", "Outerwear":"🧥", "Footwear":"👟", "Accessories":"👜" };
const TAG_COLOR = { "New":"var(--sage-dark)", "Popular":"var(--amber-dark)", "Featured":"var(--blush-dark)", "Sale":"var(--error)" };
const TAG_EMOJI = { "New":"✨", "Popular":"🔥", "Featured":"💫", "Sale":"🏷️" };
const TAGS = ["New","Popular","Featured","Sale"];
const CATEGORIES = ["Tops","Bottoms","Outerwear","Footwear","Accessories"];

/* ============ DATA ============ */
const PRODUCTS = [
  {id:1,  name:"T-Shirt",             category:"Tops",        price:48,  rating:4.6, emoji:"👕", tag:"Featured", sizes:["XS","S","M","L","XL"], image:photo("photo-1521572163474-6864f9cf17ab")},
  {id:2,  name:"Tank Top",            category:"Tops",        price:24,  rating:4.3, emoji:"🎽", tag:"New",      sizes:["XS","S","M","L"], image:photo("photo-1503341504253-dff4815485f1")},
  {id:3,  name:"Silk Blouse",         category:"Tops",        price:68,  rating:4.8, emoji:"👚", tag:"Popular",  sizes:["S","M","L","XL"], image:photo("photo-1525507119028-ed4c629a60a3")},
  {id:4,  name:"Wide-Leg Trousers",   category:"Bottoms",     price:58,  rating:4.5, emoji:"👖", tag:"Featured", sizes:["XS","S","M","L","XL"], image:photo("photo-1523381210434-271e8be1f52b")},
  {id:5,  name:"Fitness Shorts",      category:"Bottoms",     price:36,  rating:4.1, emoji:"🩳", tag:"New",      sizes:["S","M","L"], image:photo("photo-1566206091558-7f218b696731")},
  {id:6,  name:"Dress",               category:"Bottoms",     price:52,  rating:4.7, emoji:"👗", tag:"Popular",  sizes:["XS","S","M","L"], image:photo("photo-1595777457583-95e059d581b8")},
  {id:7,  name:"Quilted Jacket",      category:"Outerwear",   price:92,  rating:4.6, emoji:"🧥", tag:"New",      sizes:["S","M","L","XL"], image:photo("photo-1591047139829-d91aecb6caea")},
  {id:8,  name:"Wool Trench Coat",    category:"Outerwear",   price:120, rating:4.9, emoji:"🥼", tag:"Featured", sizes:["XS","S","M","L","XL"], image:photo("photo-1539109136881-3be0616acf4b")},
  {id:9,  name:"Cardigan",            category:"Outerwear",   price:64,  rating:4.4, emoji:"🧶", tag:"Sale",     sizes:["S","M","L"], image:photo("photo-1490481651871-ab68de25d43d")},
  {id:10, name:"Running Sneakers",    category:"Footwear",    price:54,  rating:4.5, emoji:"👟", tag:"Popular",  sizes:["XS","S","M","L","XL"], image:photo("photo-1542291026-7eec264c27ff")},
  {id:11, name:"Leather Sandals",     category:"Footwear",    price:46,  rating:4.2, emoji:"👡", tag:"Sale",     sizes:["S","M","L","XL"], image:photo("photo-1603487742131-4160ec999306")},
  {id:12, name:"Winter Boots",        category:"Footwear",    price:88,  rating:4.7, emoji:"🥾", tag:"Featured", sizes:["XS","S","M","L","XL"], image:photo("photo-1608231387042-66d1773070a5")},
  {id:13, name:"Straw Tote",          category:"Accessories", price:38,  rating:4.4, emoji:"👜", tag:"New",      sizes:["One size"], image:photo("photo-1590874103328-eac38a683ce7")},
  {id:14, name:"Diamond Earrings",    category:"Accessories", price:22,  rating:4.6, emoji:"💎", tag:"Popular",  sizes:["One size"], image:photo("photo-1535632066927-ab7c9ab60908")},
  {id:15, name:"Silk Scarf",           category:"Accessories", price:28,  rating:4.3, emoji:"🧣", tag:"Sale",     sizes:["One size"], image:photo("photo-1495385794356-15371f348c31")},
];

function photo(id){
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=85`;
}

const CART_STORAGE_KEY = "linnea-demo-cart";
function loadCart(){
  try{
    const saved = JSON.parse(sessionStorage.getItem(CART_STORAGE_KEY) || "[]");
    if(!Array.isArray(saved)) return [];
    return saved.filter(item => {
      const product = PRODUCTS.find(p => p.id === item?.id);
      return product && Number.isInteger(item.qty) && item.qty > 0 && product.sizes.includes(item.size);
    }).map(({id, qty, size}) => ({id, qty, size}));
  }catch{
    return [];
  }
}
function saveCart(){
  try{
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  }catch{}
}

/* ============ STATE ============ */
const state = {
  view: "shop",
  productId: null,
  drawerOpen: false,
  searchTerm: "",
  categoryFilter: "",
  priceFilter: "",
  ratingFilter: 0,
  tagFilter: "",
  sortBy: "featured",
  selectedSize: {},         // productId -> chosen size string
  cart: loadCart(),          // {id, qty, size}
  checkoutStep: 0,
};

const $app = document.getElementById("app");

/* ============ HELPERS ============ */
function money(n){ return "$" + n.toFixed(2); }
function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[character]));
}
function findProduct(id){ return PRODUCTS.find(p => p.id === id); }
function cartCount(){ return state.cart.reduce((s,c)=>s+c.qty,0); }
function cartTotal(){ return state.cart.reduce((s,c)=> s + findProduct(c.id).price * c.qty, 0); }
function starString(rating){ const full = Math.round(rating); return "★".repeat(full) + "☆".repeat(5-full); }

function priceMatches(price, tier){
  if(!tier) return true;
  if(tier === "under30") return price < 30;
  if(tier === "30to60") return price >= 30 && price <= 60;
  if(tier === "60to100") return price > 60 && price <= 100;
  if(tier === "100plus") return price > 100;
  return true;
}
const PRICE_LABEL = { "under30":"Under $30", "30to60":"$30 – $60", "60to100":"$60 – $100", "100plus":"$100+" };

function filteredItems(){
  const term = state.searchTerm.trim().toLowerCase();
  const items = PRODUCTS.filter(p => {
    const matchesCat = !state.categoryFilter || p.category === state.categoryFilter;
    const matchesTerm = !term || `${p.name} ${p.category} ${p.tag}`.toLowerCase().includes(term);
    const matchesPrice = priceMatches(p.price, state.priceFilter);
    const matchesRating = p.rating >= state.ratingFilter;
    const matchesTag = !state.tagFilter || p.tag === state.tagFilter;
    return matchesCat && matchesTerm && matchesPrice && matchesRating && matchesTag;
  });
  if(state.sortBy === "price-low") return items.sort((a,b) => a.price - b.price);
  if(state.sortBy === "price-high") return items.sort((a,b) => b.price - a.price);
  if(state.sortBy === "rating") return items.sort((a,b) => b.rating - a.rating);
  return items;
}

function addToCart(id, openDrawer = false){
  const p = findProduct(id);
  const size = state.selectedSize[id] || p.sizes[0];
  const existing = state.cart.find(c => c.id === id && c.size === size);
  if(existing) existing.qty += 1;
  else state.cart.push({id, qty:1, size});
  saveCart();
  state.drawerOpen = openDrawer;
  render();
}
function changeQty(id, size, delta){
  const row = state.cart.find(c => c.id === id && c.size === size);
  if(!row) return;
  row.qty += delta;
  if(row.qty <= 0) state.cart = state.cart.filter(c => !(c.id === id && c.size === size));
  saveCart();
  render();
}
function removeFromCart(id, size){
  state.cart = state.cart.filter(c => !(c.id === id && c.size === size));
  saveCart();
  render();
}

/* ============ RENDER: NAV ============ */
function renderNav(current){
  return `
  <div class="store-note"><span>LINNEA / STUDY 01</span><span>Portfolio prototype · Sample products · No orders processed</span></div>
  <div class="nav-sticky-wrap" id="navStickyWrap">
    <div class="nav-inner">
      <div class="nav">
        <button class="brand" data-nav="shop" aria-label="Linnea home">${ICON.leaf.replace('width="100%" height="100%"','width="28" height="28"')}<span>linnea</span></button>
        <nav class="nav-links" aria-label="Store navigation">
          <button class="nav-link ${current==='shop'?'active':''}" data-nav="shop" ${current==='shop'?'aria-current="page"':''}>Shop</button>
          <button class="nav-link ${current==='about'?'active':''}" data-nav="about" ${current==='about'?'aria-current="page"':''}>About</button>
          <button class="nav-link ${current==='contact'?'active':''}" data-nav="contact" ${current==='contact'?'aria-current="page"':''}>Project info</button>
          <a class="nav-link" href="index.html">Portfolio</a>
        </nav>
        <div class="nav-tools">
        <label class="nav-search">
          ${ICON.search}
          <input id="searchInput" type="search" aria-label="Search products" placeholder="Search pieces" value="${escapeHtml(state.searchTerm)}" />
        </label>
        <button class="cart-btn" id="openCartBtn" aria-label="Open bag, ${cartCount()} ${cartCount()===1?'item':'items'}" aria-expanded="${state.drawerOpen}">${ICON.cart}
          <span class="cart-label">Bag</span>
          <span class="cart-count">${cartCount()}</span>
        </button>
        </div>
      </div>
    </div>
  </div>`;
}

/* ============ RENDER: FILTERS ============ */
function renderSidebar(){
  const anyActive = state.categoryFilter || state.priceFilter || state.ratingFilter || state.tagFilter || state.searchTerm;
  return `
  <div class="filter-shell">
    <div class="category-row" role="group" aria-label="Filter by category">
      <button class="category-button ${!state.categoryFilter?'active':''}" data-sidebar-cat="" aria-pressed="${!state.categoryFilter}">All pieces</button>
      ${CATEGORIES.map(c => `<button class="category-button ${state.categoryFilter===c?'active':''}" data-sidebar-cat="${c}" aria-pressed="${state.categoryFilter===c}">${c}</button>`).join("")}
    </div>
    <div class="facet-row" aria-label="Additional filters">
      <span class="filter-label">Filter</span>
      <details class="facet-menu">
        <summary>Collection ${state.tagFilter?`<span class="facet-active">1</span>`:""}</summary>
        <div class="facet-options">
          <button class="sidebar-btn ${!state.tagFilter?'active':''}" data-sidebar-tag="" aria-pressed="${!state.tagFilter}">All collections</button>
          ${TAGS.map(t => `<button class="sidebar-btn ${state.tagFilter===t?'active':''}" data-sidebar-tag="${t}" aria-pressed="${state.tagFilter===t}">${t==="New"?"New arrivals":t}</button>`).join("")}
        </div>
      </details>
      <details class="facet-menu">
        <summary>Price ${state.priceFilter?`<span class="facet-active">1</span>`:""}</summary>
        <div class="facet-options">
          <button class="sidebar-btn ${!state.priceFilter?'active':''}" data-sidebar-price="" aria-pressed="${!state.priceFilter}">Any price</button>
          ${Object.keys(PRICE_LABEL).map(k => `<button class="sidebar-btn ${state.priceFilter===k?'active':''}" data-sidebar-price="${k}" aria-pressed="${state.priceFilter===k}">${PRICE_LABEL[k]}</button>`).join("")}
        </div>
      </details>
      <details class="facet-menu">
        <summary>Rating ${state.ratingFilter?`<span class="facet-active">1</span>`:""}</summary>
        <div class="facet-options">
          <button class="sidebar-btn ${state.ratingFilter===0?'active':''}" data-sidebar-rating="0" aria-pressed="${state.ratingFilter===0}">Any rating</button>
          <button class="sidebar-btn ${state.ratingFilter===4?'active':''}" data-sidebar-rating="4" aria-pressed="${state.ratingFilter===4}">4★ and up</button>
          <button class="sidebar-btn ${state.ratingFilter===4.5?'active':''}" data-sidebar-rating="4.5" aria-pressed="${state.ratingFilter===4.5}">4.5★ and up</button>
        </div>
      </details>
      ${anyActive ? `<button class="sidebar-clear" id="sidebarClearBtn">Clear all</button>` : ""}
    </div>
  </div>`;
}

/* ============ RENDER: ACTIVE CHIPS + GRID ============ */
function renderActiveChips(){
  return `
  <div class="chips">
    ${state.categoryFilter ? `<span class="chip">${state.categoryFilter}<button data-clear="cat">${ICON.x}</button></span>` : ""}
    ${state.searchTerm ? `<span class="chip">“${escapeHtml(state.searchTerm)}”<button aria-label="Clear search" data-clear="term">${ICON.x}</button></span>` : ""}
    ${state.priceFilter ? `<span class="chip">${PRICE_LABEL[state.priceFilter]}<button data-clear="price">${ICON.x}</button></span>` : ""}
    ${state.ratingFilter ? `<span class="chip">${state.ratingFilter}★ & up<button data-clear="rating">${ICON.x}</button></span>` : ""}
    ${state.tagFilter ? `<span class="chip">${state.tagFilter==="New"?"New Arrivals":state.tagFilter}<button data-clear="tagf">${ICON.x}</button></span>` : ""}
  </div>
  <div class="results-controls">
    <div class="result-line" aria-live="polite">${filteredItems().length} item${filteredItems().length===1?'':'s'} found</div>
    <label class="sort-control">Sort by
      <select id="sortProducts" aria-label="Sort products">
        <option value="featured" ${state.sortBy==="featured"?"selected":""}>Featured</option>
        <option value="price-low" ${state.sortBy==="price-low"?"selected":""}>Price: low to high</option>
        <option value="price-high" ${state.sortBy==="price-high"?"selected":""}>Price: high to low</option>
        <option value="rating" ${state.sortBy==="rating"?"selected":""}>Top rated</option>
      </select>
    </label>
  </div>
  `;
}

function renderGrid(){
  const items = filteredItems();
  if(items.length === 0){
    return `<div class="empty-state">${ICON.empty}<div>No items match. Try removing a filter or changing your search.</div></div>`;
  }
  return `<div class="grid">
    ${items.map(p => {
      const col = CAT_COLOR[p.category];
      const currentSize = state.selectedSize[p.id] || p.sizes[0];
      const inCart = state.cart.find(c => c.id === p.id && c.size === currentSize);
      const hasRealSizes = !(p.sizes.length === 1 && p.sizes[0] === "One size");
      return `
      <article class="card">
        <div class="card-art" style="--art-color:${col.bg}">
          <button class="card-art-link" data-product-open="${p.id}" aria-label="View ${p.name} details">
            <img src="${p.image}" alt="" loading="lazy" />
          </button>
          <span class="card-tag tag-${p.tag.toLowerCase()}">${p.tag}</span>
        </div>
        <div class="card-body">
          <div class="card-cat">${p.category}</div>
          <button class="card-title-link card-name" data-product-open="${p.id}">${p.name}</button>
          <div class="card-rating" aria-label="Sample rating ${p.rating.toFixed(1)} out of 5"><span aria-hidden="true">${starString(p.rating)}</span><span class="rating-value">${p.rating.toFixed(1)}</span><span class="rating-sample">sample</span></div>
          ${hasRealSizes ? `
          <div class="size-row" role="group" aria-label="Choose a size for ${p.name}">
            ${p.sizes.map(s => `<button class="size-chip ${currentSize===s?'active':''}" data-size-pick="${p.id}" data-size-val="${s}" aria-pressed="${currentSize===s}" aria-label="Size ${s}">${s}</button>`).join("")}
          </div>` : `<div class="size-hint">One size fits most</div>`}
          <div class="card-bottom">
            <div class="price">${money(p.price)}</div>
            <button class="add-btn ${inCart ? 'added':''}" data-add="${p.id}" aria-label="${inCart?'Added':'Add'} ${p.name} to bag">
              ${inCart ? ICON.check : ICON.plus}<span>${inCart ? 'In bag' : 'Add'}</span>
            </button>
          </div>
        </div>
      </article>`;
    }).join("")}
  </div>`;
}

function renderProductView(){
  const p = findProduct(state.productId);
  if(!p) return renderShopView();
  const hasRealSizes = !(p.sizes.length === 1 && p.sizes[0] === "One size");
  const currentSize = state.selectedSize[p.id] || p.sizes[0];
  return `
  ${renderNav('shop')}
  <main class="product-detail">
    <button class="back-link" id="backToCollectionBtn">${ICON.back} Back to collection</button>
    <div class="product-detail-grid">
      <div class="product-detail-image">
        <img src="${p.image}" alt="${p.name}" fetchpriority="high" />
        <span class="card-tag tag-${p.tag.toLowerCase()}">${p.tag}</span>
      </div>
      <section class="product-detail-copy" aria-labelledby="product-title">
        <p class="product-detail-kicker">${p.category} / THE EVERYDAY EDIT</p>
        <h1 id="product-title">${p.name}</h1>
        <div class="product-detail-rating" aria-label="Sample rating ${p.rating.toFixed(1)} out of 5">
          <span aria-hidden="true">${starString(p.rating)}</span>
          <span>${p.rating.toFixed(1)} <span class="rating-sample">sample rating</span></span>
        </div>
        <p class="product-detail-price">${money(p.price)}</p>
        <p class="product-detail-description">An easy piece from the Linnea ${p.category.toLowerCase()} edit, selected for everyday styling.</p>
        ${hasRealSizes ? `
          <div class="product-size-heading"><span>Choose a size</span><span>${currentSize}</span></div>
          <div class="product-size-row" role="group" aria-label="Choose a size for ${p.name}">
            ${p.sizes.map(s => `<button class="size-chip ${currentSize===s?'active':''}" data-detail-size="${s}" aria-pressed="${currentSize===s}" aria-label="Size ${s}">${s}</button>`).join("")}
          </div>` : `<p class="product-size-heading">Size <span>One size fits most</span></p>`}
        <button class="product-add-btn" id="addDetailToBagBtn">${ICON.plus}<span>Add to bag</span></button>
        <p class="product-detail-note">Sample catalog item · No orders or payments are processed.</p>
      </section>
    </div>
  </main>
  ${renderCartDrawer()}`;
}

function renderShopView(){
  return `
  ${renderNav('shop')}
  <main>
    <section class="campaign-hero" aria-labelledby="campaign-title">
      <div class="campaign-copy">
        <p class="campaign-kicker"><span>LINNEA</span> / THE EVERYDAY EDIT</p>
        <h1 id="campaign-title">Dress for <em>your own</em> kind of day.</h1>
        <p>Easy layers, thoughtful details, and a wardrobe of possibilities.</p>
        <a class="campaign-link" href="#collection">Explore the collection <span aria-hidden="true">↘</span></a>
        <span class="campaign-caption">Concept collection · Sample catalog</span>
      </div>
      <div class="campaign-image">
        <img src="${photo("photo-1515886657613-9f3515b0c78f")}" alt="Model wearing a bright everyday outfit" fetchpriority="high" />
        <span class="image-index">01 / 04</span>
        <span class="image-note">Pieces for wherever today goes</span>
      </div>
    </section>
    <section class="catalog-section" id="collection" aria-labelledby="collection-title">
      <div class="catalog-heading">
        <div><p class="catalog-kicker">THE LINNEA COLLECTION</p><h2 id="collection-title">Find your next favourite.</h2></div>
        <p class="catalog-note">15 sample pieces <span>·</span> Independent storefront concept</p>
      </div>
      ${renderSidebar()}
      <div class="catalog-results">
        <div class="results-meta">${renderActiveChips()}</div>
        ${renderGrid()}
      </div>
    </section>
  </main>
  ` + renderCartDrawer();
}

/* ============ RENDER: ABOUT ============ */
function renderAboutView(){
  return `
  ${renderNav('about')}
  <main class="shell info-page">
    <div class="static-page">
      <p class="catalog-kicker">THE IDEA</p>
      <h1>About Linnea</h1>
      <p class="lead">Linnea is a fictional storefront concept built to explore product discovery and a straightforward shopping flow. Product names, pricing, ratings, and brand details are sample content.</p>
      <div class="about-grid">
        <div class="about-card">
          <div class="about-emoji">🧵</div>
          <h3>Product discovery</h3>
          <p>Browse a compact sample catalog with category, price, collection, and rating filters.</p>
        </div>
        <div class="about-card">
          <div class="about-emoji">🌿</div>
          <h3>Shopping flow</h3>
          <p>Choose product sizes, add items to a cart, and review quantities before checkout.</p>
        </div>
        <div class="about-card">
          <div class="about-emoji">🤝</div>
          <h3>Prototype only</h3>
          <p>No real products are sold, and no payment or customer information is collected.</p>
        </div>
      </div>
    </div>
  </main>
  ${renderCartDrawer()}`;
}

/* ============ RENDER: CONTACT ============ */
function renderContactView(){
  return `
  ${renderNav('contact')}
  <main class="shell info-page">
    <div class="static-page">
      <p class="catalog-kicker">PROJECT NOTES</p>
      <h1>About this prototype</h1>
      <p class="lead">This page is an independent portfolio demonstration. It has no store backend, contact service, or payment integration.</p>
      <div class="about-grid">
        <div class="about-card"><div class="about-emoji">01</div><h3>Sample catalog</h3><p>Products, prices, ratings, and stock details are illustrative only.</p></div>
        <div class="about-card"><div class="about-emoji">02</div><h3>Local interactions</h3><p>Search, filters, cart updates, and checkout state run in this browser session.</p></div>
        <div class="about-card"><div class="about-emoji">03</div><h3>No submission</h3><p>No personal details, payment data, orders, or messages are sent.</p></div>
      </div>
    </div>
  </main>
  ${renderCartDrawer()}`;
}


/* ============ RENDER: CART DRAWER ============ */
function renderCartDrawer(){
  const items = state.cart.map(c => ({...findProduct(c.id), qty:c.qty, size:c.size}));
  return `
  <div class="overlay ${state.drawerOpen?'open':''}" id="drawerOverlay" aria-hidden="${!state.drawerOpen}"></div>
  <aside class="drawer ${state.drawerOpen?'open':''}" role="dialog" aria-modal="true" aria-labelledby="drawerTitle" aria-hidden="${!state.drawerOpen}" ${state.drawerOpen?'':'inert'}>
    <div class="drawer-head">
      <div><p class="drawer-kicker">LINNEA / THE EDIT</p><h2 id="drawerTitle">Your bag <span>(${cartCount()})</span></h2></div>
      <button class="icon-btn" id="closeDrawerBtn" aria-label="Close bag">${ICON.x}</button>
    </div>
    <div class="drawer-items">
      ${items.length === 0 ? `<div class="empty-state">${ICON.empty}<div>Your bag is empty.</div></div>` :
      items.map(it => {
        const sizeLabel = it.size && it.size !== "One size" ? ` · Size ${it.size}` : "";
        return `
        <div class="cart-row">
          <div class="cart-thumb"><img src="${it.image}" alt="" loading="lazy" /></div>
          <div class="cart-info">
            <div class="name">${it.name}</div>
            <div class="meta">${money(it.price)} · ${it.category}${sizeLabel}</div>
            <div class="qty-row" aria-label="Quantity">
              <button class="qty-btn" data-qty="-1" data-id="${it.id}" data-size="${it.size}" aria-label="Remove one ${it.name}">−</button>
              <span>${it.qty}</span>
              <button class="qty-btn" data-qty="1" data-id="${it.id}" data-size="${it.size}" aria-label="Add one ${it.name}">+</button>
            </div>
          </div>
          <button class="remove-x" data-remove="${it.id}" data-remove-size="${it.size}" aria-label="Remove ${it.name} from bag">${ICON.x}</button>
        </div>`;
      }).join("")}
    </div>
    <div class="drawer-foot">
      <div class="subtotal-row"><span>Subtotal</span><span>${money(cartTotal())}</span></div>
      <button class="checkout-btn" id="goCheckoutBtn" ${items.length===0?'disabled':''}>Checkout ${ICON.arrow}</button>
    </div>
  </aside>`;
}

/* ============ RENDER: CHECKOUT ============ */
const STEP_LABELS = ["Review", "Demo checkout", "Complete"];

function renderStepper(){
  return `<div class="stepper">
    ${STEP_LABELS.map((label,i) => {
      const cls = i < state.checkoutStep ? "done" : (i === state.checkoutStep ? "current" : "");
      return `
      <div class="step ${cls}">
        ${i>0 ? `<div class="step-line ${i<=state.checkoutStep?'done':''}"></div>` : ""}
        <div class="dot">${i < state.checkoutStep ? ICON.check : i+1}</div>
        <div class="label">${label}</div>
      </div>`;
    }).join("")}
  </div>`;
}

function renderCheckoutStepReview(){
  const items = state.cart.map(c => ({...findProduct(c.id), qty:c.qty, size:c.size}));
  return `
  <div class="panel">
    <h3>Review your bag</h3>
    <p class="sub">Review the sample cart before continuing. This prototype does not submit orders.</p>
    ${items.map(it => `<div class="review-item"><span>${it.emoji} ${it.name}${it.size && it.size!=="One size" ? ` (${it.size})` : ""} × ${it.qty}</span><span>${money(it.price*it.qty)}</span></div>`).join("")}
    <div class="order-line total"><span>Total</span><span>${money(cartTotal())}</span></div>
    <div class="panel-actions">
      <button class="ghost-btn" id="backToShopBtn">${ICON.back} Back to shop</button>
      <button class="primary-btn" id="toShippingBtn">Continue ${ICON.arrow}</button>
    </div>
  </div>`;
}

function renderCheckoutStepDemo(){
  return `
  <div class="panel">
    <h3>Demo checkout</h3>
    <p class="sub">No shipping or payment details are needed. Completing this step only changes the local demo state; no order will be placed.</p>
    <div class="order-line total"><span>Sample cart total</span><span>${money(cartTotal())}</span></div>
    <div class="panel-actions">
      <button class="ghost-btn" id="backStepBtn">${ICON.back} Back to bag</button>
      <button class="primary-btn" id="completeDemoBtn">Complete demo ${ICON.arrow}</button>
    </div>
  </div>`;
}

function renderCheckoutStepConfirmation(){
  return `
  <div class="panel confirm-wrap">
    <div class="confirm-icon">${ICON.checkBig}</div>
    <h3>Demo complete</h3>
    <p>No order was placed, no payment was processed, and no information was sent.</p>
    <div class="panel-actions" style="justify-content:center; margin-top:22px;">
      <button class="ghost-btn" id="doneShoppingBtn">Continue shopping</button>
    </div>
  </div>`;
}

function renderCheckoutView(){
  let stepPanel;
  if(state.checkoutStep === 0) stepPanel = renderCheckoutStepReview();
  else if(state.checkoutStep === 1) stepPanel = renderCheckoutStepDemo();
  else stepPanel = renderCheckoutStepConfirmation();

  return `
  <div class="checkout-wrap">
    ${state.checkoutStep < 2 ? `<button class="back-link" id="exitCheckoutBtn">${ICON.back} Back to shop</button>` : ""}
    ${renderStepper()}
    ${stepPanel}
  </div>`;
}

/* ============ MASTER RENDER ============ */
function render(){
  if(state.view === "checkout"){ $app.innerHTML = renderCheckoutView(); bindCheckout(); return; }
  if(state.view === "about"){ $app.innerHTML = renderAboutView(); bindCommon(); return; }
  if(state.view === "contact"){ $app.innerHTML = renderContactView(); bindCommon(); return; }
  if(state.view === "product"){ $app.innerHTML = renderProductView(); bindCommon(); bindProduct(); return; }
  $app.innerHTML = renderShopView();
  bindCommon();
  bindShop();
}

/* ============ BINDERS ============ */
// shared across shop / about / contact: nav (links, search, cart drawer)
function bindCommon(){
  document.querySelectorAll("[data-nav]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.view = btn.dataset.nav;
      state.drawerOpen = false;
      render();
    });
  });

  const searchInput = document.getElementById("searchInput");
  if(searchInput){
    searchInput.addEventListener("input", (e) => {
      const leavingCurrentView = state.view !== "shop";
      state.searchTerm = e.target.value;
      state.view = "shop";
      const caretPos = e.target.selectionStart;
      render();
      const newInput = document.getElementById("searchInput");
      if(newInput){ newInput.focus(); newInput.setSelectionRange(caretPos, caretPos); }
      if(leavingCurrentView) document.getElementById("collection")?.scrollIntoView();
    });
  }

  const openCart = document.getElementById("openCartBtn");
  if(openCart) openCart.addEventListener("click", () => { state.drawerOpen = true; render(); });
  const overlay = document.getElementById("drawerOverlay");
  if(overlay) overlay.addEventListener("click", () => { state.drawerOpen = false; render(); });
  const closeBtn = document.getElementById("closeDrawerBtn");
  if(closeBtn) closeBtn.addEventListener("click", () => { state.drawerOpen = false; render(); });
  if(bindCommon.escapeHandler) document.removeEventListener("keydown", bindCommon.escapeHandler);
  bindCommon.escapeHandler = (event) => {
    if(event.key === "Escape" && state.drawerOpen){ state.drawerOpen = false; render(); }
  };
  document.addEventListener("keydown", bindCommon.escapeHandler);

  document.querySelectorAll("[data-qty]").forEach(btn => {
    btn.addEventListener("click", () => changeQty(parseInt(btn.dataset.id), btn.dataset.size, parseInt(btn.dataset.qty)));
  });
  document.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(parseInt(btn.dataset.remove), btn.dataset.removeSize));
  });

  const goCheckout = document.getElementById("goCheckoutBtn");
  if(goCheckout) goCheckout.addEventListener("click", () => {
    if(state.cart.length === 0) return;
    state.drawerOpen = false;
    state.view = "checkout";
    state.checkoutStep = 0;
    render();
  });

  setupStickyNav();
}

function setupStickyNav(){
  const wrap = document.getElementById("navStickyWrap");
  if(!wrap) return;
  if(setupStickyNav.handler) window.removeEventListener("scroll", setupStickyNav.handler);
  const onScroll = () => {
    if(window.scrollY > 8) wrap.classList.add("scrolled");
    else wrap.classList.remove("scrolled");
  };
  onScroll();
  setupStickyNav.handler = onScroll;
  window.addEventListener("scroll", onScroll, { passive: true });
}

function bindShop(){
  document.querySelectorAll("[data-sidebar-cat]").forEach(btn => {
    btn.addEventListener("click", () => { state.categoryFilter = btn.dataset.sidebarCat; render(); });
  });
  document.querySelectorAll("[data-sidebar-tag]").forEach(btn => {
    btn.addEventListener("click", () => { state.tagFilter = btn.dataset.sidebarTag; render(); });
  });
  document.querySelectorAll("[data-sidebar-price]").forEach(btn => {
    btn.addEventListener("click", () => { state.priceFilter = btn.dataset.sidebarPrice; render(); });
  });
  document.querySelectorAll("[data-sidebar-rating]").forEach(btn => {
    btn.addEventListener("click", () => { state.ratingFilter = parseFloat(btn.dataset.sidebarRating); render(); });
  });
  const clearBtn = document.getElementById("sidebarClearBtn");
  if(clearBtn) clearBtn.addEventListener("click", () => {
    state.categoryFilter = ""; state.searchTerm = ""; state.priceFilter = ""; state.ratingFilter = 0; state.tagFilter = "";
    render();
  });

  document.querySelectorAll("[data-clear]").forEach(btn => {
    btn.addEventListener("click", () => {
      const w = btn.dataset.clear;
      if(w === "cat") state.categoryFilter = "";
      if(w === "term") state.searchTerm = "";
      if(w === "price") state.priceFilter = "";
      if(w === "rating") state.ratingFilter = 0;
      if(w === "tagf") state.tagFilter = "";
      render();
    });
  });

  document.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.add)));
  });
  document.querySelectorAll("[data-product-open]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.productId = parseInt(btn.dataset.productOpen);
      state.view = "product";
      window.scrollTo(0, 0);
      render();
    });
  });
  const sortSelect = document.getElementById("sortProducts");
  if(sortSelect) sortSelect.addEventListener("change", () => {
    state.sortBy = sortSelect.value;
    render();
  });

  document.querySelectorAll("[data-size-pick]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedSize[parseInt(btn.dataset.sizePick)] = btn.dataset.sizeVal;
      render();
    });
  });
}

function bindProduct(){
  const backButton = document.getElementById("backToCollectionBtn");
  if(backButton) backButton.addEventListener("click", () => {
    state.view = "shop";
    render();
    window.scrollTo(0, document.getElementById("collection")?.offsetTop || 0);
  });
  document.querySelectorAll("[data-detail-size]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedSize[state.productId] = btn.dataset.detailSize;
      render();
    });
  });
  const addButton = document.getElementById("addDetailToBagBtn");
  if(addButton) addButton.addEventListener("click", () => addToCart(state.productId, true));
}

function bindCheckout(){
  const exitBtn = document.getElementById("exitCheckoutBtn");
  if(exitBtn) exitBtn.addEventListener("click", () => { state.view = "shop"; render(); });

  const backToShop = document.getElementById("backToShopBtn");
  if(backToShop) backToShop.addEventListener("click", () => { state.view = "shop"; render(); });

  const toShipping = document.getElementById("toShippingBtn");
  if(toShipping) toShipping.addEventListener("click", () => { state.checkoutStep = 1; render(); });

  const backStep = document.getElementById("backStepBtn");
  if(backStep) backStep.addEventListener("click", () => { state.checkoutStep = 0; render(); });

  const completeDemo = document.getElementById("completeDemoBtn");
  if(completeDemo) completeDemo.addEventListener("click", () => {
    state.cart = [];
    saveCart();
    state.checkoutStep = 2;
    render();
  });

  const doneBtn = document.getElementById("doneShoppingBtn");
  if(doneBtn) doneBtn.addEventListener("click", () => {
    state.view = "shop";
    state.checkoutStep = 0;
    render();
  });
}
render();