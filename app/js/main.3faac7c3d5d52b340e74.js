(()=>{"use strict";let e=(t=window.console,{log:function(e){t.log(s.apply(null,n),e)},info:function(e){t.info(s.apply(null,n),e)},warn:function(e){t.warn(s.apply(null,n),e)},error:function(e){t.error(s.apply(null,n),e)}});var t,n;function s(){let e=new Date;return("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)+" "+("0"+e.getDate()).slice(-2)+"/"+("0"+(e.getMonth()+1)).slice(-2)+"/"+("0"+e.getFullYear()).slice(-2)}window.console=e,new class{constructor(){this._oldestIndex=1,this._newestIndex=1,this._storage={}}size(){try{let t=this._newestIndex-this._oldestIndex;return e.log("Запрос на длину очереди! Длина очереди: "+t),t}catch(t){e.log(t)}}enqueue(t){try{this._storage[this._newestIndex]=t,this._newestIndex++,e.log("Добавление элемента '"+t+"' в очередь!")}catch(t){e.log(t)}}dequeue(){let t,n=this._oldestIndex,s=this._newestIndex;try{if(n!==s)return t=this._storage[n],delete this._storage[n],this._oldestIndex++,e.log("Удаление первого элемента из очереди!"),t}catch(t){e.log(t)}}}})();