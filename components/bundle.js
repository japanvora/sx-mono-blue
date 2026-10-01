/* @ds-bundle: {"format":4,"namespace":"SX","components":[{"name":"Logo"},{"name":"Button"},{"name":"Link"},{"name":"Field"},{"name":"Select"},{"name":"Checkbox"},{"name":"Switch"},{"name":"Badge"},{"name":"Alert"},{"name":"Card"},{"name":"Stat"},{"name":"DataTable"},{"name":"Tabs"},{"name":"Navbar"},{"name":"Hero"},{"name":"SectionHeader"},{"name":"FeatureGrid"},{"name":"Footer"},{"name":"Disclaimer"},{"name":"Dialog"},{"name":"Icon"},{"name":"Toast"},{"name":"Pagination"},{"name":"Chart"},{"name":"EmptyState"},{"name":"MobileMenu"}]} */
(function(){
"use strict";
var R=window.React;
function cx(){var o=[];for(var i=0;i<arguments.length;i++){var a=arguments[i];if(a)o.push(a);}return o.join(" ");}
function omit(p,keys){var o={};for(var k in p){if(Object.prototype.hasOwnProperty.call(p,k)&&keys.indexOf(k)<0)o[k]=p[k];}return o;}
var SX={version:"1.0.0",cx:cx};

/* ---- theme ---- */
SX.setTheme=function(mode){
  var root=document.documentElement;
  var m=mode||"system";
  var dark=m==="dark"||(m==="system"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);
  root.setAttribute("data-theme",dark?"dark":"light");
  try{localStorage.setItem("sx-theme",m);}catch(e){}
  return dark?"dark":"light";
};
SX.initTheme=function(){var m="system";try{m=localStorage.getItem("sx-theme")||"system";}catch(e){}return SX.setTheme(m);};

/* ---- tabs (vanilla, for the class API) ---- */
SX.initTabs=function(scope){
  var lists=(scope||document).querySelectorAll('.sx-tabs[role="tablist"]');
  Array.prototype.forEach.call(lists,function(list){
    var tabs=Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    function select(t){tabs.forEach(function(x){var on=x===t;x.setAttribute("aria-selected",on?"true":"false");x.tabIndex=on?0:-1;var p=document.getElementById(x.getAttribute("aria-controls"));if(p)p.hidden=!on;});}
    tabs.forEach(function(t,i){
      t.addEventListener("click",function(){select(t);});
      t.addEventListener("keydown",function(e){var d=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0;if(!d)return;e.preventDefault();var n=tabs[(i+d+tabs.length)%tabs.length];select(n);n.focus();});
    });
  });
};


/* ---- escaping ---- */
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
SX.esc=esc;

/* ---- icons ---- */
var ICONS={"arrow-right": "<path d=\"M5 12h14\"/><path d=\"M13 6l6 6-6 6\"/>", "arrow-left": "<path d=\"M19 12H5\"/><path d=\"M11 6l-6 6 6 6\"/>", "arrow-up-right": "<path d=\"M7 17L17 7\"/><path d=\"M8 7h9v9\"/>", "chevron-down": "<path d=\"M6 9l6 6 6-6\"/>", "chevron-right": "<path d=\"M9 6l6 6-6 6\"/>", "chevron-left": "<path d=\"M15 6l-6 6 6 6\"/>", "check": "<path d=\"M5 12.5l4.5 4.5L19 7.5\"/>", "x": "<path d=\"M6 6l12 12\"/><path d=\"M18 6L6 18\"/>", "plus": "<path d=\"M12 5v14\"/><path d=\"M5 12h14\"/>", "minus": "<path d=\"M5 12h14\"/>", "search": "<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"M20 20l-4-4\"/>", "menu": "<path d=\"M4 7h16\"/><path d=\"M4 12h16\"/><path d=\"M4 17h16\"/>", "more": "<path d=\"M5 12h.01\"/><path d=\"M12 12h.01\"/><path d=\"M19 12h.01\"/>", "sliders": "<path d=\"M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1\"/><circle cx=\"15\" cy=\"6\" r=\"2\"/><circle cx=\"9\" cy=\"12\" r=\"2\"/><circle cx=\"17\" cy=\"18\" r=\"2\"/>", "filter": "<path d=\"M4 5h16l-6 7.5V19l-4 2v-8.5z\"/>", "user": "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6\"/>", "log-out": "<path d=\"M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3\"/><path d=\"M10 16l-4-4 4-4\"/><path d=\"M6 12h10\"/>", "bell": "<path d=\"M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z\"/><path d=\"M10 20a2 2 0 0 0 4 0\"/>", "mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3.5 6.5L12 13l8.5-6.5\"/>", "calendar": "<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15\" rx=\"2\"/><path d=\"M3.5 10h17M8 3v4M16 3v4\"/>", "clock": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/>", "info": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 16v-5\"/><path d=\"M12 8h.01\"/>", "check-circle": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8 12.5l2.5 2.5L16 9.5\"/>", "alert-circle": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 8v5\"/><path d=\"M12 16h.01\"/>", "x-circle": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9 9l6 6\"/><path d=\"M15 9l-6 6\"/>", "alert-triangle": "<path d=\"M12 3.5l9 16.5H3z\"/><path d=\"M12 10v4\"/><path d=\"M12 17h.01\"/>", "download": "<path d=\"M12 4v11\"/><path d=\"M7 10l5 5 5-5\"/><path d=\"M5 20h14\"/>", "upload": "<path d=\"M12 15V4\"/><path d=\"M7 9l5-5 5 5\"/><path d=\"M5 20h14\"/>", "copy": "<rect x=\"8\" y=\"8\" width=\"12\" height=\"12\" rx=\"2\"/><path d=\"M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2\"/>", "external-link": "<path d=\"M14 4h6v6\"/><path d=\"M20 4l-9 9\"/><path d=\"M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4\"/>", "link": "<path d=\"M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1\"/>", "edit": "<path d=\"M4 20h4L19 9l-4-4L4 16z\"/><path d=\"M13 7l4 4\"/>", "trash": "<path d=\"M4 7h16\"/><path d=\"M9 7V4h6v3\"/><path d=\"M6 7l1 13h10l1-13\"/>", "eye": "<path d=\"M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>", "refresh": "<path d=\"M20 12a8 8 0 1 1-2.34-5.66\"/><path d=\"M20 4v5h-5\"/>", "play": "<path d=\"M8 5v14l11-7z\"/>", "pause": "<path d=\"M9 5v14\"/><path d=\"M15 5v14\"/>", "stop": "<rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"1.5\"/>", "activity": "<path d=\"M3 12h4l3-8 4 16 3-8h4\"/>", "zap": "<path d=\"M13 3L5 13h6l-1 8 8-10h-6z\"/>", "chart-line": "<path d=\"M4 4v16h16\"/><path d=\"M7 15l4-4 3 3 5-6\"/>", "chart-bar": "<path d=\"M4 4v16h16\"/><path d=\"M8 16v-4\"/><path d=\"M12 16V8\"/><path d=\"M16 16v-6\"/>", "server": "<rect x=\"4\" y=\"4\" width=\"16\" height=\"7\" rx=\"1.5\"/><rect x=\"4\" y=\"13\" width=\"16\" height=\"7\" rx=\"1.5\"/><path d=\"M8 7.5h.01\"/><path d=\"M8 16.5h.01\"/>", "database": "<ellipse cx=\"12\" cy=\"6\" rx=\"7\" ry=\"3\"/><path d=\"M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6\"/><path d=\"M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3\"/>", "cpu": "<rect x=\"7\" y=\"7\" width=\"10\" height=\"10\" rx=\"1\"/><path d=\"M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4\"/>", "terminal": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M7 9l3 3-3 3\"/><path d=\"M13 15h4\"/>", "shield": "<path d=\"M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z\"/>", "lock": "<rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/>", "key": "<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9\"/><path d=\"M17 6l3 3\"/>", "inbox": "<path d=\"M3 13l3-8h12l3 8v6H3z\"/><path d=\"M3 13h5l1.5 2.5h5L16 13h5\"/>", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/>", "moon": "<path d=\"M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z\"/>"};
SX.iconNames=Object.keys(ICONS);
SX.icon=function(name,o){o=o||{};var inner=ICONS[name];if(!inner)return "";var s=o.size||20;
  return '<svg class="sx-icon'+(o.className?" "+o.className:"")+'" width="'+s+'" height="'+s+'" viewBox="0 0 24 24"'+(o.label?' role="img" aria-label="'+esc(o.label)+'"':' aria-hidden="true"')+">"+inner+"</svg>";};
SX.initIcons=function(scope){Array.prototype.forEach.call((scope||document).querySelectorAll("[data-sx-icon]"),function(el){
  var t=document.createElement("span");t.innerHTML=SX.icon(el.getAttribute("data-sx-icon"),{size:el.getAttribute("data-size")||20,label:el.getAttribute("aria-label"),className:el.className||""});
  if(t.firstChild)el.parentNode.replaceChild(t.firstChild,el);});};

/* ---- toast ---- */
var TOAST_ICON={info:"info",success:"check-circle",warning:"alert-triangle",danger:"x-circle"};
function toaster(){var t=document.querySelector(".sx-toaster[data-sx-live]");if(!t){t=document.createElement("div");t.className="sx-toaster";t.setAttribute("data-sx-live","");t.setAttribute("aria-live","polite");document.body.appendChild(t);}return t;}
SX.toast=function(o){o=o||{};var tone=TOAST_ICON[o.tone]?o.tone:"info";
  var el=document.createElement("div");el.className="sx-toast sx-toast--"+tone;el.setAttribute("role",tone==="danger"?"alert":"status");
  el.innerHTML=SX.icon(TOAST_ICON[tone],{className:"sx-toast__icon"})+'<div class="sx-toast__body">'+(o.title?'<p class="sx-toast__title">'+esc(o.title)+"</p>":"")+(o.text?'<p class="sx-toast__text">'+esc(o.text)+"</p>":"")+'</div><button class="sx-toast__close" type="button" aria-label="Dismiss">'+SX.icon("x")+"</button>";
  toaster().appendChild(el);var timer=null;
  function close(){if(timer)clearTimeout(timer);if(el.parentNode)el.parentNode.removeChild(el);}
  el.querySelector(".sx-toast__close").addEventListener("click",close);
  var d=o.duration===undefined?(tone==="danger"?0:5000):o.duration;
  if(d>0){timer=setTimeout(close,d);el.addEventListener("mouseenter",function(){clearTimeout(timer);});el.addEventListener("mouseleave",function(){timer=setTimeout(close,d);});}
  return close;};

/* ---- pagination ---- */
SX.pageRange=function(page,count,sib){sib=sib||1;if(count<1)return [];var out=[1],s=Math.max(2,page-sib),e=Math.min(count-1,page+sib);
  if(s>2)out.push("gap");for(var i=s;i<=e;i++)out.push(i);if(e<count-1)out.push("gap");if(count>1)out.push(count);return out;};
SX.paginationHTML=function(o){var p=o.page,c=o.pageCount,href=o.href;
  function item(label,n,extra){var cur=n===p&&!extra;var dis=n<1||n>c;
    if(href&&!dis)return '<li><a class="sx-page'+(extra||"")+'" href="'+esc(href(n))+'"'+(cur?' aria-current="page"':"")+(extra?' aria-label="'+(n<p?"Previous page":"Next page")+'"':"")+">"+label+"</a></li>";
    return '<li><button class="sx-page'+(extra||"")+'" type="button" data-page="'+n+'"'+(cur?' aria-current="page"':"")+(dis?" disabled":"")+(extra?' aria-label="'+(n<p?"Previous page":"Next page")+'"':"")+">"+label+"</button></li>";}
  var h='<nav class="sx-pagination" aria-label="Pagination">';
  if(o.total!==undefined&&o.pageSize){var a=(p-1)*o.pageSize+1,b=Math.min(p*o.pageSize,o.total);h+='<p class="sx-pagination__summary">Showing <span class="sx-num">'+a.toLocaleString("en-IN")+"–"+b.toLocaleString("en-IN")+'</span> of <span class="sx-num">'+o.total.toLocaleString("en-IN")+"</span></p>";}
  h+='<ul class="sx-pagination__list">'+item(SX.icon("chevron-left"),p-1," sx-page--nav");
  SX.pageRange(p,c).forEach(function(n){h+=n==="gap"?'<li><span class="sx-page sx-page--gap" aria-hidden="true">…</span></li>':item(String(n),n);});
  return h+item(SX.icon("chevron-right"),p+1," sx-page--nav")+"</ul></nav>";};

/* ---- charts ---- */
function niceStep(x){var e=Math.pow(10,Math.floor(Math.log(x)/Math.LN10)),f=x/e;return (f<=1?1:f<=2?2:f<=2.5?2.5:f<=5?5:10)*e;}
SX.chartSVG=function(sp){
  var W=sp.width||640,H=sp.height||240,type=sp.type||"line",L=sp.labels||[],S=sp.series||[];
  var pl=sp.padLeft||52,pr=12,pt=12,pb=28,iw=W-pl-pr,ih=H-pt-pb,vals=[];
  S.forEach(function(s){(s.values||[]).forEach(function(v){if(v!==null&&v!==undefined&&isFinite(v))vals.push(+v);});});
  var head='<svg class="sx-chart__svg" viewBox="0 0 '+W+" "+H+'" role="img" aria-label="'+esc(sp.label||"Chart")+'">';
  if(!vals.length)return head+'<text class="sx-chart__tick" x="'+W/2+'" y="'+H/2+'" text-anchor="middle">No data</text></svg>';
  var mn=Math.min.apply(null,vals),mx=Math.max.apply(null,vals);
  if(type==="bar"||sp.zero)mn=Math.min(0,mn);
  if(sp.yMin!==undefined)mn=sp.yMin;if(sp.yMax!==undefined)mx=sp.yMax;if(mx===mn)mx=mn+1;
  var step=niceStep((mx-mn)/4),y0=Math.floor(mn/step+1e-9)*step,y1=Math.ceil(mx/step-1e-9)*step;
  var dec=step<1?Math.min(4,Math.ceil(-Math.log(step)/Math.LN10)):0;
  function fmt(v){return (+v).toLocaleString("en-IN",{minimumFractionDigits:dec,maximumFractionDigits:dec});}
  function Y(v){return pt+ih-(v-y0)/(y1-y0)*ih;}
  var n=Math.max(L.length,S.reduce(function(m,s){return Math.max(m,(s.values||[]).length);},0)),band=iw/Math.max(n,1);
  function X(i){return type==="bar"?pl+band*(i+.5):pl+(n>1?i*iw/(n-1):iw/2);}
  var o=[],k,ticks=Math.round((y1-y0)/step);
  for(k=0;k<=ticks;k++){var tv=y0+k*step,yy=Y(tv).toFixed(1);o.push('<line class="sx-chart__grid" x1="'+pl+'" x2="'+(W-pr)+'" y1="'+yy+'" y2="'+yy+'"/>');o.push('<text class="sx-chart__tick" x="'+(pl-8)+'" y="'+yy+'" dy="0.35em" text-anchor="end">'+esc(fmt(tv)+(sp.unit||""))+"</text>");}
  var every=Math.max(1,Math.ceil(n/(sp.maxLabels||8)));
  for(k=0;k<n;k++){if(k%every)continue;var anc=type==="bar"?"middle":k===0?"start":k===n-1?"end":"middle";o.push('<text class="sx-chart__tick" x="'+X(k).toFixed(1)+'" y="'+(H-8)+'" text-anchor="'+anc+'">'+esc(L[k]!==undefined?L[k]:k+1)+"</text>");}
  var base=Y(Math.min(Math.max(0,y0),y1));
  S.forEach(function(s,si){var c="sx-chart__c"+(si%4),vs=s.values||[];
    if(type==="bar"){var gw=band*.7,bw=gw/S.length;vs.forEach(function(v,i){if(v===null||v===undefined)return;var x=pl+band*i+(band-gw)/2+si*bw,yv=Y(v);
      o.push('<rect class="sx-chart__bar '+c+'" x="'+x.toFixed(1)+'" y="'+Math.min(yv,base).toFixed(1)+'" width="'+Math.max(1,bw-2).toFixed(1)+'" height="'+Math.abs(base-yv).toFixed(1)+'" rx="2"><title>'+esc((s.name?s.name+" · ":"")+(L[i]!==undefined?L[i]+": ":"")+fmt(v)+(sp.unit||""))+"</title></rect>");});return;}
    var segs=[],cur=[];vs.forEach(function(v,i){if(v===null||v===undefined||!isFinite(v)){if(cur.length)segs.push(cur);cur=[];}else cur.push([X(i),Y(v)]);});if(cur.length)segs.push(cur);
    segs.forEach(function(sg){var d=sg.map(function(p,i){return (i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1);}).join("");
      if(type==="area"||s.area)o.push('<path class="sx-chart__area '+c+'" d="'+d+"L"+sg[sg.length-1][0].toFixed(1)+" "+base.toFixed(1)+"L"+sg[0][0].toFixed(1)+" "+base.toFixed(1)+'Z"/>');
      o.push('<path class="sx-chart__line '+c+'" d="'+d+'"/>');});
    var last=segs.length?segs[segs.length-1]:null;if(last){var lp=last[last.length-1];o.push('<circle class="sx-chart__dot '+c+'" cx="'+lp[0].toFixed(1)+'" cy="'+lp[1].toFixed(1)+'" r="3.5"/>');}
  });
  o.push('<line class="sx-chart__axis" x1="'+pl+'" x2="'+(W-pr)+'" y1="'+(pt+ih)+'" y2="'+(pt+ih)+'"/>');
  return head+o.join("")+"</svg>";};
SX.chartLegendHTML=function(series){return '<ul class="sx-chart__legend">'+(series||[]).map(function(s,i){return '<li class="sx-chart__c'+(i%4)+'"><span class="sx-chart__swatch"></span>'+esc(s.name||"Series "+(i+1))+"</li>";}).join("")+"</ul>";};
SX.sparklineSVG=function(values,o){o=o||{};var W=o.width||120,H=o.height||32,v=(values||[]).filter(function(x){return x!==null&&x!==undefined&&isFinite(x);});
  var cls="sx-spark "+(o.tone==="up"?"sx-spark--up":o.tone==="down"?"sx-spark--down":"sx-chart__c0");
  if(v.length<2)return '<svg class="'+cls+'" width="'+W+'" height="'+H+'" aria-hidden="true"></svg>';
  var mn=Math.min.apply(null,v),mx=Math.max.apply(null,v),r=mx-mn||1;
  var d=v.map(function(x,i){return (i?"L":"M")+(i*(W-4)/(v.length-1)+2).toFixed(1)+" "+(H-2-(x-mn)/r*(H-4)).toFixed(1);}).join("");
  return '<svg class="'+cls+'" width="'+W+'" height="'+H+'" viewBox="0 0 '+W+" "+H+'"'+(o.label?' role="img" aria-label="'+esc(o.label)+'"':' aria-hidden="true"')+'><path class="sx-chart__line" d="'+d+'"/></svg>';};
SX.renderCharts=function(scope){Array.prototype.forEach.call((scope||document).querySelectorAll("[data-sx-chart]"),function(el){
  var sp;try{sp=JSON.parse(el.getAttribute("data-sx-chart"));}catch(e){el.textContent="Chart spec is not valid JSON.";return;}
  el.classList.add("sx-chart");el.innerHTML=((sp.series||[]).length>1&&sp.legend!==false?SX.chartLegendHTML(sp.series):"")+SX.chartSVG(sp);});
  Array.prototype.forEach.call((scope||document).querySelectorAll("[data-sx-spark]"),function(el){var o={};try{o=JSON.parse(el.getAttribute("data-sx-spark"));}catch(e){return;}el.innerHTML=SX.sparklineSVG(o.values,o);});};

/* ---- mobile menu (class API) ---- */
SX.initNav=function(scope){Array.prototype.forEach.call((scope||document).querySelectorAll("[data-sx-drawer-open]"),function(btn){
  var id=btn.getAttribute("data-sx-drawer-open"),dr=document.getElementById(id);if(!dr)return;
  var bd=document.querySelector('[data-sx-drawer-backdrop="'+id+'"]');
  function onKey(e){if(e.key==="Escape")close();}
  function open(){dr.hidden=false;if(bd)bd.hidden=false;btn.setAttribute("aria-expanded","true");var f=dr.querySelector("a[href],button");if(f)f.focus();document.addEventListener("keydown",onKey);}
  function close(){dr.hidden=true;if(bd)bd.hidden=true;btn.setAttribute("aria-expanded","false");document.removeEventListener("keydown",onKey);btn.focus();}
  btn.addEventListener("click",open);if(bd)bd.addEventListener("click",close);
  Array.prototype.forEach.call(dr.querySelectorAll("[data-sx-drawer-close]"),function(c){c.addEventListener("click",close);});});};

/* ---- React components (only when React is on the page) ---- */
if(R){
  var h=R.createElement;
  var MARK=function(){return h("svg",{className:"sx-logo__mark",viewBox:"0 0 100 100","aria-hidden":"true"},h("polyline",{className:"sx-logo__top",points:"82,8 24,44 48,60"}),h("polyline",{className:"sx-logo__bot",points:"52,40 76,56 18,92"}));};
  var PRODUCT_MARKS={"orion": {"p1": "16,64 16,30 50,10 84,30", "p2": "84,36 84,70 50,90 16,70", "stars": [[35, 62, 12, "b"], [50, 50, 12, "a"], [65, 38, 12, "b"]]}, "mizar": {"p1": "22,64 8,50 50,8 68,26", "p2": "78,36 92,50 50,92 32,74", "stars": [[44, 56, 17, "a"], [61, 39, 9, "b"]]}, "merak": {"p1": "30,88 12,88 50,12 63,38", "p2": "71,54 88,88 42,88", "stars": [[50, 72, 10, "b"], [50, 54, 14, "a"]]}, "orbit": {"p1": "14.6,69.5 11.2,66.1 11.2,33.9 33.9,11.2 66.1,11.2 69.5,14.6", "p2": "85.4,30.5 88.8,33.9 88.8,66.1 66.1,88.8 33.9,88.8 30.5,85.4", "stars": [[50, 50, 18, "a"], [77.5, 22.5, 10, "a"]]}, "eigen": {"p1": "36,12 12,12 12,88 36,88", "p2": "64,88 88,88 88,12 64,12", "stars": [[35, 65, 9, "b"], [50, 50, 13, "a"], [65, 35, 18, "a"]]}};
  var MARK_P=function(pp){var m=PRODUCT_MARKS[pp.product];return h("svg",{className:"sx-logo__mark",viewBox:"0 0 100 100","aria-hidden":"true"},h("polyline",{className:"sx-logo__top",points:m.p1}),h("polyline",{className:"sx-logo__bot",points:m.p2}),m.stars.map(function(s,i){return h("rect",{key:i,className:"sx-logo__belt-"+s[3],x:s[0]-s[2]/2,y:s[1]-s[2]/2,width:s[2],height:s[2],transform:"rotate(45 "+s[0]+" "+s[1]+")"});}));};
  SX.productMarks=PRODUCT_MARKS;
  SX.Logo=function(p){
    var size=p.size||"md",prod=PRODUCT_MARKS[p.product]?p.product:null,NAME=prod?prod.toUpperCase():"";
    var word=prod?h("span",{className:"sx-logo__word sx-logo__word--product sx-logo__word--"+prod},NAME):h("span",{className:"sx-logo__word"},"state",h("span",{className:"sx-logo__x"},"X"),"change");
    var endorsed=prod&&(p.endorsed!==undefined?p.endorsed:size!=="sm");
    var kids=[];
    if(p.variant!=="wordmark")kids.push(prod?h(MARK_P,{key:"m",product:prod}):h(MARK,{key:"m"}));
    if(p.variant!=="mark")kids.push(h("span",{key:"t",className:"sx-logo__text"},word,
      endorsed?h("span",{className:"sx-logo__by"},"by ",h("b",null,"state",h("span",{className:"sx-logo__x"},"X"),"change")):null,
      (!prod&&p.tagline)?h("span",{className:"sx-logo__tag"},"Analytics  |  Data  |  Strategy  |  Trading  |  Quant"):null));
    return h(p.href?"a":"span",{className:cx("sx-logo",prod&&"sx-logo--product sx-logo--"+prod,size!=="md"&&"sx-logo--"+size,p.className),href:p.href,"aria-label":prod?NAME+" by stateXchange":"stateXchange"},kids);
  };
  SX.Button=function(p){
    var v=p.variant||"primary",s=p.size||"md";
    var rest=omit(p,["variant","size","block","className","href","children"]);
    rest.className=cx("sx-btn",v!=="primary"&&"sx-btn--"+v,s!=="md"&&"sx-btn--"+s,p.block&&"sx-btn--block",p.className);
    if(p.href){rest.href=p.href;return h("a",rest,p.children);}
    if(!rest.type)rest.type="button";
    return h("button",rest,p.children);
  };
  SX.Link=function(p){var r=omit(p,["quiet","className"]);r.className=cx("sx-link",p.quiet&&"sx-link--quiet",p.className);return h("a",r,p.children);};
  var uid=0;function useId(pref){var r=R.useRef(null);if(r.current===null)r.current=pref+"-"+(++uid);return r.current;}
  SX.Field=function(p){
    var id=p.id||useId("sx-f");var hid=id+"-help";
    var inputProps=omit(p,["label","help","error","optional","mono","multiline","className","id"]);
    inputProps.id=id;inputProps.className=cx("sx-input",p.mono&&"sx-input--mono");
    if(p.help||p.error)inputProps["aria-describedby"]=hid;
    if(p.error)inputProps["aria-invalid"]="true";
    return h("div",{className:cx("sx-field",p.error&&"is-invalid",p.className)},
      h("label",{className:"sx-label",htmlFor:id},p.label,p.optional?h("span",{className:"sx-label__opt"}," (optional)"):null),
      h(p.multiline?"textarea":"input",inputProps),
      p.error?h("span",{className:"sx-error",id:hid},p.error):p.help?h("span",{className:"sx-help",id:hid},p.help):null);
  };
  SX.Select=function(p){
    var id=p.id||useId("sx-s");
    var sp=omit(p,["label","help","options","className","id"]);sp.id=id;sp.className="sx-select";
    return h("div",{className:cx("sx-field",p.className)},
      p.label?h("label",{className:"sx-label",htmlFor:id},p.label):null,
      h("div",{className:"sx-select-wrap"},h("select",sp,(p.options||[]).map(function(o){var v=typeof o==="string"?{value:o,label:o}:o;return h("option",{key:v.value,value:v.value},v.label);}))),
      p.help?h("span",{className:"sx-help"},p.help):null);
  };
  SX.Checkbox=function(p){var ip=omit(p,["label","className"]);ip.type=p.type==="radio"?"radio":"checkbox";return h("label",{className:cx("sx-check",p.className)},h("input",ip),h("span",null,p.label));};
  SX.Switch=function(p){var ip=omit(p,["label","className"]);ip.type="checkbox";ip.role="switch";return h("label",{className:cx("sx-switch",p.className)},h("input",ip),p.label?h("span",null,p.label):null);};
  SX.Badge=function(p){var t=p.tone||"neutral";return h("span",{className:cx("sx-badge",t!=="neutral"&&"sx-badge--"+t,p.className)},p.dot?h("span",{className:"sx-badge__dot","aria-hidden":"true"}):null,p.children);};
  var ICONS={info:["M12 16v-5","M12 8h.01"],success:["M8 12.5l2.5 2.5L16 9.5"],warning:["M12 8v5","M12 16h.01"],danger:["M9 9l6 6","M15 9l-6 6"]};
  SX.Alert=function(p){
    var t=p.tone||"info";
    return h("div",{className:cx("sx-alert","sx-alert--"+t,p.className),role:t==="danger"?"alert":"status"},
      h("svg",{className:"sx-alert__icon",viewBox:"0 0 24 24","aria-hidden":"true"},h("circle",{cx:12,cy:12,r:9}),(ICONS[t]||[]).map(function(d,i){return h("path",{key:i,d:d});})),
      h("div",{className:"sx-alert__body"},p.title?h("p",{className:"sx-alert__title"},p.title):null,p.children?h("p",{className:"sx-alert__text"},p.children):null));
  };
  SX.Card=function(p){
    return h(p.as||"div",{className:cx("sx-card",p.variant&&"sx-card--"+p.variant,p.className),onClick:p.onClick},
      p.eyebrow?h("p",{className:"sx-card__eyebrow"},p.eyebrow):null,
      p.title?h("h3",{className:"sx-card__title"},p.title):null,
      p.body?h("p",{className:"sx-card__body"},p.body):null,
      p.children,
      p.footer?h("div",{className:"sx-card__footer"},p.footer):null);
  };
  SX.Stat=function(p){
    var dir=p.deltaDirection||(typeof p.delta==="string"&&p.delta.charAt(0)==="-"?"down":"up");
    return h("div",{className:cx("sx-stat",p.className)},
      h("p",{className:"sx-stat__label"},p.label),
      h("p",{className:"sx-stat__value"},p.value,p.unit?h("span",{className:"sx-stat__unit"},p.unit):null),
      (p.delta||p.meta)?h("div",{className:"sx-stat__meta"},p.delta?h("span",{className:"sx-stat__delta sx-stat__delta--"+dir},p.delta):null,p.meta?h("span",null,p.meta):null):null);
  };
  SX.DataTable=function(p){
    var cols=p.columns||[];
    return h("table",{className:cx("sx-table",p.dense&&"sx-table--dense")},
      p.caption?h("caption",{style:{position:"absolute",left:"-9999px"}},p.caption):null,
      h("thead",null,h("tr",null,cols.map(function(c){return h("th",{key:c.key,scope:"col",className:c.align==="right"?"is-num":null},c.header);}))),
      h("tbody",null,(p.rows||[]).map(function(r,ri){return h("tr",{key:r.id||ri},cols.map(function(c){var v=c.render?c.render(r):r[c.key];return h("td",{key:c.key,className:cx(c.align==="right"&&"is-num",c.kind==="primary"&&"is-primary",c.kind==="code"&&"is-code")},v);}));}))));
  };
  SX.Tabs=function(p){
    var items=p.items||[];var base=useId("sx-t");
    var st=R.useState(p.defaultValue||(items[0]&&items[0].value));var cur=st[0],set=st[1];
    function key(e,i){var d=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0;if(!d)return;e.preventDefault();var n=items[(i+d+items.length)%items.length];set(n.value);var el=document.getElementById(base+"-tab-"+n.value);if(el)el.focus();}
    return h("div",{className:p.className},
      h("div",{className:"sx-tabs",role:"tablist","aria-label":p.label},items.map(function(it,i){var on=it.value===cur;return h("button",{key:it.value,id:base+"-tab-"+it.value,className:"sx-tab",role:"tab",type:"button","aria-selected":on?"true":"false","aria-controls":base+"-panel-"+it.value,tabIndex:on?0:-1,onClick:function(){set(it.value);},onKeyDown:function(e){key(e,i);}},it.label);})),
      items.map(function(it){return h("div",{key:it.value,id:base+"-panel-"+it.value,className:"sx-tabpanel",role:"tabpanel","aria-labelledby":base+"-tab-"+it.value,hidden:it.value!==cur},it.content);}));
  };
  SX.Hero=function(p){
    return h("section",{className:cx("sx-hero",p.grid&&"sx-hero--grid",p.className)},h("div",{className:"sx-container"},
      p.eyebrow?h("p",{className:"sx-hero__eyebrow"},p.eyebrow):null,
      h("h1",{className:"sx-hero__title"},p.title),
      p.lede?h("p",{className:"sx-hero__lede"},p.lede):null,
      p.actions?h("div",{className:"sx-hero__actions"},p.actions):null,
      p.points?h("ul",{className:"sx-hero__points"},p.points.map(function(x){return h("li",{key:x},x);})):null));
  };
  SX.SectionHeader=function(p){
    return h("div",{className:cx("sx-section-head",p.align==="center"&&"sx-section-head--center",p.className)},
      p.eyebrow?h("p",{className:"sx-section-head__eyebrow"},p.eyebrow):null,
      h("h2",{className:"sx-section-head__title"},p.title),
      p.lede?h("p",{className:"sx-section-head__lede"},p.lede):null);
  };
  SX.FeatureGrid=function(p){
    return h("div",{className:cx("sx-features",p.className)},(p.items||[]).map(function(it,i){return h("div",{key:i,className:"sx-feature"},h("span",{className:"sx-feature__index"},it.index||(i<9?"0":"")+(i+1)),h("h3",{className:"sx-feature__title"},it.title),it.body?h("p",{className:"sx-feature__body"},it.body):null);}));
  };
  var DISC="stateXchange provides execution and infrastructure tooling. It does not provide investment advice, recommendations, or portfolio management services. Users are solely responsible for their trading decisions and regulatory compliance.";
  SX.Disclaimer=function(p){return h("p",{className:cx("sx-disclaimer",p.boxed&&"sx-disclaimer--boxed",p.className)},h("strong",null,"Disclaimer. "),p.children||DISC);};
  SX.Footer=function(p){
    return h("footer",{className:cx("sx-footer",p.className)},h("div",{className:"sx-container"},
      h("div",{className:"sx-footer__grid"},
        h("div",null,h(SX.Logo,{size:"sm"}),h("p",{className:"sx-footer__about"},p.about||"Tailor-made analytics, data and execution systems for SEBI-registered research analysts.")),
        (p.columns||[]).map(function(c){return h("div",{key:c.heading},h("p",{className:"sx-footer__heading"},c.heading),h("ul",{className:"sx-footer__list"},c.links.map(function(l){return h("li",{key:l.label},h("a",{className:"sx-footer__link",href:l.href},l.label));})));})),
      h(SX.Disclaimer,{},p.disclaimer),
      h("div",{className:"sx-footer__base"},h("span",null,"\u00a9 "+(p.year||new Date().getFullYear())+" "+(p.legalName||"[Legal entity name]")+". stateXchange is a trade name."),p.contact?h("span",null,p.contact):null)));
  };
  SX.Dialog=function(p){
    if(!p.open)return null;
    var tid=useId("sx-d");
    R.useEffect(function(){function k(e){if(e.key==="Escape"&&p.onClose)p.onClose();}document.addEventListener("keydown",k);return function(){document.removeEventListener("keydown",k);};},[p.onClose]);
    return h("div",{className:"sx-backdrop",onClick:function(e){if(e.target===e.currentTarget&&p.onClose)p.onClose();}},
      h("div",{className:"sx-dialog",role:p.tone==="danger"?"alertdialog":"dialog","aria-modal":"true","aria-labelledby":tid},
        h("div",{className:"sx-dialog__head"},h("h2",{className:"sx-dialog__title",id:tid},p.title)),
        h("div",{className:"sx-dialog__body"},p.children),
        p.actions?h("div",{className:"sx-dialog__foot"},p.actions):null));
  };
  SX.Icon=function(p){var s=p.size||20;return h("svg",{className:cx("sx-icon",p.className),width:s,height:s,viewBox:"0 0 24 24",role:p.label?"img":null,"aria-label":p.label||null,"aria-hidden":p.label?null:"true",dangerouslySetInnerHTML:{__html:ICONS[p.name]||""}});};
  SX.Pagination=function(p){
    var page=p.page||1,count=p.pageCount||1;function go(n){if(n>=1&&n<=count&&n!==page&&p.onChange)p.onChange(n);}
    var items=SX.pageRange(page,count);
    return h("nav",{className:cx("sx-pagination",p.className),"aria-label":"Pagination"},
      (p.total!==undefined&&p.pageSize)?h("p",{className:"sx-pagination__summary"},"Showing ",h("span",{className:"sx-num"},((page-1)*p.pageSize+1).toLocaleString("en-IN")+"\u2013"+Math.min(page*p.pageSize,p.total).toLocaleString("en-IN"))," of ",h("span",{className:"sx-num"},p.total.toLocaleString("en-IN"))):null,
      h("ul",{className:"sx-pagination__list"},
        h("li",null,h("button",{className:"sx-page sx-page--nav",type:"button","aria-label":"Previous page",disabled:page<=1,onClick:function(){go(page-1);}},h(SX.Icon,{name:"chevron-left"}))),
        items.map(function(n,i){return n==="gap"?h("li",{key:"g"+i},h("span",{className:"sx-page sx-page--gap","aria-hidden":"true"},"\u2026")):h("li",{key:n},h("button",{className:"sx-page",type:"button","aria-current":n===page?"page":null,onClick:function(){go(n);}},String(n)));}),
        h("li",null,h("button",{className:"sx-page sx-page--nav",type:"button","aria-label":"Next page",disabled:page>=count,onClick:function(){go(page+1);}},h(SX.Icon,{name:"chevron-right"})))));
  };
  SX.Chart=function(p){var html=((p.series||[]).length>1&&p.legend!==false?SX.chartLegendHTML(p.series):"")+SX.chartSVG(p);return h("div",{className:cx("sx-chart",p.className),dangerouslySetInnerHTML:{__html:html}});};
  SX.Sparkline=function(p){return h("span",{className:p.className,dangerouslySetInnerHTML:{__html:SX.sparklineSVG(p.values,p)}});};
  SX.EmptyState=function(p){
    return h("div",{className:cx("sx-empty",p.plain&&"sx-empty--plain",p.className)},
      h("div",{className:"sx-empty__icon","aria-hidden":"true"},h(SX.Icon,{name:p.icon||"inbox",size:24})),
      h("h3",{className:"sx-empty__title"},p.title),
      p.text?h("p",{className:"sx-empty__text"},p.text):null,
      p.actions?h("div",{className:"sx-empty__actions"},p.actions):null);
  };
  SX.MobileMenu=function(p){
    var ref=R.useRef(null);
    R.useEffect(function(){var prev=document.activeElement;var el=ref.current&&ref.current.querySelector("a[href],button");if(el)el.focus();
      function k(e){if(e.key==="Escape"&&p.onClose)p.onClose();}document.addEventListener("keydown",k);
      return function(){document.removeEventListener("keydown",k);if(prev&&prev.focus)prev.focus();};},[]);
    return h(R.Fragment,null,
      h("div",{className:"sx-drawer-backdrop",onClick:p.onClose}),
      h("div",{id:p.id,ref:ref,className:"sx-drawer",role:"dialog","aria-modal":"true","aria-label":"Menu"},
        h("div",{className:"sx-drawer__head"},h(SX.Logo,{size:"sm"}),h("button",{className:"sx-icon-btn sx-icon-btn--ghost",type:"button","aria-label":"Close menu",onClick:p.onClose},h(SX.Icon,{name:"x"}))),
        h("ul",{className:"sx-drawer__links"},(p.links||[]).map(function(l){return h("li",{key:l.href},h("a",{className:"sx-drawer__link",href:l.href,"aria-current":l.current?"page":null,onClick:p.onClose},l.label,h(SX.Icon,{name:"chevron-right"})));})),
        p.actions?h("div",{className:"sx-drawer__foot"},p.actions):null));
  };
  SX.Navbar=function(p){
    var st=R.useState(false),open=st[0],setOpen=st[1],did=useId("sx-dr");
    return h(R.Fragment,null,
      h("header",{className:cx("sx-nav",p.sticky&&"sx-nav--sticky",p.compact&&"sx-nav--compact",p.className)},h("div",{className:"sx-container sx-nav__inner"},
        h(SX.Logo,{size:"sm",href:p.homeHref||"/"}),
        h("nav",{"aria-label":"Primary"},h("ul",{className:"sx-nav__links"},(p.links||[]).map(function(l){return h("li",{key:l.href},h("a",{className:"sx-nav__link",href:l.href,"aria-current":l.current?"page":null},l.label));}))),
        h("div",{className:"sx-nav__actions"},p.actions,h("button",{className:"sx-icon-btn sx-nav__toggle",type:"button","aria-label":"Open menu","aria-expanded":open?"true":"false","aria-controls":did,onClick:function(){setOpen(true);}},h(SX.Icon,{name:"menu"}))))),
      open?h(SX.MobileMenu,{id:did,links:p.links,actions:p.mobileActions||p.actions,onClose:function(){setOpen(false);}}):null);
  };
}
window.SX=SX;
})();
