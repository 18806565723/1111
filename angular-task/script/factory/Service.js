/**
 * Created by Administrator on 2017/6/21.
 */
angular.module('admin')
//上传文件
    .factory('uploadService', function (pathProject) {
        return {
            uploadFile: function (FileUploader, alias) {
                var param = {url: pathProject.upload_url()};
                if (alias) {
                    angular.extend(param, {alias: alias});
                }
                return new FileUploader(param);
            }
        }
    })

    .factory('ArticleManagementService', function ($http, pathProject) {
        return {
            //获取
            getArticleList: function (params) {
                return $http.get(pathProject.getArticlelist_url, {params: params});
            },
            //新增
            addArticle: function (params) {
                return $http.post(pathProject.addArticle_url, params);
            },
            //删除
            delArticle: function (id) {
                return $http.delete(pathProject.delArticle_url(id));
            },
            //获取单个
            getArticle: function (id) {
                return $http.get(pathProject.getArticle_url(id));
            },
            //编辑
            editArticle: function (id, params) {
                return $http.put(pathProject.editArticle_url(id), params);
            },
            //修改article的上架/下架
            changeArticleStatus: function (id, status) {
                return $http.put(pathProject.changeArticleStatus_url(id, status));
            }


        }
    });


angular.module('admin')
//选择类别
    .controller('articleListCtrl', function ($scope, FileUploader, $state, ArticleManagementService, $rootScope) {
        var vm = this;
        vm.searchParams = $state.params;
        // 时间格式转换
        vm.searchParams.startAt = parseInt(vm.searchParams.startAt) || undefined;
        vm.searchParams.endAt = parseInt(vm.searchParams.endAt) || undefined;

        //获取列表
        ArticleManagementService.getArticleList(vm.searchParams).then(function (res) {
            if (res.data.code === 0) {
                vm.articleList = res.data.data.articleList;
                vm.total = res.data.data.total;
                console.log(res);
            } else {
                $rootScope.alert(res.data.message);
            }
        });

        // 删除
        vm.delArticle = function (id, index) {
            $rootScope.confirm("是否确认删除", function () {
                // 发送删除请求
                ArticleManagementService.delArticle(id).then(function (res) {
                    if (res.data.code === 0) {
                        vm.articleList.splice(index, 1);
                        $state.go($state.current, {}, {reload: true});
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                });
            })
        };

        // 改变状态
        vm.changeArticleStatus = function (id, status) {
            // 上线
            if (status === 1) {
                $rootScope.operationConfirm("上线后该图片将在轮播banner中展示。", "是否执行上线操作？", function () {
                    // 发送上线请求

                    ArticleManagementService.delArticle(id, 2).then(function (res) {
                                if (res.data.code === 0) {
                                    $state.go($state.current, {}, {reload: true});
                                    $rootScope.alert("上线成功", function () {
                                    });
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                });
            }
            // 下线
            else if (status === 2) {
                $rootScope.operationConfirm("下线后该图片将不展示站轮播banner中。", "是否执行下线操作？", function () {
                    // 发送下线请求
                    ArticleManagementService.changeArticleStatus(id, 1).then(function (res) {
                        if (res.data.code === 0) {
                            $state.go($state.current, {}, {reload: true});
                            $rootScope.alert("下线成功", function () {
                            });
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                });
            }
        };
    });

app.controller('detail',function ($scope,$http,$state,$stateParams,type,status) {
    //导入数据
    $scope.type =type;
    $scope.hangye = status;
    $scope.detailParams = {};
    $scope.id=$stateParams.id;
    $http({
        method:'get',
        url:'/a/article/'+$scope.id
    }).then(function  success(responce) {
            console.log(responce);
            if(responce.data.code == 0){
                $scope.detailParams =  responce.data.data.article;
            }else{
                alert("请求失败"+responce.data.message)
            }
        }, function error(responce) {
            // 请求失败执行代码
            alert("请求失败"+responce.data.message)
        }
    )
    //发送请求
    $scope.addInfo = function () {
        $http({
            method: 'put',
            url: '/a/u/article/'+$scope.id,
            params:$scope.detailParams
        }).then(
            //请求成功返回参数
            function success(responce) {
                if (responce.data.code == 0){
                    alert("上传成功");
                    $state.go('article-list')
                }
            },
            function error(responce) {
                alert("失败"+responce.data.message)
            }
        );
    };
})






