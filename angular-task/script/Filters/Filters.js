/**
 * Created by Administrator on 2017/5/30.
 */
angular.module('myApp')
    .filter('type',function () {
        var a=['首页banner','找职位banner','找精英banner','行业大图'];
        return function (b) {
            return a[b]
        }
    })
    .filter('status',function () {
        var c=['','草稿 ','上线'];
        return function (d) {
            return c[d]
        }
    })
