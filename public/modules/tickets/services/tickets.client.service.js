'use strict';

//Tickets service used to communicate Tickets REST endpoints
angular.module('tickets').factory('Tickets', ['$resource',
	function($resource) {
		return $resource('tickets/:ticketId', { ticketId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

//Tickets service used to create new Tickets from the REST endpoint
angular.module('tickets').factory('TicketsByCategory', ['$resource',
	function($resource) {
		return $resource('ticketcategories/:ticketCategoryId/tickets/:ticketId', { ticketId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

//Tickets service used to get list of Tickets by a user from the REST endpoint
angular.module('tickets').factory('Users', ['$resource',
	function($resource) {
		return $resource('users/:ticketCategoryId/tickets', { userId: '@_id'
		}, {
			update: {
				method: 'GET'
			}
		});
	}
]);