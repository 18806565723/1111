/**
 * Created by Administrator on 2017/5/17.
 */

var allplay = sessionStorage.all;
var all  = JSON.parse(allplay);
console.log(all);
var main = "";  //这是把main定义成字符串，才能输入到html
for (var i = 0;i<all.length;i++){
    main += '<div class="div">' + '<div class="div1">' + '<span id="p1">' + all[i] +
        '</span>' + '</div>' + '<div class="div2">' + '<span id="pa">' + [i+1] + "号"
        +'</span>'+ '</div>' +'</div>';
        $('.main1').eq(0).html(main);//把每个div写进去

}
console.log(main);



$('#butt').click(function () {
    window.location.href = "js2-5.html";  //按钮跳转页面
0});
