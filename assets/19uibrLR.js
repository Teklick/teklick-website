import{c as p,g as I}from"./Cpj98o6Y.js";var H={exports:{}};/*! gumshoejs v5.1.2 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */(function(x,N){(function(r,m){x.exports=m(r)})(typeof p<"u"?p:typeof window<"u"?window:p,function(r){var m={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},g=function(t,n,e){if(e.settings.events){var o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:e});n.dispatchEvent(o)}},h=function(t){var n=0;if(t.offsetParent)for(;t;)n+=t.offsetTop,t=t.offsetParent;return n>=0?n:0},E=function(t){t&&t.sort(function(n,e){return h(n.content)<h(e.content)?-1:1})},y=function(t,n,e){var o=t.getBoundingClientRect(),s=function(c){return typeof c.offset=="function"?parseFloat(c.offset()):parseFloat(c.offset)}(n);return e?parseInt(o.bottom,10)<(r.innerHeight||document.documentElement.clientHeight):parseInt(o.top,10)<=s},A=function(){return r.innerHeight+r.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},F=function(t,n){var e=t[t.length-1];if(function(s,c){return!(!A()||!y(s.content,c,!0))}(e,n))return e;for(var o=t.length-1;o>=0;o--)if(y(t[o].content,n))return t[o]},C=function(t,n){if(n.nested&&t.parentNode){var e=t.parentNode.closest("li");e&&(e.classList.remove(n.nestedClass),C(e,n))}},v=function(t,n){if(t){var e=t.nav.closest("li");e&&(e.classList.remove(n.navClass),t.content.classList.remove(n.contentClass),C(e,n),g("gumshoeDeactivate",e,{link:t.nav,content:t.content,settings:n}))}},b=function(t,n){if(n.nested){var e=t.parentNode.closest("li");e&&(e.classList.add(n.nestedClass),b(e,n))}};return function(t,n){var e,o,s,c,l,u={};u.setup=function(){e=document.querySelectorAll(t),o=[],Array.prototype.forEach.call(e,function(i){var a=document.getElementById(decodeURIComponent(i.hash.substr(1)));a&&o.push({nav:i,content:a})}),E(o)},u.detect=function(){var i=F(o,l);i?s&&i.content===s.content||(v(s,l),function(a,f){if(a){var d=a.nav.closest("li");d&&(d.classList.add(f.navClass),a.content.classList.add(f.contentClass),b(d,f),g("gumshoeActivate",d,{link:a.nav,content:a.content,settings:f}))}}(i,l),s=i):s&&(v(s,l),s=null)};var L=function(i){c&&r.cancelAnimationFrame(c),c=r.requestAnimationFrame(u.detect)},w=function(i){c&&r.cancelAnimationFrame(c),c=r.requestAnimationFrame(function(){E(o),u.detect()})};return u.destroy=function(){s&&v(s,l),r.removeEventListener("scroll",L,!1),l.reflow&&r.removeEventListener("resize",w,!1),o=null,e=null,s=null,c=null,l=null},l=function(){var i={};return Array.prototype.forEach.call(arguments,function(a){for(var f in a){if(!a.hasOwnProperty(f))return;i[f]=a[f]}}),i}(m,n||{}),u.setup(),u.detect(),r.addEventListener("scroll",L,!1),l.reflow&&r.addEventListener("resize",w,!1),u}})})(H);var q=H.exports;const j=I(q);export{j as g};
