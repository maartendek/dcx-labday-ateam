(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{285:function(t,e,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("6db79501",content,!0,{sourceMap:!1})},286:function(t,e,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("92e9f93c",content,!0,{sourceMap:!1})},287:function(t,e,r){"use strict";r(285)},288:function(t,e,r){var n=r(60)(!1);n.push([t.i,"div.overlay-modal[data-v-165b3539]{position:fixed;top:0;background:rgba(0,0,0,.7);width:100vw;height:100vh}div.the-modal[data-v-165b3539]{background:linear-gradient(180.05deg,#491c83 .04%,#6226a2 94.06%);padding-top:30px;padding-bottom:30px}",""]),t.exports=n},289:function(t,e,r){"use strict";r(286)},290:function(t,e,r){var n=r(60)(!1);n.push([t.i,"#saber-canvas[data-v-0efb5434]{position:absolute;width:100vw;height:100vh;z-index:9;top:0}",""]),t.exports=n},291:function(t,e,r){"use strict";r.r(e);var n=r(45);r(1),r(125);function o(t){var e={target:"confetti-holder",max:80,size:1,animate:!0,respawn:!0,props:["circle","square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:25,interval:null,rotate:!1,start_from_edge:!1,width:window.innerWidth,height:window.innerHeight};if(t&&(t.target&&(e.target=t.target),t.max&&(e.max=t.max),t.size&&(e.size=t.size),void 0!==t.animate&&null!==t.animate&&(e.animate=t.animate),void 0!==t.respawn&&null!==t.respawn&&(e.respawn=t.respawn),t.props&&(e.props=t.props),t.colors&&(e.colors=t.colors),t.clock&&(e.clock=t.clock),void 0!==t.start_from_edge&&null!==t.start_from_edge&&(e.start_from_edge=t.start_from_edge),t.width&&(e.width=t.width),t.height&&(e.height=t.height),void 0!==t.rotate&&null!==t.rotate&&(e.rotate=t.rotate)),"object"!=Object(n.a)(e.target)&&"string"!=typeof e.target)throw new TypeError("The target parameter should be a node or string");if("object"==Object(n.a)(e.target)&&(null===e.target||!e.target instanceof HTMLCanvasElement)||"string"==typeof e.target&&(null===document.getElementById(e.target)||!document.getElementById(e.target)instanceof HTMLCanvasElement))throw new ReferenceError("The target element does not exist or is not a canvas element");var r="object"==Object(n.a)(e.target)?e.target:document.getElementById(e.target),o=r.getContext("2d"),c=[];function l(t,e){t||(t=1);var r=Math.random()*t;return e?Math.floor(r):r}var d=e.props.reduce((function(t,e){return t+(e.weight||1)}),0);function h(){var t=e.props[function(){for(var t=Math.random()*d,i=0;i<e.props.length;++i){var r=e.props[i].weight||1;if(t<r)return i;t-=r}}()];return{prop:t.type?t.type:t,x:l(e.width),y:e.start_from_edge?e.clock>=0?-10:parseFloat(e.height)+10:l(e.height),src:t.src,radius:l(4)+1,size:t.size,rotate:e.rotate,line:Math.floor(l(65)-30),angles:[l(10,!0)+2,l(10,!0)+2,l(10,!0)+2,l(10,!0)+2],color:e.colors[l(e.colors.length,!0)],rotation:l(360,!0)*Math.PI/180,speed:l(e.clock/7)+e.clock/30}}function v(p){if(p){var t=p.radius<=3?.4:.8;switch(o.fillStyle=o.strokeStyle="rgba("+p.color+", "+t+")",o.beginPath(),p.prop){case"circle":o.moveTo(p.x,p.y),o.arc(p.x,p.y,p.radius*e.size,0,2*Math.PI,!0),o.fill();break;case"triangle":o.moveTo(p.x,p.y),o.lineTo(p.x+p.angles[0]*e.size,p.y+p.angles[1]*e.size),o.lineTo(p.x+p.angles[2]*e.size,p.y+p.angles[3]*e.size),o.closePath(),o.fill();break;case"line":o.moveTo(p.x,p.y),o.lineTo(p.x+p.line*e.size,p.y+5*p.radius),o.lineWidth=2*e.size,o.stroke();break;case"square":o.save(),o.translate(p.x+15,p.y+5),o.rotate(p.rotation),o.fillRect(-15*e.size,-5*e.size,15*e.size,5*e.size),o.restore();break;case"svg":o.save();var image=new window.Image;image.src=p.src;var r=p.size||15;o.translate(p.x+r/2,p.y+r/2),p.rotate&&o.rotate(p.rotation),o.drawImage(image,-r/2*e.size,-r/2*e.size,r*e.size,r*e.size),o.restore()}}}var f=function(){e.animate=!1,clearInterval(e.interval),requestAnimationFrame((function(){o.clearRect(0,0,r.width,r.height);var t=r.width;r.width=1,r.width=t}))};return{render:function(){r.width=e.width,r.height=e.height,c=[];for(var i=0;i<e.max;i++)c.push(h());return requestAnimationFrame((function t(){for(var i in o.clearRect(0,0,e.width,e.height),c)v(c[i]);!function(){for(var i=0;i<e.max;i++){var p=c[i];p&&(e.animate&&(p.y+=p.speed),p.rotate&&(p.rotation+=p.speed/35),(p.speed>=0&&p.y>e.height||p.speed<0&&p.y<0)&&(e.respawn?(c[i]=p,c[i].x=l(e.width,!0),c[i].y=p.speed>=0?-10:parseFloat(e.height)):c[i]=void 0))}c.every((function(p){return void 0===p}))&&f()}(),e.animate&&requestAnimationFrame(t)}))},clear:f}}var c={data:function(){return{}},computed:{},mounted:function(){new o({target:"saber-canvas",max:"180",size:"1",animate:!0,props:[{type:"svg",src:"./img/saber-blue.svg",size:20,weight:1},{type:"svg",src:"./img/saber-red.svg",size:20,weight:1},{type:"svg",src:"./img/saber-yellow.svg",size:20,weight:1},{type:"svg",src:"./img/saber-green.svg",size:20,weight:1}],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:"25",rotate:!0,width:screen.width,height:screen.height,start_from_edge:!1,respawn:!0}).render()},methods:{}},l=(r(289),r(47)),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"saber-canvas"}})}),[],!1,null,"0efb5434",null);e.default=component.exports},292:function(t,e,r){"use strict";r.r(e);var n={props:["text","image","altText","callback"],data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=(r(287),r(47)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overlay-modal"},[r("div",{staticClass:"container container-fluid the-modal"},[r("h1",[t._v(t._s(t.text))]),t._v("\n<<<<<<< HEAD\n      "),r("img",{attrs:{src:t.image,alt:t.altText}}),t._v(" "),r("button",[t._v("Continue")])]),t._v("\n=======\n      "),t.image?r("img",{attrs:{src:t.image,alt:t.altText}}):t._e(),t._v("\n>>>>>>> 6a061cbae5ef3e55727af599279598ad1d476c4c\n  ")])}),[],!1,null,"165b3539",null);e.default=component.exports},293:function(t,e,r){t.exports=r.p+"img/yoda-much-to-learn-you-still-have.76a08e8.gif"},294:function(t,e,r){"use strict";r.r(e);r(35);var n={data:function(){return{questionAnswered:!1,questionStatus:"idle"}},computed:{isHysterisch:function(){var t=this.$store.state.histerie.isHisterisch;return t},quiz:function(){var t=JSON.parse(JSON.stringify(this.$store.state.quiz.quiz));return t},current:function(){var t=JSON.parse(JSON.stringify(this.$store.state.quiz.currentQuestion));return t},question:function(){var t=JSON.parse(JSON.stringify(this.$store.state.quiz.quiz));console.log(this.current);var e=t.questions&&t.questions.length>=this.current-1?t.questions[this.current]:[];return e}},mounted:function(){},methods:{checkAnswer:function(t){var e=this;t.target.innerText===this.question.correct?this.questionStatus="pass":this.questionStatus="fail",setTimeout((function(){e.nextPage()}),4e3)},nextPage:function(){this.questionStatus="idle",this.quiz.questions.length===this.current&&this.$router.push("/store"),this.$store.commit("quiz/next")}}},o=n,c=r(47),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"quiz"}},[n("div",{staticClass:"container container-fluid quiz_page text-center"},[n("h1",{staticClass:"mt-3"},[t._v("Quiz "),t.quiz?n("span",[t._v(t._s(t.quiz.title))]):t._e()]),t._v(" "),n("div",{staticClass:"question_field"},[n("div",{staticClass:"question_intro"},[n("p",[t._v(t._s(t.question.intro)+"\n          ")])]),t._v(" "),n("div",{staticClass:"question_img"},[n("img",{staticClass:"img-fluid",attrs:{src:t.question.image,alt:t.question.alt}})]),t._v(" "),n("div",{staticClass:"question"},[n("p",[t._v(t._s(t.question.question)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"answer_field"},[n("div",{staticClass:"answer_btns"},t._l(t.question.answers,(function(e){return n("button",{key:e,staticClass:"answer_btn btn btn-primary",attrs:{type:"button"},on:{click:t.checkAnswer}},[t._v(t._s(e))])})),0)]),t._v(" "),n("button",{staticClass:"continue_btn btn btn-secondary mt-4",attrs:{type:"button"}},[t._v("Next!")])]),t._v(" "),"fail"===t.questionStatus?n("Modal",{attrs:{text:"FOUT!",image:r(293),altText:"sweet baby yoda"}}):t._e(),t._v(" "),"pass"===t.questionStatus?n("Modal",{attrs:{text:"GOED!"}}):t._e(),t._v(" "),"pass"===t.questionStatus&&t.isHysterisch?n("SaberConfetti"):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:r(292).default,SaberConfetti:r(291).default})}}]);