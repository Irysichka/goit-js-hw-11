import{a as u,S as d,i}from"./assets/vendor-Bz4lgVUE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(n){return u.get("https://pixabay.com/api/",{params:{key:"50837011-c76ef50eb9608d9d0e02a1779",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:60}}).then(o=>o.data)}const p=new d(".gallery a"),c=document.querySelector(".loader"),l=document.querySelector(".gallery");function m(n){const o=n.map(t=>`
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
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),p.refresh()}function h(){l.innerHTML=""}function y(){c.classList.remove("hidden")}function g(){c.classList.add("hidden")}const b=document.querySelector(".form"),L=document.querySelector("#input-search");b.addEventListener("submit",v);function v(n){n.preventDefault();const o=L.value.trim();if(o===""){i.warning({position:"topLeft",message:"Please enter a search term!"});return}y(),h(),f(o).then(t=>{if(t.data.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(data.hits)}).catch(t=>{i.error({message:"An error occurred. Please try again later.",position:"topRight"}),console.error(t)}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
