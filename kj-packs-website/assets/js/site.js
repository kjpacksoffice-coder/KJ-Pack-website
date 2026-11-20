(function(){
  const company = window.KJ_COMPANY || {};
  const products = window.KJ_PRODUCTS || [];
  const industries = window.KJ_INDUSTRIES || [];
  const testimonials = window.KJ_TESTIMONIALS || [];
  const nav = window.KJ_NAVIGATION || [];
  const $ = (s, root=document) => root.querySelector(s);
  const esc = (s="") => String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const waLink = (message="Hello KJ Packs, I would like to enquire about corrugated packaging.") =>
    `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
  const phoneLink = `tel:${company.phoneLink || ""}`;

  function header(){
    const current = location.pathname;
    const links = nav.map(n=>`<a href="${n.href}" class="${current===n.href?'active':''}">${esc(n.label)}</a>`).join("");
    return `<header class="site-header"><div class="container nav-wrap">
      <a class="brand" href="/index.html">
    <img src="/assets/images/kj-packs-logo.webp" alt="KJ Packs Logo"><span class="brand-text">
        <strong>KJ PACKS</strong>
        <small>CORRUGATED BOX MANUFACTURERS</small>
    </span>
      </a>
      <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
      <nav class="nav-links" aria-label="Main navigation">${links}</nav>
      <div class="nav-actions"><a class="btn btn-outline btn-sm call-btn" href="${phoneLink}">📞 Call Us</a><a class="btn btn-sm" href="${waLink()}">Get a Quote</a></div>
    </div></header>`;
  }
  function footer(){
    return `<footer class="site-footer"><div class="container"><div class="footer-grid">
      <div><a class="brand" href="/index.html"><img src="/assets/images/kj-packs-logo.webp" alt="KJ Packs Logo"><span>KJ PACKS<small style="color:#c9c7c3">CORRUGATED BOX MANUFACTURERS</small></span></a><p style="margin-top:17px">Custom corrugated packaging solutions for industrial and bulk requirements across Tamil Nadu and Kerala.</p></div>
      <div><h3>Explore</h3><div class="footer-links"><a href="/about.html">About KJ Packs</a><a href="/products.html">Products</a><a href="/industries.html">Industries</a><a href="/manufacturing.html">Manufacturing</a><a href="/blog/index.html">Blogs</a></div></div>
      <div><h3>Contact</h3><div class="footer-links"><a href="${phoneLink}">${esc(company.phoneDisplay)}</a><a href="mailto:${esc(company.email)}">${esc(company.email)}</a><a href="/contact.html">Contact details and map</a></div></div>
      <div><h3>Factory Address</h3><p>${esc(company.address)}</p><p>${esc(company.hours)}</p><p>Serving ${esc(company.coverage)}</p></div>
    </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} KJ Packs. All rights reserved.</span><span>Corrugated packaging solutions · Coimbatore, Tamil Nadu</span></div></div></footer>
    <a class="whatsapp-float" href="${waLink()}" target="_blank" rel="noopener" aria-label=""><span>Chat with us</span><span style="color:#000000;">&#128488;</span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" aria-label="WhatsApp" role="img">
  <path fill="#25D366" d="M16 2.5A13.4 13.4 0 0 0 4.45 22.68L2.5 29.5l7-1.84A13.4 13.4 0 1 0 16 2.5Z"/>
  <path fill="#fff" d="M16 5a10.9 10.9 0 0 0-9.3 16.6l.3.48-1.15 4.2 4.3-1.13.45.27A10.9 10.9 0 1 0 16 5Zm6.1 15.5c-.26.73-1.5 1.4-2.1 1.5-.55.1-1.25.14-2.02-.1-.47-.15-1.08-.35-1.85-.7-3.25-1.4-5.35-4.65-5.52-4.87-.16-.22-1.32-1.76-1.32-3.36s.82-2.38 1.12-2.7c.3-.33.65-.41.86-.41h.62c.2 0 .47-.07.73.55.27.64.92 2.24 1 2.4.08.17.13.36.03.57-.1.22-.16.36-.32.55-.16.19-.34.41-.49.55-.16.16-.33.33-.14.66.19.33.85 1.4 1.82 2.27 1.25 1.1 2.3 1.45 2.63 1.62.33.17.52.14.7-.08.19-.22.8-.94 1.02-1.27.22-.33.43-.28.73-.17.3.11 1.9.9 2.23 1.07.33.17.55.25.63.39.08.14.08.8-.18 1.53Z"/>
</svg>
</a>`;
  }
  function shell(){
    const h=$("#site-header"), f=$("#site-footer");
    if(h) h.innerHTML=header();
    if(f) f.innerHTML=footer();
    const toggle=$(".menu-toggle"), links=$(".nav-links");
    if(toggle&&links) toggle.addEventListener("click",()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕":"☰";});
  }
  function productCards(list=products){
    return list.map(p=>`<article class="product-card"><a href="/products/${p.slug}.html"><img src="${p.image}" alt="${esc(p.name)} corrugated packaging box" loading="lazy"><div class="card-body"><h3>${esc(p.name)}</h3><p>${esc(p.short)}</p><span class="text-link">View product details →</span></div></a></article>`).join("");
  }
  function industryCards(){
    const doubled=[...industries,...industries];
    return doubled.map(i=>`<article class="industry-card"><img src="${i.image}" alt="${esc(i.name)} industry packaging" loading="lazy"><h3>${esc(i.name)}</h3></article>`).join("");
  }
  function testimonialsView(){
    const el=$("#testimonials-list"); if(!el)return;
    if(!testimonials.length){el.innerHTML=`<div class="testimonial-placeholder">Customer testimonials will appear here after genuine customer feedback is added to <b>content/testimonials.js</b>. Do not publish placeholder or invented reviews.</div>`;return;}
    el.innerHTML=testimonials.map(t=>`<article class="feature-card"><p>“${esc(t.quote)}”</p><b>${esc(t.name)}</b><small>${esc(t.company||"Customer")}</small></article>`).join("");
  }
  function blogCards(){
    const el=$("#blog-list"); if(!el)return;
    (window.KJ_BLOGS||[]).forEach(b=>{el.insertAdjacentHTML("beforeend",`<article class="blog-card"><a href="${b.url}"><img src="${b.image}" alt="${esc(b.title)}" loading="lazy"><div class="card-body"><div class="blog-meta">${esc(b.date)}</div><h3>${esc(b.title)}</h3><p>${esc(b.excerpt)}</p><span class="text-link">Read article →</span></div></a></article>`);});
  }
  function productDetail(){
    const root=$("#product-detail"); if(!root)return;
    const slug=root.dataset.slug;
    const p=products.find(x=>x.slug===slug);
    if(!p){root.innerHTML="<p>Product not found.</p>";return;}
    document.title=`${p.name} | KJ Packs`;
    const desc=p.description;
    root.innerHTML=`<div class="content-grid"><div><img class="product-detail-image" src="${p.image}" alt="${esc(p.name)}"><div class="pill-row">${p.constructions.map(x=>`<span class="pill">${esc(x)}</span>`).join("")}</div></div>
    <div><div class="breadcrumb"><a href="/products.html">Products</a> / ${esc(p.name)}</div><span class="eyebrow">Custom industrial packaging</span><h1 style="font-size:clamp(28px,4vw,44px)">${esc(p.name)}</h1><p>${esc(desc)}</p><p>${esc(company.moq)}</p><h3>Available options</h3><ul class="check-list"><li>Custom dimensions based on your product</li><li>Inner or outer dimension specification</li><li>Plain, single-colour and multi-colour printing</li><li>Multiple board construction options</li></ul><a class="btn" href="#quote-form">Request a quote</a></div></div>
    <section class="section" style="padding-bottom:0"><div class="section-head"><h2>Request a quotation</h2><p>Share your box dimensions and order requirements. Your enquiry will be prepared in WhatsApp.</p></div>${quoteForm(p.name)}</section>`;
    wireQuoteForms();
  }
  function quoteForm(selected=""){
    return `<form class="quote-form panel" id="quote-form">
      <div class="form-grid">
        <div class="field full"><label>Box / product type *</label><select name="product" required><option value="">Select product</option>${products.map(p=>`<option ${p.name===selected?"selected":""}>${esc(p.name)}</option>`).join("")}<option>Other / custom packaging</option></select></div>
        <div class="field"><label>Length *</label><input name="length" type="number" min="0" step="any" required placeholder="Length"></div>
        <div class="field"><label>Breadth *</label><input name="breadth" type="number" min="0" step="any" required placeholder="Breadth"></div>
        <div class="field"><label>Height *</label><input name="height" type="number" min="0" step="any" required placeholder="Height"></div>
        <div class="field"><label>Dimension type *</label><select name="dimensionType" required><option value="Outer dimensions">Outer dimensions</option><option value="Inner dimensions">Inner dimensions</option></select></div>
        <div class="field"><label>Measurement unit *</label><select name="unit"><option>Inches</option><option>CM</option><option>MM</option></select></div>
        <div class="field"><label>Ply construction</label><select name="ply"><option value="Not specified">Select ply</option>${company.ply.map(p=>`<option>${esc(p)}</option>`).join("")}</select></div>
        <div class="field"><label>GSM</label><input name="gsm" placeholder="Optional"></div>
        <div class="field"><label>Bursting factor (BF)</label><input name="bf" placeholder="Optional"></div>
        <div class="field"><label>Printing *</label><select name="printing" required><option>Plain box</option><option>Single-colour printing</option><option>Multi-colour printing</option></select></div>
        <div class="field"><label>Quantity (boxes) *</label><input name="quantity" type="number" min="1" required placeholder="Required quantity"></div>
        <div class="field"><label>Delivery pincode *</label><input name="pincode" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" required placeholder="6-digit pincode"></div>
        <div class="field"><label>Company / person name *</label><input name="customer" required placeholder="Your name or company"></div>
        <div class="field"><label>Contact number *</label><input name="contact" type="tel" required placeholder="Mobile number"></div>
        <div class="field full"><label>Special requirements</label><textarea name="requirements" placeholder="Product details, usage, delivery timeline or any other specifications"></textarea></div>
        <div class="field full"><button class="btn" type="submit">Send quotation request on WhatsApp →</button><p class="form-note">Submitting opens WhatsApp with your enquiry details. Please review and press Send in WhatsApp to contact KJ Packs. MOQ depends on box size and specifications.</p><div class="form-status" aria-live="polite"></div></div>
      </div></form>`;
  }
  function wireQuoteForms(){
    document.querySelectorAll(".quote-form").forEach(form=>{
      if(form.dataset.bound)return;form.dataset.bound="1";
      form.addEventListener("submit",e=>{
        e.preventDefault();const data=new FormData(form);const v=k=>String(data.get(k)||"Not provided").trim();
        const msg=[
          "QUOTATION ENQUIRY — KJ PACKS","",
          `Product: ${v("product")}`,
          `Dimensions: L ${v("length")} × B ${v("breadth")} × H ${v("height")} ${v("unit")}`,
          `Dimension basis: ${v("dimensionType")}`,
          `Ply: ${v("ply")}`,`GSM: ${v("gsm")}`,`BF: ${v("bf")}`,
          `Printing: ${v("printing")}`,`Quantity: ${v("quantity")} boxes`,
          `Delivery pincode: ${v("pincode")}`,`Name / Company: ${v("customer")}`,
          `Contact: ${v("contact")}`,`Special requirements: ${v("requirements")}`,
          "",`Website: ${company.domain}`
        ].join("\n");
        const status=$(".form-status",form);if(status)status.textContent="Opening WhatsApp. Review the details and press Send to submit your enquiry.";
        window.open(waLink(msg),"_blank","noopener");
      });
    });
  }
  function contactForm(){
    document.querySelectorAll(".general-enquiry").forEach(form=>{
      form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);const msg=`Hello KJ Packs,\nName: ${d.get("name")}\nCompany: ${d.get("company")}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email")}\nEnquiry: ${d.get("message")}`;window.open(waLink(msg),"_blank","noopener");});
    });
  }
  window.KJ_FORM_WIRE = wireQuoteForms;
  document.addEventListener("DOMContentLoaded",()=>{
    shell();
    const pc=$("#product-cards");if(pc)pc.innerHTML=productCards();
    const it=$("#industry-track");if(it)it.innerHTML=industryCards();
    testimonialsView();blogCards();productDetail();wireQuoteForms();contactForm();
    document.querySelectorAll("[data-company]").forEach(el=>{const key=el.dataset.company;if(company[key])el.textContent=company[key];});
    document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
  });
})();
