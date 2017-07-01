/**
 * Created by Master on 2017/3/22.
 */
'use strict';
angular.module('myApp')

    /*传图片*/
    .directive('upLoader',function (FileUploader) {
    return {
        restrict: 'E',
        templateUrl: 'img/upload.html',
        scope: {
            logoUrl: '=ngModel',//图片上传后地址
            labelName: '@',
        tip:'@'//提示语
        },
        replace: 'true',

        link: function (scope, ele, attrs) {

            // scope.class = attrs.class;
            // scope.leftClass = attrs.leftClass||'col-xs-2';
            // scope.labelClass = attrs.labelClass;
            scope.uploader = new FileUploader({//实例化
                // url: 'a/u/img/module',
                url: '/carrots-admin-ajax/a/u/img/task',
                queueLimit: 1
            });
            scope.clearItem = function () {//清空队列
                scope.uploader.clearQueue()
            };
            scope.remove = function () {
                scope.logoUrl = '';
            };
            scope.getUrl = function (files) {
                scope.fileList = files;
                scope.imgURL = window.URL.createObjectURL(scope.fileList[0]);//考虑性能用后清除
            };
            scope.uploader.onSuccessItem = function (item, response) {//上传成功返回地址
                scope.logoUrl = response.data.url
            }
        }
    };

});
    // .directive('paging', function () {
    //     return {
    //         restrict: 'E',
    //         templateUrl: 'views/template/paging.html',
    //         scope: {
    //             totalItems: '=',
    //             currentPage: '=',
    //             pageChange: '&'
    //         },
    //         replace: 'true',
    //         link: function (scope, ele, attrs) {
    //             //页数按钮数量 每页显示条目
    //             scope.maxSize = attrs.maxSize;
    //             scope.itemsPerPage = attrs.itemsPerPage;
    //             //当前页数变化执行
    //             // scope.$watch('currentPage', function (n) {
    //             //     n ? scope.pageChange() : ''
    //             // });
    //             //跳页
    //             scope.setPage = function () {
    //                 scope.pageNo <= 0 ? scope.currentPage = scope.pageNo = 1 : '';
    //                 scope.pageNo > scope.numPages ? scope.currentPage = scope.pageNo = scope.numPages : scope.currentPage = scope.pageNo;
    //             }
    //         }
    //     }
    // })
