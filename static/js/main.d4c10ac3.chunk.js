(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(a,e,t){a.exports=t(21)},19:function(a,e,t){},2:function(a,e){a.exports=[{animal:"okapai",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_okapi_0.jpg"},{animal:"binturong",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_binterong.jpg"},{animal:"ocelot",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_ocelot.jpg"},{animal:"pronghorn",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_pronghorn.jpg"},{animal:"ringtail",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2019-03/animals_hero_ringtail.jpg"},{animal:"serval",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_serval.jpg"},{animal:"sunbear",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_sunbear.jpg"},{animal:"takin",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_takin.jpg"},{animal:"tenrec",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2017-03/animals_hero_tenrec.jpg"},{animal:"warthog",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_warthog.jpg"},{animal:"whale",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-08/hero_whale_humpback.jpg"},{animal:"wolf",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-08/hero_gray_wolf_animals.jpg"},{animal:"wombat",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-08/hero%2Bsouthernhairynosedwombat_animals.jpg"},{animal:"zebra",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-08/hero_zebra_animals.jpg"},{animal:"agouti",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_agouti_0.jpg"},{animal:"bat",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_bats.jpg"},{animal:"babirusa",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2017-02/animals_hero_barbirusa.jpg"},{animal:"bontebok",imageURL:"https://animals.sandiegozoo.org/sites/default/files/2017-03/animals_hero_bontebok_02.jpg"}]},20:function(a,e,t){},21:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),o=t(4),s=t.n(o),l=(t(19),t(10)),r=t(5),m=t(6),c=t(11),g=t(7),u=t(12),h=(t(20),t(2)),d=t.n(h),p=t(23),f=function(a){function e(){var a,t;Object(r.a)(this,e);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=Object(c.a)(this,(a=Object(g.a)(e)).call.apply(a,[this].concat(o)))).state={data:d.a,currentScore:0,topScore:0,animalsClicked:[],alert:"Start!"},t.showAnimal=function(){return t.state.data.map(function(a){return i.a.createElement("img",{class:"animal",id:a.animal,src:a.imageURL,onClick:t.onAnimalClick})})},t.onAnimalClick=function(a){-1===t.state.animalsClicked.indexOf(a.target.id)?(t.setState({animalsClicked:[].concat(Object(l.a)(t.state.animalsClicked),[a.target.id]),currentScore:t.state.currentScore+1,alert:"Correct!"}),d.a.sort(function(a,e){return.5-Math.random()}),t.best()):(t.setState({currentScore:0,animalsClicked:[],alert:"Sorry! You already clicked that one!"}),d.a.sort(function(a,e){return.5-Math.random()}),t.best())},t.best=function(){t.state.currentScore>=t.state.topScore?t.setState({topScore:t.state.currentScore}):12===t.state.currentScore&&t.setState({alert:"You win!",topScore:t.state.currentScore})},t}return Object(u.a)(e,a),Object(m.a)(e,[{key:"render",value:function(){return console.log(d.a),i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Clicky Game"),i.a.createElement("p",null,"Click each animal only once! Can your memory pass the test?"),i.a.createElement("h2",null,"Score = ",this.state.currentScore," --- Top Score = ",this.state.topScore),i.a.createElement("p",null,this.state.alert),i.a.createElement(p.a,{className:"bg-dark text-black"},this.showAnimal(),i.a.createElement(p.a.Text,null,i.a.createElement(p.a.Title,null,d.a.map.animal))))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.d4c10ac3.chunk.js.map