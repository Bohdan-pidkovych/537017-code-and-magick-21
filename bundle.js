(()=>{"use strict";var e,t,n,i,s;e=function(e,t,n,i){e.fillStyle=i,e.fillRect(t,n,420,270)},window.renderStatistics=function(t,n,i){e(t,110,20,"rgba(0, 0, 0, 0.7)"),e(t,100,10,"#ffffff"),t.fillStyle="#000000",t.font='16px "PT Mono"',function(e){e.fillText("Ура вы победили!",120,40),e.fillText("Список результатов: ",120,60)}(t),function(e,t,n){for(var i=function(e){for(var t=e[0],n=1;n<e.length;n++)e[n]>t&&(t=e[n]);return t}(n),s=0;s<t.length;s++){var r=150+90*s;e.fillStyle="#000000",e.fillText(Math.round(n[s]),r,270-150*n[s]/i-40),e.fillText(t[s],r,260),e.fillStyle="Вы"===t[s]?"rgba(255, 0, 0, 1)":`hsl(240, ${100*Math.random()}%, 50%)`,e.fillRect(r,240,40,-150*n[s]/i)}}(t,n,i)},window.backend={save:function(e,t,n){var i=new XMLHttpRequest;i.responseType="json",i.addEventListener("load",(function(){200===i.status?t(i.response):n("Статус ответа: "+i.status+" "+i.statusText)})),i.addEventListener("error",(function(){n("Произошла ошибка соединения")})),i.addEventListener("timeout",(function(){n("Запрос не успел выполниться за "+i.timeout+"мс")})),i.timeout=1e4,i.open("POST","https://21.javascript.pages.academy/code-and-magick"),i.send(e)},load:function(e,t){var n=new XMLHttpRequest;n.responseType="json",n.addEventListener("load",(function(){200===n.status?e(n.response):t("Статус ответа: "+n.status+" "+n.statusText)})),n.addEventListener("error",(function(){t("Произошла ошибка соединения")})),n.addEventListener("timeout",(function(){t("Запрос не успел выполниться за "+n.timeout+"мс")})),n.timeout=1e4,n.open("GET","https://21.javascript.pages.academy/code-and-magick/data"),n.send()}},window.data={COAT_COLORS:["rgb(101, 137, 164)","rgb(241, 43, 107)","rgb(146, 100, 161)","rgb(56, 159, 117)","rgb(215, 210, 55)","rgb(0, 0, 0)"],EYES_COLORS:["black","red","blue","yellow","green"],FIREBALL_COLORS:["#ee4830","#30a8ee","#5ce6c0","#e848d5","#e6e848"]},t=document.querySelector(".setup").querySelector(".setup-user-name"),window.util={getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},isEscEvent:function(e,n){"Escape"===e.key&&e.target!==t&&(e.preventDefault(),n())},isEnterEvent:function(e,t){"Enter"===e.key&&t()}},window.debounce=function(e){var t=null;return function(n){t&&window.clearTimeout(t),t=window.setTimeout((function(){e(n)}),500)}},n=document.querySelector(".setup"),i=n.querySelector(".setup-similar-list"),s=document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item"),window.render={renderWizards:function(e){var t,r,a=document.createDocumentFragment(),o=e.length>4?4:e.length;i.innerHTML="";for(var d=0;d<o;d++)a.appendChild((t=e[d],r=void 0,(r=s.cloneNode(!0)).querySelector(".setup-similar-label").textContent=t.name,r.querySelector(".wizard-coat").style.fill=t.colorCoat,r.querySelector(".wizard-eyes").style.fill=t.colorEyes,r));i.appendChild(a),n.querySelector(".setup-similar").classList.remove("hidden")}},(()=>{var e=document.querySelector(".setup"),t=e.querySelector(".setup-wizard"),n=t.querySelector(".wizard-coat"),i=t.querySelector(".wizard-eyes"),s=e.querySelector(".setup-fireball-wrap"),r=e.querySelector('input[name="coat-color"]'),a=e.querySelector('input[name="eyes-color"]'),o=s.querySelector("input"),d={onEyesChange:function(e){return e},onCoatChange:function(e){return e}};n.addEventListener("click",(function(){var e=window.util.getRandomInt(0,window.data.COAT_COLORS.length),t=window.data.COAT_COLORS[e];n.style.fill=t,r.value=t,d.onCoatChange(t)})),i.addEventListener("click",(function(){var e=window.util.getRandomInt(0,window.data.EYES_COLORS.length),t=window.data.EYES_COLORS[e];i.style.fill=t,a.value=t,d.onEyesChange(t)})),s.addEventListener("click",(function(){var e=window.util.getRandomInt(0,window.data.FIREBALL_COLORS.length),t=window.data.FIREBALL_COLORS[e];s.style.background=t,o.value=t})),window.wizard=d})(),(()=>{var e=document.querySelector(".setup"),t=document.querySelector(".setup-open"),n=e.querySelector(".setup-close"),i=[],s=function(e){window.util.isEscEvent(e,o)},r={x:"",y:""},a=function(){e.classList.remove("hidden"),r={x:e.offsetLeft,y:e.offsetTop},document.addEventListener("keydown",s)},o=function(){e.classList.add("hidden"),e.style.left=r.x+"px",e.style.top=r.y+"px",document.removeEventListener("keydown",s)};t.addEventListener("click",(function(){a()})),t.addEventListener("keydown",(function(e){window.util.isEnterEvent(e,a)})),n.addEventListener("click",(function(){o()})),n.addEventListener("keydown",(function(e){window.util.isEnterEvent(e,o)}));var d="rgb(101, 137, 164)",c="black",u=function(e){var t=0;return e.colorCoat===d&&(t+=2),e.colorEyes===c&&(t+=1),t},l=function(){window.render.renderWizards(i.sort((function(e,t){var n=u(t)-u(e);return 0===n&&(n=function(e,t){return e>t?1:e<t?-1:0}(e.name,t.name)),n})))};window.wizard.onCoatChange=window.debounce((function(e){d=e,l()})),window.wizard.onEyesChange=window.debounce((function(e){c=e,l()}));var h=function(e){var t=document.createElement("div");t.style="z-index: 100; margin: 0 auto; text-align: center; background-color: red;",t.style.position="absolute",t.style.left=0,t.style.right=0,t.style.fontSize="30px",t.textContent=e,document.body.insertAdjacentElement("afterbegin",t)};window.backend.load((function(e){i=e,l()}),h);var f=e.querySelector(".setup-wizard-form");f.addEventListener("submit",(function(t){window.backend.save(new FormData(f),(function(){e.classList.add("hidden")}),h),t.preventDefault()}))})(),(()=>{var e=document.querySelector(".setup"),t=e.querySelector(".upload");t.addEventListener("mousedown",(function(n){n.preventDefault();var i={x:n.clientX,y:n.clientY},s=!1,r=function(t){t.preventDefault(),s=!0;var n=i.x-t.clientX,r=i.y-t.clientY;i={x:t.clientX,y:t.clientY},e.style.top=e.offsetTop-r+"px",e.style.left=e.offsetLeft-n+"px"},a=function(e){if(e.preventDefault(),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a),s){var n=function(e){e.preventDefault(),t.removeEventListener("click",n)};t.addEventListener("click",n)}};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}))})(),window.GameConstants={Fireball:{size:window.fireballSize||24,speed:window.getFireballSpeed||function(e){return e?2:5}},Wizard:{speed:window.wizardSpeed||2,width:window.wizardWidth||61,getHeight:window.getWizardHeight||function(e){return 1.377*e},getX:window.getWizardX||function(e){return e/3},getY:window.getWizardY||function(e){return e-100}}},window.Game=function(){var e=300,t=700,n=["Кекс","Катя","Игорь"],i={},s="-reversed";i[0]={width:61,height:84,url:"img/wizard.gif"},i[0+s]={width:61,height:84,url:"img/wizard-reversed.gif"},i[1]={width:24,height:24,url:"img/fireball.gif"};var r={0:function(n,i,s){i.keysPressed.UP&&n.y>0&&(n.direction=-9&n.direction,n.direction=4|n.direction,n.y-=n.speed*s*2),i.keysPressed.UP||n.y<e-n.height&&(n.direction=-5&n.direction,n.direction=8|n.direction,n.y+=n.speed*s/3),i.keysPressed.LEFT&&(n.direction=-3&n.direction,n.direction=1|n.direction,n.x-=n.speed*s),i.keysPressed.RIGHT&&(n.direction=-2&n.direction,n.direction=2|n.direction,n.x+=n.speed*s),n.y<0&&(n.y=0),n.y>e-n.height&&(n.y=e-n.height),n.x<0&&(n.x=0),n.x>t-n.width&&(n.x=t-n.width)},1:function(e,n,i){1&e.direction&&(e.x-=e.speed*i),2&e.direction&&(e.x+=e.speed*i),(e.x<0||e.x>t)&&(e.state=1)}},a={CONTINUE:0,WIN:1,FAIL:2,PAUSE:3,INTRO:4},o={0:function(e){return e.garbage.filter((function(e){return 1===e.type})).filter((function(e){return e.x<10&&e.y>240}))[0]?a.WIN:a.CONTINUE}},d={0:function(n){return n.objects.push({direction:2,height:window.GameConstants.Wizard.getHeight(window.GameConstants.Wizard.width),speed:window.GameConstants.Wizard.speed,sprite:i[0],state:0,type:0,width:window.GameConstants.Wizard.width,x:window.GameConstants.Wizard.getX(t),y:window.GameConstants.Wizard.getY(e)}),n}},c=function(e){this.container=e,this.canvas=document.createElement("canvas"),this.canvas.width=e.clientWidth,this.canvas.height=e.clientHeight,this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this._onKeyDown=this._onKeyDown.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._pauseListener=this._pauseListener.bind(this),this.setDeactivated(!1)};c.prototype={level:0,setDeactivated:function(e){this._deactivated!==e&&(this._deactivated=e,e?this._removeGameListeners():this._initializeGameListeners())},getInitialState:function(){return{currentStatus:a.CONTINUE,garbage:[],lastUpdated:null,keysPressed:{ESC:!1,LEFT:!1,RIGHT:!1,SPACE:!1,UP:!1},levelStartTime:null,objects:[],startTime:null}},initializeLevelAndStart:function(e){(e=void 0===e||e)||!this.state?(this._imagesArePreloaded=void 0,this.state=this.getInitialState(),this.state=d[this.level](this.state)):this.state.currentStatus=a.CONTINUE,this.state.levelStartTime=Date.now(),this.state.startTime||(this.state.startTime=this.state.levelStartTime),this._preloadImagesForLevel(function(){this.render(),this._initializeGameListeners(),this.update()}.bind(this))},pauseLevel:function(e){e&&(this.state.currentStatus=e),this.state.keysPressed.ESC=!1,this.state.lastUpdated=null,this._removeGameListeners(),window.addEventListener("keydown",this._pauseListener),this._drawPauseScreen()},_pauseListener:function(e){if(32===e.keyCode&&!this._deactivated){e.preventDefault();var t=this.state.currentStatus===a.WIN||this.state.currentStatus===a.FAIL;this.initializeLevelAndStart(t),window.removeEventListener("keydown",this._pauseListener)}},_drawPauseScreen:function(){var e;switch(this.state.currentStatus){case a.WIN:if(window.renderStatistics){var t=this._generateStatistics(new Date-this.state.startTime),n=this._shuffleArray(Object.keys(t));return void window.renderStatistics(this.ctx,n,n.map((function(e){return t[e]})))}e="Вы победили Газебо!\nУра!";break;case a.FAIL:e="Вы проиграли!";break;case a.PAUSE:e="Игра на паузе!\nНажмите Пробел, чтобы продолжить";break;case a.INTRO:e="Добро пожаловать!\nНажмите Пробел для начала игры"}this._drawMessage(e)},_generateStatistics:function(e){for(var t={Вы:e},i=0;i<n.length;i++){var s=e+(3e3*Math.random()-1500);s<1e3&&(s=1e3),t[n[i]]=s}return t},_shuffleArray:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}return e},_drawMessage:function(e){var t=this.ctx,n=function(e,n,i,s){t.beginPath(),t.moveTo(e,n),t.lineTo(e+10,n+s/2),t.lineTo(e,n+s),t.lineTo(e+i/2,n+s-10),t.lineTo(e+i,n+s),t.lineTo(e+i-10,n+s/2),t.lineTo(e+i,n),t.lineTo(e+i/2,n+10),t.lineTo(e,n),t.stroke(),t.closePath(),t.fill()};t.fillStyle="rgba(0, 0, 0, 0.7)",n(190,40,320,100),t.fillStyle="rgba(256, 256, 256, 1.0)",n(180,30,320,100),t.fillStyle="#000",t.font="16px PT Mono",e.split("\n").forEach((function(e,n){t.fillText(e,200,80+20*n)}))},_preloadImagesForLevel:function(e){if(void 0===this._imagesArePreloaded&&(this._imagesArePreloaded=[]),this._imagesArePreloaded[this.level])e();else for(var t=Object.keys(i),n=t.length,s=this,r=function(t){var i=new Image(t.width,t.height);i.onload=function(){t.image=i,0==--n&&(s._imagesArePreloaded[s.level]=!0,e())},i.src=t.url},a=0;a<t.length;a++)r(i[t[a]])},updateObjects:function(e){var t=this.state.objects.filter((function(e){return 0===e.type}))[0];this.state.keysPressed.SHIFT&&(this.state.objects.push({direction:t.direction,height:window.GameConstants.Fireball.size,speed:window.GameConstants.Fireball.speed(!!(1&t.direction)),sprite:i[1],type:1,width:window.GameConstants.Fireball.size,x:2&t.direction?t.x+t.width:t.x-window.GameConstants.Fireball.size,y:t.y+t.height/2}),this.state.keysPressed.SHIFT=!1),this.state.garbage=[];var n=this.state.objects.filter((function(t){return r[t.type](t,this.state,e),1!==t.state||(this.state.garbage.push(t),!1)}),this);this.state.objects=n},checkStatus:function(){if(this.state.currentStatus===a.CONTINUE){this.commonRules||(this.commonRules=[function(e){return 1===e.objects.filter((function(e){return 0===e.type}))[0].state?a.FAIL:a.CONTINUE},function(e){return e.keysPressed.ESC?a.PAUSE:a.CONTINUE},function(e){return Date.now()-e.startTime>18e4?a.FAIL:a.CONTINUE}]);for(var e=this.commonRules.concat(o[this.level]),t=a.CONTINUE;t===a.CONTINUE&&e.length;)t=e.shift()(this.state);this.state.currentStatus=t}},setGameStatus:function(e){this.state.currentStatus!==e&&(this.state.currentStatus=e)},render:function(){this.ctx.clearRect(0,0,t,e),this.state.objects.forEach((function(e){if(e.sprite){var t=1&e.direction,n=i[e.type+(t?s:"")]||i[e.type];this.ctx.drawImage(n.image,e.x,e.y,e.width,e.height)}}),this)},update:function(){this.state.lastUpdated||(this.state.lastUpdated=Date.now());var e=(Date.now()-this.state.lastUpdated)/10;switch(this.updateObjects(e),this.checkStatus(),this.state.currentStatus){case a.CONTINUE:this.state.lastUpdated=Date.now(),this.render(),requestAnimationFrame(function(){this.update()}.bind(this));break;case a.WIN:case a.FAIL:case a.PAUSE:case a.INTRO:this.pauseLevel()}},_onKeyDown:function(e){switch(e.keyCode){case 37:this.state.keysPressed.LEFT=!0;break;case 39:this.state.keysPressed.RIGHT=!0;break;case 38:this.state.keysPressed.UP=!0;break;case 27:this.state.keysPressed.ESC=!0}e.shiftKey&&(this.state.keysPressed.SHIFT=!0)},_onKeyUp:function(e){switch(e.keyCode){case 37:this.state.keysPressed.LEFT=!1;break;case 39:this.state.keysPressed.RIGHT=!1;break;case 38:this.state.keysPressed.UP=!1;break;case 27:this.state.keysPressed.ESC=!1}e.shiftKey&&(this.state.keysPressed.SHIFT=!1)},_initializeGameListeners:function(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)},_removeGameListeners:function(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)}},c.Verdict=a;var u=new c(document.querySelector(".demo"));return window.restartGame=function(e,t){i[0].url=e,i[0+s].url=t,u.initializeLevelAndStart(),u.setGameStatus(a.INTRO)},window.restartGame("img/wizard.gif","img/wizard-reversed.gif"),u}()})();