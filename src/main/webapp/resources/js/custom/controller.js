function AttributeCtrl($scope, $routeParams, $location, $preferredFormService) {
    // page parameter
    $scope.uuid = $routeParams.uuid;
    // get the current notification
    $preferredFormService.getAttribute($scope.uuid).
        then(function (response) {
            $scope.attribute = response.data;
        });

    $scope.cancel = function () {
        $location.path('/attributes');
    };
}

function AttributesCtrl($scope, $preferredFormService) {
    // initialize selected error data for re-queueing
    $scope.selected = {};
    // initialize the paging structure
    $scope.maxSize = 5;
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    $preferredFormService.getAttributes($scope.search, $scope.currentPage, $scope.pageSize).
        then(function (response) {
            var serverData = response.data;
            $scope.attributes = serverData.objects;
            $scope.noOfPages = serverData.pages;
        });

    $scope.$watch('currentPage', function (newValue, oldValue) {
        if (newValue != oldValue) {
            $preferredFormService.getAttributes($scope.search, $scope.currentPage, $scope.pageSize).
                then(function (response) {
                    var serverData = response.data;
                    $scope.attributes = serverData.objects;
                    $scope.noOfPages = serverData.pages;
                });
        }
    }, true);

    $scope.$watch('search', function (newValue, oldValue) {
        if (newValue != oldValue) {
            $scope.currentPage = 1;
            $preferredFormService.getAttributes($scope.search, $scope.currentPage, $scope.pageSize).
                then(function (response) {
                    var serverData = response.data;
                    $scope.attributes = serverData.objects;
                    $scope.noOfPages = serverData.pages;
                });
        }
    }, true);
}

function PreferredFormCtrl($scope, $routeParams, $location, $preferredFormService) {
    // page parameter
    $scope.uuid = $routeParams.uuid;
    // get the current notification
    $preferredFormService.getPreferredForm($scope.uuid).
        then(function (response) {
            $scope.preferredForm = response.data;
        });

    $scope.delete = function () {
        var uuid = $scope.uuid;
        $preferredFormService.deletePreferredForm(uuid).
            then(function () {
                $location.path("/preferredForms");
            })
    };



    $scope.cancel = function () {
        $location.path('/preferredForms');
    };
}

function PreferredFormsCtrl($scope, $location, $preferredFormService) {
    // initialize selected error data for re-queueing
    $scope.selected = {};
    // initialize the paging structure
    $scope.maxSize = 5;
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    $preferredFormService.getPreferredForms($scope.search, $scope.currentPage, $scope.pageSize).
        then(function (response) {
            var serverData = response.data;
            $scope.preferredForms = serverData.objects;
            $scope.noOfPages = serverData.pages;
        });

    $scope.delete = function () {
        var uuidList = [];
        angular.forEach($scope.selected, function (value, key) {
            if (value) {
                uuidList.push(key);
            }
        });
        $preferredFormService.deletePreferredForms(uuidList).
            then(function () {
                $location.path("/preferredForms");
            })

    };

    $scope.$watch('currentPage', function (newValue, oldValue) {
        if (newValue != oldValue) {
            $preferredFormService.getPreferredForms($scope.search, $scope.currentPage, $scope.pageSize).
                then(function (response) {
                    var serverData = response.data;
                    $scope.preferredForms = serverData.objects;
                    $scope.noOfPages = serverData.pages;
                });
        }
    }, true);

    $scope.$watch('search', function (newValue, oldValue) {
        if (newValue != oldValue) {
            $scope.currentPage = 1;
            $preferredFormService.getPreferredForms($scope.search, $scope.currentPage, $scope.pageSize).
                then(function (response) {
                    var serverData = response.data;
                    $scope.preferredForms = serverData.objects;
                    $scope.noOfPages = serverData.pages;
                });
        }
    }, true);
}

function AttributeTypeCtrl($scope, $routeParams, $location, $preferredFormService) {
    // initialize the source object
    $scope.source = {};
    // initialize the view to be read only
    $scope.mode = "view";
    $scope.uuid = $routeParams.uuid;
    if ($scope.uuid === undefined) {
        $scope.mode = "edit";
    } else {
        $preferredFormService.getAttributeType($scope.uuid).
            then(function (response) {
                $scope.attributeType = response.data;
            });
    }

    $scope.edit = function () {
        $scope.mode = "edit";
    };

    $scope.save = function(attribute) {
        $preferredFormService.saveAttributeType(attribute.uuid, attribute.name, attribute.description).
            then(function() {
                $location.path("/attributeTypes");
            })
    };

    $scope.delete = function(attribute) {
        $preferredFormService.deleteAttributeType(attribute.uuid).
            then(function() {
                $location.path("/attributeTypes");
            })
    };

    $scope.cancel = function () {
        if ($scope.mode == "edit") {
            if ($scope.uuid === undefined) {
                $location.path("/attributeTypes");
            } else {
                $scope.mode = "view"
            }
        } else {
            $location.path("/attributeTypes");
        }
    };
}

function AttributeTypesCtrl($scope, $preferredFormService) {
    // initialize the paging structure
    $scope.maxSize = 5;
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    $preferredFormService.getAttributeTypes($scope.search, $scope.currentPage, $scope.pageSize).
        then(function (response) {
            var serverData = response.data;
            $scope.attributeTypes = serverData.objects;
            $scope.noOfPages = serverData.pages;
        });

    $scope.$watch('currentPage', function (newValue, oldValue) {
        if (newValue != oldValue) {
            $preferredFormService.getAttributeTypes($scope.search, $scope.currentPage, $scope.pageSize).
                then(function (response) {
                    var serverData = response.data;
                    $scope.attributeTypes = serverData.objects;
                    $scope.noOfPages = serverData.pages;
                });
        }
    }, true);

    $scope.$watch('search', function (newValue, oldValue) {
        if (newValue != oldValue) {
            $scope.currentPage = 1;
            $preferredFormService.getAttributeTypes($scope.search, $scope.currentPage, $scope.pageSize).
                then(function (response) {
                    var serverData = response.data;
                    $scope.attributeTypes = serverData.objects;
                    $scope.noOfPages = serverData.pages;
                });
        }
    }, true);
}