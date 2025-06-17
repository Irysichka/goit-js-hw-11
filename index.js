import{a as u,S as d,i}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function f(n){return u.get("https://pixabay.com/api/",{params:{key:"50837011-c76ef50eb9608d9d0e02a1779",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:60}}).then(r=>r.data)}const p=new d(".gallery a"),c=document.querySelector(".loader"),l=document.querySelector(".gallery");function m(n){const r=n.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t.likes}</p>
          <p><b>Views:</b> ${t.views}</p>
          <p><b>Comments:</b> ${t.comments}</p>
          <p><b>Downloads:</b> ${t.downloads}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),p.refresh()}function h(){l.innerHTML=""}function y(){c.classList.remove("hidden")}function g(){c.classList.add("hidden")}const b=document.querySelector(".form"),L=document.querySelector("#input-search");b.addEventListener("submit",v);function v(n){n.preventDefault();const r=L.value.trim();if(r===""){i.warning({position:"topLeft",message:"Please enter a search term!"});return}y(),h(),f(r).then(t=>{if(t.hits.length===0){i.info({message:`Sorry, there are no images matching your search ${r}. Please try again!`,position:"topRight"});return}m(t.hits)}).catch(t=>{i.error({message:"An error occurred. Please try again later.",position:"topRight"}),console.error(t)}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
