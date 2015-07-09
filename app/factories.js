/**
 * Created by andrej on 29.06.15.
 */
angular.module('myApp')
    .factory('Office', function ($resource) {
        return $resource('http://localhost:9000/api/offices/:id', { id: '@id' }, {
            'update': { method: 'PUT' }
        });
    });