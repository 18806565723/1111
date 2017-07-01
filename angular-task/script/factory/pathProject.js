/**
 * Created by Administrator on 2017/6/21.
 */

angular.module("admin")
    .factory('pathProject', function () {
        return {
            //上传图片接口
            upload_url: function () {
                return "/a/u/img/3"
            },

            // Article管理
            // Article列表接口
            getArticlelist_url: "/a/article/search",
            // 获取article
            getArticle_url: function (id) {
                return "/a/article/" + id;
            },
            // 新增article
            addArticle_url: "/a/u/article",
            // 删除article
            delArticle_url: function (id) {
                return "/a/u/article/" + id;
            },
            // 编辑article
            editArticle_url: function (id) {
                return "/a/u/article/" + id;
            },
            //修改article的上架/下架
            changeArticleStatus_url: function (id, status) {
                return "/a/u/article/status?id=" + id + "&status=" + status;
            },


            // getArticleList_url: "/a/article/search",
            // delArticle_url: function (id) {
            //     return "JSON/asdasdasdasd" + id
            // },
            // //排序article
            // postArticleSort_url: "JSON/BaASDASD",
            // //编辑article
            // putArticle_url: "/a/u/article",
            // //新增article
            // postArticle_url: "/a/u/article",
            // //article详细接口
            // getArticleDetail_url: function (id) {
            //     return "/a/article/" + id
            }
        })