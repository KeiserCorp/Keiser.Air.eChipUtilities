# Keiser eChip Utilities
⛔️ [DEPRECATED] This repository is no longer maintained.

## Project
Utilities to assist development of applications utilizing the Keiser eChip and Keiser eChip Portal Tool.

## Getting Started
You have following options to get started:
- Download the [latest release](https://github.com/KeiserCorp/Keiser.Air.eChipUtilities/releases/latest)
- Clone the repo: `git clone git://github.com/KeiserCorp/Keiser.Air.eChipUtilities.git`
- Install with [NPM](https://www.npmjs.com/): `npm install keiser-echip-utilities`

## Loading
Each release includes a minified distribution version of the library which can be loaded with a module loader, or as a stand alone library.  The unminified source files are also able to be loaded with tools like [browserify](http://browserify.org/).

Module load the library with [CommonJS](http://www.commonjs.org/):

```
var keu = require('keiser-echip-utilities');
```

Including the library as a stand-alone library:

```
<script src="keu.min.js"></script>
```

```
var keu = window.keu;
```

## API
The library is namespaced to allow modular loading of individual library sections as needed.
- [Portal Messenger](#portal-messenger)
- [Machine](#machine)

### Portal Messenger
The `portalMessenger` library allows communication with the Keiser eChip Portal Tool.

#### `portalMessenger.enable(onSendRequest, onReceiveRequest)`
Begins communication with the Keiser eChip Portal Tool.

`onSendRequest` argument is a function called whenever a request to get data is made by the portal.  The function should return the object to be sent in response to the portal request.

`onReceiveRequest` agrument is a function called whenever a request to send data is made by the portal.  The function should receive a `data` object and an `onSuccess` function.  The `data` object is the data received from the portal.  The `onSuccess` function should be ran upon successful processing of the `data` object.

Passing a `null` as either argument will disable the corresponding portal capability.

```
var onSendRequest = function(data, onSuccess){
    getUserData(user.id, function(result){
        onSuccess(result);
    });
};
var onReceiveRequest = function(data, onSuccess){
    saveUserData(data);
    onSuccess();
};
keu.portalMessenger.enable(onSendRequest, onReceiveRequest);
```

#### `portalMessenger.disable()`
Stops communication with the Keiser eChip Portal Tool.  Communication can be resumed by using the `enable` method.

### Machine
#### `machine.getMachineDetails(modelNum)`
Retrieves machine details based on model number argument (`modelNum`).

```
var details = machine.getMachineDetails(0x1335);
```

```
{
    models: [0x1335, 0x133B],
    name: 'Biaxial Chest Press',
    line: 'A300',
    extra: '',
}
```

## Copyright and License
Copyright 2016 [Keiser Corporation](http://keiser.com/).

Licensed under the [MIT license](LICENSE.md).
