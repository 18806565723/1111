/**
 * Created by Administrator on 2017/5/13.
 */

var allplay = sessionStorage.all;
var all = JSON.parse(allplay);
console.log(all);
var playnum = 0;//玩家序列数;
var buttnum = 1;//按钮次数

$('.butt').click (
    function () {

        buttnum++; //每次按钮+1
        if (buttnum>(all.length * 2) ) {
            window.location.href = "js2-4.html";    //最后次按钮能跳转页面
        }
        if (buttnum % 2 == 0) {   //几个图片和文本的显示隐藏反转
            $('.img1').toggle();
            $('.img2').toggle();
            $('.p1').toggle().text("你的角色：" + all[playnum]);
            $('.p3').toggle();
            $('.butt').text("隐藏并传递给" + [playnum + 2] + "号");
            if (buttnum> (all.length * 2)-1 ){$('.butt').text("查看法官台本");}


        }
        if(buttnum % 2 != 0){
            $('.img1').toggle();
            $('.span').text([playnum + 2]);
            $('.img2').toggle();
            $('.p1').toggle().text("你的角色：" + all[playnum]);
            $('.p3').toggle();
            $('.butt').text("查看" + [playnum + 2] + "号身份");
            if (buttnum> (all.length * 2)-1 ){$('.butt').text("查看法官台本");}
            playnum++;

        }


    }
);

