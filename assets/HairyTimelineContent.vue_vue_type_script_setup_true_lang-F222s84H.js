import{d as f,x as g,u as h,b as p,c as k,h as n,t as r,f as a,N as y,e as C,w as v,k as _,O as l,g as $,F as B,n as N}from"./app-CB06-Kky.js";function Y(t){var s=t==null?0:t.length;return s?t[s-1]:void 0}const b={class:"mb-1 text-size-3.5 mt-1.5 flex items-center"},w={class:"mr-2.2 dark:text-gray-500 text-gray-400"},V=f({__name:"HairyTimelineContent",props:{post:{},format:{default:"YYYY-MM-DD"}},setup(t){const s=g(),u=h();function d(e=[]){u.push({path:`/categories/${l(e).join("/")}`})}return(e,o)=>{var i;const m=N;return p(),k(B,null,[n("div",b,[n("div",w,r(a(y)(e.post.date).format(e.format)),1),(i=e.post.categories)!=null&&i.length?(p(),C(m,{key:0,bordered:"",type:"white",onClick:o[0]||(o[0]=c=>d(e.post.categories))},{default:v(()=>[_(r(a(s).t(a(Y)(a(l)(e.post.categories))||"")),1)]),_:1})):$("v-if",!0)]),n("a",{class:"cursor-pointer text-size-4",onClick:o[1]||(o[1]=c=>e.$router.push(e.post.path||""))},r(e.post.title),1)],64)}}});export{V as _};