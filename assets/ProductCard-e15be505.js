import{r as s,S as d,_ as m,u as B,d as M,o as V,p as l,c as p,a as e,j as i,L as w,k as N,q as T}from"./index-8206ae57.js";import{u as _}from"./wishListApi-7fd48942.js";import{e as j}from"./discountCalculate-6ac54f3c.js";var v=s.forwardRef(function(a,t){var r={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return s.createElement(d,m({iconAttrs:r,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:t}),s.createElement("path",{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"}))});v.displayName="Heart";var x=s.forwardRef(function(a,t){var r={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return s.createElement(d,m({iconAttrs:r,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:t}),s.createElement("g",{"data-name":"Layer 2"},s.createElement("path",{d:"m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z","data-name":"search"})))});x.displayName="Search";var y=s.forwardRef(function(a,t){var r={fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor"};return s.createElement(d,m({iconAttrs:r,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:t}),s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"}))});y.displayName="ShoppingBag";const q=({product:a})=>{var b,k;const t=B(),{user:r}=M(n=>n==null?void 0:n.user);s.useState([]);const[E,{isSuccess:c,isError:D,error:P,isLoading:h}]=V(),[A,{isSuccess:g,isError:R,error:f,isLoading:L}]=_(),S=()=>{const n=r==null?void 0:r.email,o={product:a==null?void 0:a._id};A({userEmail:n,data:o})},C=()=>{const n=r==null?void 0:r.email,o={product:a==null?void 0:a._id};n?E({email:n,data:o}):T(a)};s.useEffect(()=>{c&&(l.dismiss(),t(p(!0)),l.success("Product added to cart",{id:"toast1"}))},[c]),s.useEffect(()=>{g?(t(p(!1)),l.dismiss(),l.success("Product added to wishlist",{id:"toast2"})):f&&l.success("Already in wishlist",{id:"toast2"})},[g,f]);const u=j(a);return e("div",{className:"max-w-[216px] rounded-md",children:i("div",{className:"group shadow relative  p-2",children:[e(w,{to:`/product-details/${a._id}`,className:"",children:e("img",{className:"h-[200px] w-full",src:(b=a==null?void 0:a.images)==null?void 0:b[0]})}),i("div",{className:" absolute top-10 right-0 p-2 hidden group-hover:flex flex-col gap-1 text-[1rem] ",children:[L?e(N,{}):e("button",{onClick:S,className:"p-2 bg-[#ccc] rounded-full cursor-pointer border border-transparent hover:border-[#ff4646] hover:text-white hover:bg-[#ff4646]",children:e(v,{size:20})}),e(w,{to:`/product-details/${a._id}`,className:"p-2 bg-[#ccc] rounded-full cursor-pointer border border-transparent hover:order-[#ff4646] hover:text-white hover:bg-[#ff4646]",children:e(x,{size:20})}),h?e(N,{}):e("button",{disabled:h,onClick:C,className:"p-2 bg-[#ccc] rounded-full cursor-pointer border border-transparent hover:border-[#ff4646] hover:text-white hover:bg-[#ff4646]",children:e(y,{size:20})})]}),i("div",{className:"text-center mt-2",children:[e("h3",{className:"truncate",children:a==null?void 0:a.name}),i("div",{className:"flex mt-1 gap-1 justify-center items-center flex-wrap ",children:[i("span",{className:"rating rating-sm rating-half mr-2",children:[e("input",{type:"radio",name:"rating-10",className:"bg-orange-500 mask mask-star-2 mask-half-1",disabled:!0}),e("input",{type:"radio",name:"rating-10",className:"bg-orange-500 mask mask-star-2 mask-half-2",disabled:!0}),e("input",{type:"radio",name:"rating-10",className:"bg-orange-500 mask mask-star-2 mask-half-1",disabled:!0}),e("input",{type:"radio",name:"rating-10",className:"bg-orange-500 mask mask-star-2 mask-half-2",disabled:!0}),e("input",{type:"radio",name:"rating-10",className:"bg-orange-500 mask mask-star-2 mask-half-1",disabled:!0}),e("input",{type:"radio",name:"rating-10",className:"bg-orange-500 mask mask-star-2 mask-half-2",disabled:!0}),e("input",{type:"radio",name:"rating-10",className:"bg-orange-500 mask mask-star-2 mask-half-1",disabled:!0,checked:!0}),e("input",{type:"radio",name:"rating-10",className:"bg-orange-500 mask mask-star-2 mask-half-2",disabled:!0}),e("input",{type:"radio",name:"rating-10",className:"bg-orange-500 mask mask-star-2 mask-half-1",disabled:!0}),e("input",{type:"radio",name:"rating-10",className:"bg-orange-500 mask mask-star-2 mask-half-2",disabled:!0})]}),i("span",{className:"text-[#999]",children:["(",(k=a==null?void 0:a.reviews)==null?void 0:k.length," Reviews)"]})]}),u?i("div",{className:"truncate",children:[i("del",{className:"old-price text-[#aaa]",children:["৳",a==null?void 0:a.price,".00"]}),i("ins",{className:"product-price font-bold ml-2.5 no-underline",children:["৳",u,".00"]})]}):e("strong",{children:a==null?void 0:a.price})]})]})})};export{q as P};