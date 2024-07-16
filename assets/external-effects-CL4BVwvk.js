import{_ as u}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-b0Ji9riL.js";import{_ as f}from"./HairyImage.vue_vue_type_script_setup_true_lang-CpF2Tym5.js";import{b as h,e as _,w as t,f as g,a as P,p as m,j as s,g as b,r as n,h as e,k as a}from"./app-CB06-Kky.js";import"./index-CJ79bB4y.js";const v=e("p",null,"KPA 可以在吉他和 KPA 直接连接一个或多个单块修改器，但如果将其放在 KPA 的效果链中间，就可以保持这个单块的状态，并通过 remote 进行控制。",-1),x=e("p",null,"为此，得先使用后面版上的 send 和 return 来连接单块修改器。",-1),A=e("p",null,"使用 STOMPS 或 EFFECTS 中的一个位置放置单块并激活效果循环",-1),$=e("p",null,"一般有三种不同类型的循环单块。",-1),k=e("h2",{id:"loop-mono-循环单声道",tabindex:"-1"},[a("Loop Mono（循环单声道） "),e("a",{class:"header-anchor",href:"#loop-mono-循环单声道","aria-label":'Permalink to "Loop Mono（循环单声道）"'},"​")],-1),y=e("p",null,"要连接但声道单块，可以使用 loop mono stomp，首先将单块连接到 KPA，将 KPA 的 send 连接到单块的输入，然后 return 连接单块的输出。",-1),K=e("ul",null,[e("li",null,"Send（profiler） --------- Input（Effect-Pedal 单块）"),e("li",null,"Return（profiler） --------- Output（Effect-Pedal 单块）")],-1),L=e("p",null,"为循环单块选择合适的位置，可以是放大器之前的“stomps”上的插槽之一，也可以是“effects”的任意插糟。",-1),S=e("p",null,"插入单块后，轻轻下 A 按键，屏幕上将显示对应的菜单，使用 “type 类型”旋钮，选择 loop mono，可在列表的最后找到它。",-1),E=e("p",null,"现在外部单块就成为效果链的一部分了。",-1),w=e("p",null,"Loop mono 提供了三个参数：",-1),R=e("ul",null,[e("li",null,[e("p",null,"“Mix 混合” 用于平衡 KPA 信号和外部单块信号的比例")]),e("li",null,[e("p",null,"“Ducking 闪避” 用于拨弦力度控制效果的深度 如果选择了较低的值，轻轻拨弦，就听不到循环单块的声音。")]),e("li",null,[e("p",null,"“Volume 音量” 用于控制发送到外部单块的信号电平")])],-1),V=e("h2",{id:"loop-distortion-循环失真",tabindex:"-1"},[a("Loop Distortion（循环失真） "),e("a",{class:"header-anchor",href:"#loop-distortion-循环失真","aria-label":'Permalink to "Loop Distortion（循环失真）"'},"​")],-1),j=e("p",null,"如果想使用过载或失真单块，则应该选择 loop distortion stomp，同样，先将单块连接到 KPA",-1),N=e("ul",null,[e("li",null,"Send（profiler） --------- Input（Effect-Pedal 单块）"),e("li",null,"Return（profiler） --------- Output（Effect-Pedal 单块）")],-1),O=e("p",null,"将过载单块放在“stomps 单块”的 B 中，因为 A 已经有了循环单块。",-1),D=e("p",null,"插入单块后，轻轻下 B 按键，屏幕上将显示对应的菜单，使用 “type 类型”旋钮，选择 loop Distortion，可在列表的最后找到它。",-1),M=e("p",null,"Loop mono 只有一个参数，就是 “Volume 音量”，如果想提升单块的输入，可以增加 Volume 的值，但在大多数情况下，最好设置为 0。",-1),T=e("h2",{id:"loop-stereo-循环立体声",tabindex:"-1"},[a("Loop Stereo（循环立体声） "),e("a",{class:"header-anchor",href:"#loop-stereo-循环立体声","aria-label":'Permalink to "Loop Stereo（循环立体声）"'},"​")],-1),B=e("p",null,'如果想在信号链中使用立体声效果设备，必须使用“alternative input 替代输入" 作为第二个返回。',-1),I=e("p",null,"下面是线缆连接方法：",-1),C=e("ul",null,[e("li",null,"Send（profiler） --------- Input（Effect-Pedal 单块）"),e("li",null,"Return（profiler） --------- Output L（Effect-Pedal 单块）"),e("li",null,"Alternative In（profiler） --------- Output R（Effect-Pedal 单块）")],-1),F=e("p",null,"立体声循环提供了单声道循环相同的参数",-1),G=e("h2",{id:"remote-远程控制踏板",tabindex:"-1"},[a("Remote（远程控制踏板） "),e("a",{class:"header-anchor",href:"#remote-远程控制踏板","aria-label":'Permalink to "Remote（远程控制踏板）"'},"​")],-1),Z=e("p",null,"使用效果器将外部效果理解到 KPA 的最大好处是，可以使用远程控制踏板来控制效果循环的状态。",-1),J=e("p",null,"例如在 stomp 的 A 中分配一个效果器，按住 A 并踩下相应的踩定，即可绑定效果。",-1),Y={__name:"external-effects",setup(U,{expose:d}){const i=JSON.parse('{"title":"Kemper（KPA）效果循环","description":"","frontmatter":{"title":"Kemper（KPA）效果循环","date":"2023-02-08T19:03:00.000Z","categories":["Notes","Guitar"],"tags":["guitar"]},"headers":[{"level":2,"title":"Loop Mono（循环单声道）","slug":"loop-mono-循环单声道","link":"#loop-mono-循环单声道","children":[]},{"level":2,"title":"Loop Distortion（循环失真）","slug":"loop-distortion-循环失真","link":"#loop-distortion-循环失真","children":[]},{"level":2,"title":"Loop Stereo（循环立体声）","slug":"loop-stereo-循环立体声","link":"#loop-stereo-循环立体声","children":[]},{"level":2,"title":"Remote（远程控制踏板）","slug":"remote-远程控制踏板","link":"#remote-远程控制踏板","children":[]}],"relativePath":"pages/posts/guitar/kpa/external-effects.md","path":"/home/runner/work/valaxy-theme-hairy-next/valaxy-theme-hairy-next/demo/pages/posts/guitar/kpa/external-effects.md","lastUpdated":1721091056000}'),p=P(),r=i.frontmatter||{};return p.meta.frontmatter=Object.assign(p.meta.frontmatter||{},i.frontmatter||{}),m("pageData",i),m("valaxy:frontmatter",r),globalThis.$frontmatter=r,d({frontmatter:{title:"Kemper（KPA）效果循环",date:"2023-02-08T19:03:00.000Z",categories:["Notes","Guitar"],tags:["guitar"]}}),(o,z)=>{const l=f,c=u;return h(),_(c,{frontmatter:g(r)},{"main-content-md":t(()=>[v,x,s(l,{style:{"max-width":"800px"},src:"https://pic.imgdb.cn/item/63e39b874757feff338e5414.jpg"}),A,s(l,{style:{"max-width":"800px"},src:"https://pic.imgdb.cn/item/63e39bd64757feff338f0c2c.jpg"}),$,b(" more "),k,y,K,L,S,s(l,{style:{"max-width":"800px"},src:"https://pic.imgdb.cn/item/63e39ded4757feff3392b5bc.jpg"}),E,s(l,{style:{"max-width":"800px"},src:"https://pic.imgdb.cn/item/63e39e3e4757feff33934684.jpg"}),w,R,V,j,N,O,D,M,T,B,I,C,F,G,Z,J,s(l,{style:{"max-width":"800px"},src:"https://pic.imgdb.cn/item/63e3a2004757feff3399bc00.jpg"})]),"main-header":t(()=>[n(o.$slots,"main-header")]),"main-header-after":t(()=>[n(o.$slots,"main-header-after")]),"main-nav":t(()=>[n(o.$slots,"main-nav")]),"main-content":t(()=>[n(o.$slots,"main-content")]),"main-content-after":t(()=>[n(o.$slots,"main-content-after")]),"main-nav-before":t(()=>[n(o.$slots,"main-nav-before")]),"main-nav-after":t(()=>[n(o.$slots,"main-nav-after")]),comment:t(()=>[n(o.$slots,"comment")]),footer:t(()=>[n(o.$slots,"footer")]),aside:t(()=>[n(o.$slots,"aside")]),"aside-custom":t(()=>[n(o.$slots,"aside-custom")]),default:t(()=>[n(o.$slots,"default")]),_:3},8,["frontmatter"])}}};export{Y as default};