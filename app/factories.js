/**
 * Created by andrej on 29.06.15.
 */
angular.module('myApp')
    .factory('Contact', function ($resource) {
        return $resource('/api/contact/:id', { id: '@id' }, {
            'update': { method: 'PUT' }
        });
    });