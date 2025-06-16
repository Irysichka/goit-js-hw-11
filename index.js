import{a as u,S as d,i}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(n){return u.get("https://pixabay.com/api/",{params:{key:50837011-c76ef50eb9608d9d0e02a1779,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:60}}).then(o=>o.data)}const p=new d(".gallery a"),c=document.querySelector(".loader"),l=document.querySelector(".gallery");function m(n){const o=n.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </li>`).join("");l.innerHTML("beforeend",o),p.refresh()}function h(){l.innerHTML=""}function y(){c.classList.remove("hidden")}function g(){c.classList.add("hidden")}const b=document.querySelector(".form"),L=document.querySelector("#input-search");b.addEventListener("submit",v);function v(n){n.preventDefault();const o=L.value.trim();if(o===""){i.warning({position:"topLeft",message:"Please enter a search term!"});return}y(),h(),f(o).then(r=>{if(r.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(r.hits)}).catch(r=>{i.error({message:"An error occurred. Please try again later.",position:"topRight"}),console.error(r)}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
