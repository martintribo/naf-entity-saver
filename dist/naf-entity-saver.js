(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("networked-aframe"));
	else if(typeof define === 'function' && define.amd)
		define(["networked-aframe"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("networked-aframe")) : factory(root["NAF"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var NetworkConnection = NAF.connection.constructor;
	var NetworkedEntitiesSaver = __webpack_require__(2);

	var entities = new NetworkedEntitiesSaver();
	var connection = new NetworkConnection(entities);

	NAF.entities = NAF.e = entities;
	NAF.connection = NAF.c = connection;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var NetworkEntities = NAF.entities.constructor;

	class NetworkEntitiesSaver extends NetworkEntities {
	  removeEntitiesFromUser(user) {
	    var scene = document.querySelector('a-scene');
	    var entityList = [];
	    for (var id in this.entities) {
	      var entityOwner = NAF.utils.getNetworkOwner(this.entities[id]);
	      if (entityOwner == user) {
	        var entity = this.getEntity(id);
	        entityList.push({
	          'entity': entity,
	          'template': entity.components['networked-remote'].data.template
	        });
	        entity.removeAttribute('networked-remote');
	      }
	    }

	    entityList.forEach(e => {
	      e['entity'].setAttribute('networked', {
	        'template': e['template']
	      });
	      if (e['entity'].parentNode == null) {
	        scene.appendChild(e['entity']);
	      }
	    });
	  }
	}

	module.exports = NetworkEntitiesSaver;


/***/ }
/******/ ])
});
;