(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("56b15182",content,!0,{sourceMap:!1})},211:function(t){t.exports=JSON.parse('{"title":"Star Wars voor noobs","intro":"Leer Star Wars woorden in het Engels zodat je de films goed begrijpt.","questions":[{"intro":"In deze dramatische scene leren we iets over de familie Skywalker.","image":"../img/i_heart_grogu.jpg","question":"Luke, I am your..","answers":["Mother","Father","Vader","Son"],"correct":"Father"}]}')},215:function(t,e,n){"use strict";n(36);var r=n(211),o={data:function(){return{}},head:function(){return{title:"Labday #5",meta:[{content:"Application to learn dutch"}]}},computed:{isHisterisch:function(){return this.$store.state.histerie.isHisterisch}},mounted:function(){var t=this;setTimeout((function(){t.$store.commit("quiz/set",r)}),100)},methods:{}},c=(n(258),n(55)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{histerisch:t.isHisterisch},attrs:{id:"app"}},[n("NavBar"),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:n(278).default})},217:function(t,e,n){n(218),t.exports=n(219)},258:function(t,e,n){"use strict";n(200)},259:function(t,e,n){var r=n(79)(!1);r.push([t.i,".histerisch{background:red}",""]),t.exports=r},260:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{counter:0}},o={increment:function(t){t.counter++}}},261:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{isHisterisch:!1}},o={toggle:function(t,e){console.log("toggle of store"),t.isHisterisch=!t.isHisterisch}}},262:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{quiz:{title:"no quiz"},currentQuestion:0}},o={set:function(t,e){t.quiz=e}}},278:function(t,e,n){"use strict";n.r(e);var r=n(55),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("li",[n("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/settings"}},[t._v("Settings")])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/quiz"}},[t._v("Quiz")])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/score"}},[t._v("Score")])],1)])])}),[],!1,null,null,null);e.default=component.exports}},[[217,7,1,8]]]);