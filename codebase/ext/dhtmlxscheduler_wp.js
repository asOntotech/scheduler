/*
@license

dhtmlxScheduler v.5.2.2 Stardard
This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.

*/
Scheduler.plugin(function(e){e.attachEvent("onLightBox",function(){if(this._cover)try{this._cover.style.height=this.expanded?"100%":(document.body.parentNode||document.body).scrollHeight+"px"}catch(e){}}),e.form_blocks.select.set_value=function(e,t,a){void 0!==t&&""!==t||(t=(e.firstChild.options[0]||{}).value),e.firstChild.value=t||""}});
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_wp.js.map