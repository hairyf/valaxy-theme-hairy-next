import{_ as u}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-b0Ji9riL.js";import{_ as h}from"./HairyImage.vue_vue_type_script_setup_true_lang-CpF2Tym5.js";import{b as f,e as _,w as t,f as b,a as g,p as c,j as r,g as v,r as s,h as e,k as o}from"./app-CB06-Kky.js";import"./index-CJ79bB4y.js";const k=e("p",null,"将循环录音机放置在信号流不同的位置，需要按“SYSTEM系统”按钮，然后使用“PAGE页面”按钮翻到 Remote 设置页面：",-1),S=e("p",null,"屏幕的右上角则会显示循环录音机的位置。",-1),$=e("p",null,[o("如果显示 "),e("code",null,"Looper Loc.: Pre"),o(" 则循环录音机直接在输出后面")],-1),x=e("p",null,[o("这意味着"),e("code",null,"<Stomp>``<Stack>"),o(" 和 "),e("code",null,"<Effect>"),o(" 这些模块的效果都没有被录制：")],-1),y=e("p",null,[e("code",null,"Input - Looper - Stomp - Stack - Effects - Output")],-1),L=e("p",null,[o("当您要编辑音色而不必同时弹奏吉他时，可以使用 "),e("code",null,"Looper Loc.: Pre"),o(" 设置。")],-1),P=e("p",null,[o("如果设置 "),e("code",null,"Looper Loc.:Post"),o("，循环录音机会录制整个信号链的内容，包括所有单块和效果。")],-1),O=e("p",null,[e("code",null,"Input - Stomp - Stack - Effects - Looper - Output")],-1),D=e("p",null,"可以使用这种方法，首先录制一轨清音的信号，然后加入一轨失真音色。",-1),E=e("h2",{id:"record-stop-录音-停止",tabindex:"-1"},[o("Record & Stop（录音|停止） "),e("a",{class:"header-anchor",href:"#record-stop-录音-停止","aria-label":'Permalink to "Record & Stop（录音|停止）"'},"​")],-1),w=e("p",null,"REMOTE 的 Looper 踩钉可以激活循环录音机，LED 钉亮起，则代表循环录音模式已经被激活。",-1),j=e("p",null,"此时 1 号踩钉被用于录制音轨，踩下 1 号踩钉，开始录制第 1 轨循环录音，并确定循环录音的起点。",-1),N=e("p",null,"再踩下，将设置循环录音的终点，同时激活回放模式。可以踩下 2 号踩钉，来停止回放。",-1),K=e("h2",{id:"overdub-undo-叠录-撤销",tabindex:"-1"},[o("Overdub & Undo（叠录|撤销） "),e("a",{class:"header-anchor",href:"#overdub-undo-叠录-撤销","aria-label":'Permalink to "Overdub & Undo（叠录|撤销）"'},"​")],-1),R=e("p",null,"一共有三个用于特殊用途的踩钉，踩钉 3 号，只要踩下这个踩钉，就会触发之前的循环录音。",-1),T=e("p",null,"如果在回放循环录音时踩下此踩钉，循环录音将从头开始播放，在现场演出时，需要重新同步循环录音时非常有效。",-1),V=e("p",null,"踩钉 4 号，可以使循环录音反向播放。",-1),A=e("p",null,"循环录音未回放时，踩下踩钉时则下方的 LED 会亮起，在按下 1 号踩钉播放循环录音，则开始反向播放。",-1),U=e("p",null,"踩钉 5 号，用于半速播放循环录音。",-1),B=e("p",null,"循环录音未播放时，踩下踩钉时则下方的 LED 会亮起，在按下 1 号踩钉播放循环录音，则以一半的速度播放。",-1),G=e("blockquote",null,[e("p",null,"如果已经开始播放，将立即切换为反向或半速播放")],-1),M=e("h2",{id:"direct-overdub-直接叠录",tabindex:"-1"},[o("Direct Overdub（直接叠录） "),e("a",{class:"header-anchor",href:"#direct-overdub-直接叠录","aria-label":'Permalink to "Direct Overdub（直接叠录）"'},"​")],-1),C=e("p",null,"如果在设置循环录音结束点后，继续踩住踩钉 1 号，循环录音机则会立即进入叠录模式",-1),I=e("h2",{id:"double-speed-倍速",tabindex:"-1"},[o("Double Speed（倍速） "),e("a",{class:"header-anchor",href:"#double-speed-倍速","aria-label":'Permalink to "Double Speed（倍速）"'},"​")],-1),Z=e("p",null,"可以使用半速功能创建倍速版本，在录制开始前，踩下踩钉 5 号，录制时间将会翻倍，延长到 60 秒，录制结束后取消半速功能，可以以两倍的速度播放循环录音。",-1),W={__name:"looper",setup(q,{expose:p}){const l=JSON.parse('{"title":"Kemper（KPA）循环录音机","description":"","frontmatter":{"title":"Kemper（KPA）循环录音机","date":"2023-02-10T12:00:00.000Z","categories":["Notes","Guitar"],"tags":["guitar"]},"headers":[{"level":2,"title":"Record & Stop（录音|停止）","slug":"record-stop-录音-停止","link":"#record-stop-录音-停止","children":[]},{"level":2,"title":"Overdub & Undo（叠录|撤销）","slug":"overdub-undo-叠录-撤销","link":"#overdub-undo-叠录-撤销","children":[]},{"level":2,"title":"Direct Overdub（直接叠录）","slug":"direct-overdub-直接叠录","link":"#direct-overdub-直接叠录","children":[]},{"level":2,"title":"Double Speed（倍速）","slug":"double-speed-倍速","link":"#double-speed-倍速","children":[]}],"relativePath":"pages/posts/guitar/kpa/looper.md","path":"/home/runner/work/valaxy-theme-hairy-next/valaxy-theme-hairy-next/demo/pages/posts/guitar/kpa/looper.md","lastUpdated":1721091056000}'),i=g(),d=l.frontmatter||{};return i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},l.frontmatter||{}),c("pageData",l),c("valaxy:frontmatter",d),globalThis.$frontmatter=d,p({frontmatter:{title:"Kemper（KPA）循环录音机",date:"2023-02-10T12:00:00.000Z",categories:["Notes","Guitar"],tags:["guitar"]}}),(a,Y)=>{const n=h,m=u;return f(),_(m,{frontmatter:b(d)},{"main-content-md":t(()=>[k,r(n,{style:{"max-width":"1200px"},src:"https://pic.imgdb.cn/item/63e5bb3d4757feff339ab780.jpg"}),S,$,x,y,L,P,O,D,v(" more "),E,w,r(n,{style:{"max-width":"1200px"},src:"https://pic.imgdb.cn/item/63e5bef04757feff339fe5a3.jpg"}),j,N,K,R,r(n,{style:{"max-width":"1200px"},src:"https://pic.imgdb.cn/item/63e5c04e4757feff33a1c34e.jpg"}),T,V,r(n,{style:{"max-width":"1200px"},src:"https://pic.imgdb.cn/item/63e5c2c64757feff33a5bcdd.jpg"}),A,U,r(n,{style:{"max-width":"1200px"},src:"https://pic.imgdb.cn/item/63e5c36f4757feff33a69d0b.jpg"}),B,G,M,C,I,Z,r(n,{style:{"max-width":"1200px"},src:"https://pic.imgdb.cn/item/63e5c5274757feff33a8ce78.jpg"})]),"main-header":t(()=>[s(a.$slots,"main-header")]),"main-header-after":t(()=>[s(a.$slots,"main-header-after")]),"main-nav":t(()=>[s(a.$slots,"main-nav")]),"main-content":t(()=>[s(a.$slots,"main-content")]),"main-content-after":t(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[s(a.$slots,"main-nav-after")]),comment:t(()=>[s(a.$slots,"comment")]),footer:t(()=>[s(a.$slots,"footer")]),aside:t(()=>[s(a.$slots,"aside")]),"aside-custom":t(()=>[s(a.$slots,"aside-custom")]),default:t(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{W as default};