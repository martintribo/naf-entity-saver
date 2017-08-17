require('networked-aframe');
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
        if (entity.parentNode === scene) {
          entity.remove();
        }
      }
    }

    entityList.forEach(e => {
      e['entity'].setAttribute('networked', {
        'template': e['template']
      });
    });

    entityList.forEach(e => {
      if (e['entity'].parentNode == null) {
        scene.appendChild(e['entity']);
      }
    });
  }
}

module.exports = NetworkEntitiesSaver;
