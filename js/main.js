
const R=matchMedia("(prefers-reduced-motion:reduce)").matches;
document.querySelector(".burger").onclick=e=>{const u=document.querySelector("nav ul");e.target.setAttribute("aria-expanded",u.classList.toggle("open"))};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.2});
document.querySelectorAll(".rv").forEach(n=>io.observe(n));const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.firstElementChild.classList.add("in");cio.unobserve(e.target)}}),{threshold:.15});document.querySelectorAll(".car").forEach(c=>{const w=document.createElement("div");c.replaceWith(w);w.append(c);cio.observe(w)});
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const s=[...e.target.parentNode.children].indexOf(e.target);setTimeout(()=>e.target.classList.add("on"),R?0:s*450);so.unobserve(e.target)}}),{threshold:.6});
document.querySelectorAll(".step").forEach(n=>so.observe(n));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const t=e.target,n=+t.dataset.n,s=t.dataset.s||"";if(R){t.textContent=(t.dataset.p||"")+n+s;return}
let st;const f=ts=>{st=st||ts;const p=Math.min((ts-st)/1600,1);t.textContent=(t.dataset.p||"")+Math.round(n*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6});
document.querySelectorAll("[data-n]").forEach(n=>co.observe(n));
const car=document.querySelector(".car img");
if(car&&!R)addEventListener("scroll",()=>{const r=car.parentNode.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)car.style.transform="translateY("+(-(r.top/innerHeight)*7)+"%)"},{passive:true});
const f=document.getElementById("qf");
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);const m="Hi Proguard, I would like a quote.\nName: "+d.get("n")+"\nPhone: "+d.get("p")+"\nService: "+d.get("s")+"\nArea: "+d.get("a")+"\nDetails: "+d.get("d");open("https://wa.me/27748161393?text="+encodeURIComponent(m),"_blank")};
