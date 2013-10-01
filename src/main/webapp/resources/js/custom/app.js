var muzimaPreferredForm = angular.module('muzimaPreferredForm', ['ui.bootstrap', 'filters']);

muzimaPreferredForm.
    config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);
        $routeProvider.when('/attribute/:uuid', {controller: AttributeCtrl,
            templateUrl: '../../moduleResources/muzimapreferredform/partials/attribute.html'});
        $routeProvider.when('/attributes', {controller: AttributesCtrl,
            templateUrl: '../../moduleResources/muzimapreferredform/partials/attributes.html'});
        $routeProvider.when('/attributeType/:uuid', {controller: AttributeTypeCtrl,
            templateUrl: '../../moduleResources/muzimapreferredform/partials/attributeType.html'});
        $routeProvider.when('/attributeType/', {controller: AttributeTypeCtrl,
            templateUrl: '../../moduleResources/muzimapreferredform/partials/attributeType.html'});
        $routeProvider.when('/attributeTypes', {controller: AttributeTypesCtrl,
            templateUrl: '../../moduleResources/muzimapreferredform/partials/attributeTypes.html'});
        $routeProvider.when('/preferredForm/:uuid', {controller: PreferredFormCtrl,
            templateUrl: '../../moduleResources/muzimapreferredform/partials/preferredForm.html'});
        $routeProvider.when('/preferredForms', {controller: PreferredFormsCtrl,
            templateUrl: '../../moduleResources/muzimapreferredform/partials/preferredForms.html'});
        $routeProvider.otherwise({redirectTo: '/preferredForms'});
    }]);

muzimaPreferredForm.factory('$preferredFormService', function ($http) {
    var getPreferredForms = function (search, pageNumber, pageSize) {
        if (search === undefined) {
            // replace undefined search term with empty string
            search = '';
        }
        return $http.get("preferredForms.json?search=" + search + "&pageNumber=" + pageNumber + "&pageSize=" + pageSize);
    };

    var deletePreferredForms = function(uuidList) {
        return $http.post("preferredForms.json", {"uuidList": uuidList});
    };

    var getPreferredForm = function (uuid) {
        return $http.get("preferredForm.json?uuid=" + uuid);
    };

    var deletePreferredForm = function (uuid) {
        return $http.post("preferredForm.json", {"uuid": uuid});
    };

    var savePreferredForm = function(uuid, properties) {
        return $http.post("preferredForm.json", {"uuid": uuid, "properties": properties});
    };

    var getAttributeTypes = function (search, pageNumber, pageSize) {
        if (search === undefined) {
            // replace undefined search term with empty string
            search = '';
        }
        return $http.get("attributeTypes.json?search=" + search + "&pageNumber=" + pageNumber + "&pageSize=" + pageSize);
    };

    var getAttributeType = function (uuid) {
        return $http.get("attributeType.json?uuid=" + uuid);
    };

    var saveAttributeType = function (uuid, name, description) {
        return $http.post("attributeType.json", {"uuid": uuid, "name": name, "description": description});
    };

    var deleteAttributeType = function (uuid) {
        return $http.post("attributeType.json", {"uuid": uuid});
    };

    var getAttributes = function (search, pageNumber, pageSize) {
        if (search === undefined) {
            // replace undefined search term with empty string
            search = '';
        }
        return $http.get("attributes.json?search=" + search + "&pageNumber=" + pageNumber + "&pageSize=" + pageSize);
    };

    var getAttribute = function (uuid) {
        return $http.get("attribute.json?uuid=" + uuid);
    };

    return {
        getPreferredForms: getPreferredForms,
        deletePreferredForms: deletePreferredForms,
        getPreferredForm: getPreferredForm,
        deletePreferredForm:deletePreferredForm,
        savePreferredForm: savePreferredForm,

        getAttributeTypes: getAttributeTypes,
        getAttributeType: getAttributeType,
        saveAttributeType: saveAttributeType,
        deleteAttributeType: deleteAttributeType,

        getAttributes: getAttributes,
        getAttribute: getAttribute
    }
});