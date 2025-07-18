import{a as c,S as d,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const f="50678696-ed6f097088bf5690dd98584b9",u="https://pixabay.com/api/";function m(e){const o={key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get(u,{params:o}).then(r=>r.data).catch(r=>{throw console.error("Error fetching images:",r),new Error("Failed to fetch images from Pixabay.")})}const p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(e){const o=document.querySelector(".gallery");if(!o){console.error("Gallery container not found.");return}const r=e.map(s=>`
        <li class="gallery-item">
            <a href="${s.largeImageURL}">
                <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}">
                <div class="image-info">
                    <div class="info-item">
                        <b>Likes</b>
                        <p>${s.likes}</p>
                    </div>
                    <div class="info-item">
                        <b>Views</b>
                        <p>${s.views}</p>
                    </div>
                    <div class="info-item">
                        <b>Comments</b>
                        <p>${s.comments}</p>
                    </div>
                    <div class="info-item">
                        <b>Downloads</b>
                        <p>${s.downloads}</p>
                    </div>
                </div>
            </a>
        </li>
    `).join("");o.insertAdjacentHTML("beforeend",r),p.refresh()}function g(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function h(){const e=document.querySelector(".loader");e&&e.classList.add("is-visible")}function b(){const e=document.querySelector(".loader");e&&e.classList.remove("is-visible")}const l=document.querySelector(".form"),v=l.elements["search-text"];l.addEventListener("submit",async e=>{e.preventDefault();const o=v.value.trim();if(o===""){n.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}g(),h();try{const r=await m(o);r.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:!1,close:!1,backgroundColor:"#ef4040",maxWidth:"432px",minHeight:"88px",html:!0}):y(r.hits)}catch(r){n.error({title:"Error",message:r.message||"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{b(),l.reset()}});
//# sourceMappingURL=index.js.map
