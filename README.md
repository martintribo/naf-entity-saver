# NAF Entity Saver
NAF Entity Saver is a patch of the Networked Aframe (NAF) entity manager class that will take ownership and rebroadcast entities of another user when they leave the room. The entity manager class is what manages entities with the `networked` component.

This plugin is intended to be used for sandbox apps, where users create entities that you might want to save for future visitors. Some apps such as A-Painter don't use the `networked` component, and will require a different plugin to persist entities.

## Usage
NAF Entity Saver just needs to be included in your source code, and it will automatically patch NAF.
### NPM
Run in your project root
```
npm install naf-entity-saver
```
Include in your source code
```JavaScript
require('naf-entity-saver');
```
> The networked-aframe package will automatically be required as a dependency

### Script Tag
Include the following after NAF
```HTML
<script src="https://unpkg.com/naf-entity-saver"></script>
```

## Bugs
NAF Entity Saver seems to reload its own networked entities when a user leaves the room. This will cause strange behavior if the client using the entity saver has a networked entity with spawning logic or other unique behavior. For now, I recommend making a client that loads your assets, but does not contain any of its own entities.

## Try it out
You can try out NAF Entity Saver on glitch at [naf-entity-saver.glitch.me](https://naf-entity-saver.glitch.me/). I will try to have a process running the saver client, but if avatars are not saving when players leave, you will need to load it yourself. You can load the saver client [here](https://naf-entity-saver.glitch.me/saver.html).

Feel free to remix [naf-entity-saver](https://glitch.com/~naf-entity-saver).
