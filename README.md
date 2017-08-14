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
