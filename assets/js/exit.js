function exit_intent(){function findGetParameter(parameterName){var result=null,tmp=[];var items=location.search.substr(1).split("&");for(var index=0;index<items.length;index++){tmp=items[index].split("=");if(tmp[0]===parameterName)result=decodeURIComponent(tmp[1]);}
return result;}
var exit_intent_box=document.getElementById('exit_intent_box');if(exit_intent_box){exit_intent_box.style.display='none';var triggered=false
if(findGetParameter('ei')!='1'&&findGetParameter('ep')!='f'){setTimeout(function(){window.addEventListener('mouseout',function(e){e=e?e:window.event;if(e.toElement===null&&e.relatedTarget===null){if(!triggered){exit_intent_box.style.display='block';var exit_intent_box_container=document.createElement('DIV');exit_intent_box_container.style.position='fixed';exit_intent_box_container.style.padding='1em';exit_intent_box_container.style.top='0';exit_intent_box_container.style.bottom='0';exit_intent_box_container.style.right='0';exit_intent_box_container.style.left='0';exit_intent_box_container.style.zIndex='10000';var exit_intent_box_shadow_box=document.createElement('DIV');exit_intent_box_shadow_box.style.position='absolute';exit_intent_box_shadow_box.style.top='0';exit_intent_box_shadow_box.style.bottom='0';exit_intent_box_shadow_box.style.right='0';exit_intent_box_shadow_box.style.left='0';exit_intent_box_shadow_box.style.background='#00000080';exit_intent_box_shadow_box.style.zIndex='10001';var exit_intent_box_frame=document.createElement('DIV');exit_intent_box_frame.style.position='relative';exit_intent_box_frame.style.padding='0';exit_intent_box_frame.style.margin='0 auto';exit_intent_box_frame.style.maxWidth=(exit_intent_box.clientWidth+'px');exit_intent_box_frame.style.zIndex='10002';exit_intent_box_frame.style.width='100%';exit_intent_box_frame.appendChild(exit_intent_box);exit_intent_box_container.appendChild(exit_intent_box_frame);exit_intent_box_container.appendChild(exit_intent_box_shadow_box);exit_intent_box_shadow_box.addEventListener('onclick',function(e){exit_intent_box_container.style.display='none';});document.body.appendChild(exit_intent_box_container);exit_intent_box_shadow_box.addEventListener('click',function(e){exit_intent_box_container.style.display='none';});var exit_intent_closers=document.getElementsByClassName('exit_intent_box_closer');for(let closer of exit_intent_closers){closer.addEventListener('click',function(e){exit_intent_box_container.style.display='none';})}
triggered=true;}}});},10000);}}}