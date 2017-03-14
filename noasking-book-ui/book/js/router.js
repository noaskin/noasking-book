// /**
//  * Created by MaJing on 2017/3/13.
//  */
// /* 设置所有页面的路由 */
// var MetronicApp = angular.module("MetronicApp")
//     .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//     // Redirect any unmatched url
//     $urlRouterProvider.otherwise("/homepage.html");
//
//     $stateProvider
//
//         // Blank Page
//         .state('directory', {
//             url: "/directory",
//             templateUrl: "views/blank.html",
//             data: {pageTitle: 'Blank Page Template'},
//             controller: "BlankController",
//             resolve: {
//                 deps: ['$ocLazyLoad', function($ocLazyLoad) {
//                     return $ocLazyLoad.load({
//                         name: 'MetronicApp',
//                         insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
//                         files: [
//                             'js/controllers/BlankController.js'
//                         ]
//                     });
//                 }]
//             }
//         })
//
//         // Homepage
//         .state("homepage", {
//             url: "/homepage",
//             templateUrl: "views/profile/main.html",
//             data: {pageTitle: 'User Profile'},
//             controller: "UserProfileController",
//             resolve: {
//                 deps: ['$ocLazyLoad', function($ocLazyLoad) {
//                     return $ocLazyLoad.load({
//                         name: 'MetronicApp',
//                         insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
//                         files: [
//                             '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
//                             '../assets/pages/css/profile.css',
//
//                             '../assets/global/plugins/jquery.sparkline.min.js',
//                             '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
//
//                             '../assets/pages/scripts/profile.min.js',
//
//                             'js/controllers/UserProfileController.js'
//                         ]
//                     });
//                 }]
//             }
//         })
//
//         // User Profile Dashboard
//         .state("homepage.dashboard", {
//             url: "/dashboard",
//             templateUrl: "views/profile/dashboard.html",
//             data: {pageTitle: 'User Profile'}
//         })
//
//         // User Profile Account
//         .state("homepage.account", {
//             url: "/account",
//             templateUrl: "views/profile/account.html",
//             data: {pageTitle: 'User Account'}
//         })
//
//         // User Profile Help
//         .state("homepage.help", {
//             url: "/help",
//             templateUrl: "views/profile/help.html",
//             data: {pageTitle: 'User Help'}
//         })
//
// }]);
//
//
//
// /* Setup Layout Part - Header */
// MetronicApp.controller('HeaderController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {
//         Layout.initHeader(); // init header
//     });
// }]);
//
// /* Setup Layout Part - Sidebar */
// MetronicApp.controller('SidebarController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {
//         Layout.initSidebar($state); // init sidebar
//     });
// }]);
//
// /* Setup Layout Part - Quick Sidebar */
// MetronicApp.controller('QuickSidebarController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {
//         setTimeout(function(){
//             QuickSidebar.init(); // init quick sidebar
//         }, 2000)
//     });
// }]);
//
// /* Setup Layout Part - Sidebar */
// MetronicApp.controller('PageHeadController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {
//         Demo.init(); // init theme panel
//     });
// }]);
//
// /* Setup Layout Part - Theme Panel */
// MetronicApp.controller('ThemePanelController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {
//         Demo.init(); // init theme panel
//     });
// }]);
//
// /* Setup Layout Part - Footer */
// MetronicApp.controller('FooterController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {
//         Layout.initFooter(); // init footer
//     });
// }]);
//
//
// /* Init global settings and run the app */
// MetronicApp.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
//     $rootScope.$state = $state; // state to be accessed from view
//     $rootScope.$settings = settings; // state to be accessed from view
// }]);
//
//
//

MetronicApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/homepage");

    $stateProvider

    // Blank Page
        .state('directory', {
            url: "/directory",
            templateUrl: "views/blank.html",
            data: {pageTitle: 'Blank Page Template'},
            controller: "BlankController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'js/controllers/BlankController.js'
                        ]
                    });
                }]
            }
        })

}]);