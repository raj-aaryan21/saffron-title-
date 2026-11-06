const MENU={
  "Starters":[
    ["Paneer tikka","Cottage cheese marinated in yogurt and spices, grilled in the tandoor.",280,1],
    ["Crispy corn chaat","Sweet corn, onion, lime and chaat masala.",190,1],
    ["Chicken seekh kebab","Minced chicken with herbs, cooked on skewers.",320,0],
    ["Dahi ke kebab","Soft hung-curd patties, pan-seared until golden.",240,1]],
  "Mains":[
    ["Dal makhani","Black lentils simmered overnight with butter and cream.",260,1],
    ["Butter chicken","Tandoori chicken in a tomato and butter gravy.",360,0],
    ["Palak paneer","Spinach gravy with soft paneer cubes.",290,1],
    ["Lamb rogan josh","Slow-cooked Kashmiri lamb curry.",420,0]],
  "Breads & rice":[
    ["Garlic naan","Rolled to order and baked in the tandoor.",70,1],
    ["Butter roti","Whole wheat bread brushed with butter.",40,1],
    ["Veg dum biryani","Basmati rice and vegetables sealed and steamed.",300,1],
    ["Chicken biryani","Layered rice and chicken cooked on slow heat.",380,0]],
  "Desserts":[
    ["Gulab jamun","Warm milk dumplings in cardamom syrup.",120,1],
    ["Rasmalai","Soft cheese discs in chilled saffron milk.",150,1],
    ["Gajar halwa","Carrot pudding with nuts and khoya.",140,1],
    ["Masala chai","Brewed with ginger and cardamom.",60,1]]
};
const tabs=document.querySelector(".tabs"),list=document.getElementById("menuList");
function show(cat){
  list.innerHTML=MENU[cat].map(i=>`<div class="item"><div><h3>${i[0]}${i[3]?'<span class="tag">VEG</span>':''}</h3><p>${i[1]}</p></div><span class="price">₹${i[2]}</span></div>`).join("");
  tabs.querySelectorAll(".tab").forEach(b=>b.setAttribute("aria-selected",b.dataset.c===cat));
}
Object.keys(MENU).forEach(c=>{
  const b=document.createElement("button");
  b.className="tab";b.textContent=c;b.dataset.c=c;b.setAttribute("role","tab");
  b.onclick=()=>show(c);tabs.appendChild(b);
});
show("Starters");

const f=document.getElementById("resForm"),ok=document.getElementById("ok");
f.d.min=new Date().toISOString().split("T")[0];
f.addEventListener("submit",e=>{
  e.preventDefault();
  ok.textContent=`Thank you, ${f.n.value}. We have received your request for ${f.g.value} on ${f.d.value} at ${f.t.value}.`;
  ok.classList.add("show");f.reset();
});
