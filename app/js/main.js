/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (() => {

eval("\r\n\r\n\r\n\r\nclass Queue {\r\n    constructor() {\r\n        this._oldestIndex = 1;\r\n        this._newestIndex = 1;\r\n        this._storage = {};\r\n    }\r\n    size() {\r\n        try {\r\n            let currentSize = this._newestIndex - this._oldestIndex;\r\n            console.log('Запрос на длину очереди! Длина очереди: ' + currentSize);\r\n            return currentSize;\r\n        } catch (e) {\r\n            console.log(e);\r\n        }\r\n    }\r\n    enqueue(data) {\r\n        try {\r\n            this._storage[this._newestIndex] = data;\r\n            this._newestIndex++;\r\n            console.log('Добавление элемента ' + '\\'' + data + '\\'' + ' в очередь!');\r\n        } catch (e) {\r\n            console.log(e);\r\n        }\r\n    }\r\n    dequeue() {\r\n        let oldestIndex = this._oldestIndex,\r\n            newestIndex = this._newestIndex,\r\n            deletedData;\r\n        try {\r\n            if (oldestIndex !== newestIndex) {\r\n                deletedData = this._storage[oldestIndex];\r\n                delete this._storage[oldestIndex];\r\n                this._oldestIndex++;\r\n                console.log('Удаление первого элемента из очереди!');\r\n\r\n                return deletedData;\r\n            }\r\n        } catch (e) {\r\n            console.log(e);\r\n        }\r\n    }\r\n}\r\n\r\n\r\n//redefining the console\r\nlet console = (function(oldCons, time){\r\n    return {\r\n        log: function(text){\r\n            oldCons.log( getCurrentDate.apply(null, time), text );\r\n        },\r\n        info: function (text) {\r\n            oldCons.info( getCurrentDate.apply(null, time), text );   \r\n        },\r\n        warn: function (text) {\r\n            oldCons.warn( getCurrentDate.apply(null, time), text );   \r\n        },\r\n        error: function (text) {\r\n            oldCons.error( getCurrentDate.apply(null, time), text );\r\n        }\r\n    };\r\n}(window.console));\r\n\r\nwindow.console = console;\r\n\r\n\r\nfunction getCurrentDate() {\r\n    let data = new Date();  \r\n    let time  = ('0' + data.getHours()).slice(-2) + \":\" +  \r\n                ('0' + data.getMinutes()).slice(-2) + \":\" +  \r\n                ('0' + data.getSeconds()).slice(-2) + \" \" +\r\n                ('0' + data.getDate()).slice(-2) + '/' + \r\n                ('0' + ( data.getMonth() + 1 )).slice(-2) + '/' + \r\n                ('0' + data.getFullYear()).slice(-2);\r\n    return time;       \r\n}\r\n\r\n\r\nfunction addTegToHtml() {\r\n    let queue = document.getElementById('queue');\r\n    let firstSpan = queue.getElementsByTagName('span')[0];\r\n    for (let value of Object.values(newQueue._storage)) {\r\n        let newTagSpan = document.createElement('span');\r\n        newTagSpan.className = 'queue__class';\r\n        newTagSpan.innerText = value;\r\n        queue.insertBefore(newTagSpan, firstSpan);\r\n    }\r\n}\r\n\r\nfunction removeTegFromHtml() {\r\n    const span = document.querySelectorAll('span');\r\n    for (let checkbox of span) {\r\n         checkbox.remove();\r\n    }\r\n}\r\n\r\nfunction clearInput() {\r\n    document.querySelector(\"input\").value = '';\r\n}\r\n\r\n\r\nlet newQueue = new Queue();\r\n\r\nfunction addItemQueue(){\r\n    removeTegFromHtml();\r\n\r\n    let text = document.getElementById('addQueue').value;\r\n    if(text !== null && text !== ''){\r\n        newQueue.enqueue(text);\r\n    } else {\r\n        alert('Вы ничего не ввели!');\r\n        console.log('Попытка добавить пустую строку!');\r\n    }\r\n    addTegToHtml();\r\n\r\n    clearInput();\r\n}\r\n\r\nfunction removeItemQueue(){\r\n    removeTegFromHtml();\r\n    newQueue.dequeue();\r\n    addTegToHtml();\r\n}\r\n\r\nfunction showSizeQueue(){\r\n    let currentSize = newQueue.size();\r\n    alert( 'Длина очереди: ' + currentSize);\r\n}\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/index.js"]();
/******/ 	
/******/ })()
;