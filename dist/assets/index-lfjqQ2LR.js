(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const f=document.querySelector(".input"),m=document.querySelector(".button"),p=document.querySelector('input[value="users"]'),d=document.querySelector(".cards"),a=document.querySelector(".message"),y=document.querySelector(".loader"),u=e=>{let s="";e!=null&&e.length?e===null?s="":(e==null?void 0:e.length)>0&&e.map(n=>{s+=`<article class="card">
            <img class = "img" loading = "lazy" src ="${n.avatar_url}" />
            <h2  class="name">${n.login} </h2>  
    </article>`}):s="<p> No results Found </p>",d.innerHTML=s};function l(e){y.classList.toggle("hidden",!e),e&&u(null)}const i=e=>{a.innerText=e?`${e}`:""},h="https://api.github.com/search/users?q=",g=(e,s)=>{const n=s?"+type:user":"+type:org";if(e.trim())l(!0),i(""),fetch(`${h}${e}${n}`).then(o=>o.json()).then(o=>u(o.items)).finally(()=>l(!1));else{i("Your Input is Empty fill its please");return}};m.addEventListener("click",e=>{e.preventDefault(),g(f.value,p.checked)});