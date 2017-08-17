require('networked-aframe');
var NetworkConnection = NAF.connection.constructor;
var NetworkedEntitiesSaver = require('./networkentitiessaver');

var entities = new NetworkedEntitiesSaver();
var connection = new NetworkConnection(entities);

NAF.entities = NAF.e = entities;
NAF.connection = NAF.c = connection;
