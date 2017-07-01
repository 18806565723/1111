/**
 * Created by Administrator on 2017/6/2.
 */
angular.module('myApp')
    .controller('editorCtrl',function ($scope) {
        $scope.editorContent = '';
        var E = window.wangEditor;
        // var editor = new E('#ditor-trigger');
        var editor = new E( document.getElementById('#ditor-trigger') );
        editor.create();
        document.getElementById('ditor-trigger').addEventListener('click', function () {
            // 读取 html
           editor.txt.html()
        }, false)
        // var E = window.wangEditor;
        // var editor = new E( document.getElementById('#ditor-trigger') );
        // editor.create();
        // editor.txt.html();
    })
    .directive('contenteditable', function() {
        return {
            restrict: 'A' ,
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                // 创建编辑器
                // var E = window.wangEditor;
                // var editor = new E( document.getElementById('#editor-trigger') );

                // var div = document.getElementById('editor-trigger');
                // // // 生成编辑器
                // var editor = new wangEditor(div);
                // editor.txt.html();
                // editor.create();
                // editor.txt.html('<p>用 JS 设置的内容</p>');
                editor.onchange = function () {
                    // 从 onchange 函数中更新数据
                    scope.$apply(function () {
                        var html = editor.$txt.html();
                        ctrl.$setViewValue(html);
                    });
                };

                // var editor = new E('#ditor-trigger')

                console.log(1);
                editor.create();
            }
        };
    });
