'use strict';

/**
 * Sails service factory
 *
 * @param   {string}    modelName   Rest api model name
 * @returns {{}}
 */
function serviceFactory(modelName) {
    var service = {};

    service.items = [];
    service.name = modelName;

    // Socket events. Override for services
    service.initialized = function(items) {};
    service.created = function(item) {};
    service.updated = function(item) {};
    service.deleted = function(item) {};
    // Changed is called on every
    service.changed = function() {};

    function removeItem(id) {
        service.items = _.filter(service.items, function(item) {
            return item.id !== id;
        });
    }

    /**
     * Searches and replaces item. Used for updates
     *
     * @param   {{}} newItem
     */
    function replaceItem(newItem) {
        var position = service.items.indexOf(_.findWhere(service.items, {id: newItem.id}));
        service.items[position] = newItem;
    }

    // Determine socket message function
    function updateModel(message) {
        var data = message.data;

        switch (message.verb) {
            case 'create':
                service.items.push(data);
                service.created(data);
                break;
            case 'destroy':
                removeItem(message.id);
                service.deleted(data);
                break;
            case 'update':
                replaceItem(data);
                service.updated(data);
                break;
            default:
                throw "Invalid socket function"
        }
        service.changed();
    }

    // Get data for model
    socket.get("/" + modelName, {}, function (data) {
        console.log("Registered to socket: " + modelName);
        service.items = data;
        service.initialized(data);
        service.changed();
    });

    // Listen to socket for model calls
    socket.on('message', function messageReceived(message) {
        if(message.model === service.name) {
            console.log("Received data for model: ", service.name)
            updateModel(message)
        }
    });

    return service;
}

/**
 * Services
 */
Application.Services.service('CategoryService', function() {
    return serviceFactory("category");
});

Application.Services.service('UserService', function() {
    return serviceFactory("user");
});
