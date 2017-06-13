/**
 * Created by Administrator on 2017/5/19.
 */

var allplay = sessionStorage.all;
var all = JSON.parse(allplay);
console.log(all);
var play = ""; //转换成字符串
var man = [];//每个人状态转换为数组
var manall = "";//转成字符串好存进网页存储


for (var i = 0;i<all.length;i++ ){
    play += '<div class="content-0">' + '<div class="content-1 ">' + '<div class="content-1-1">'
      + '<p id="p1">' + all[i] + '</p>' + '</div>' + '<div class="content-1-2">' +
        '<p id="p2" >' + [i+1] + "号" + '</p>' + '</div>' + '</div>' + '</div>'; //定义每个div的添加方式
    $('.content').eq(0).html(play);//把div写入html
    console.log(play);
    man[i] = {};//定义为对象
    man[i].status = "alive";//设置每个对象的状态，比如死活状态，存货天数，身份
    man[i].day = 1;
    man[i].num = i + 1;
    man[i].identity = all[i];
    }


var allobj = document.getElementsByClassName("content-1");
for (var a=0;a<allplay.length;a++){
    if (all[a] == '杀手'){
        allobj[a].style.background = "#c6c6c6";
        allobj[a].style.cursor = "not-allowed";
        }
    }


var deader; //被杀的人号码
for (b=0; b<allobj.length; b++){
    allobj[b].index = b;
    allobj[b].onclick = function () {
        if (all[this.index] == '杀手') {
            //防止点击杀手会发生别的错误
        }
        else {if (deader != undefined){
            allobj[deader].style.background = "#ffffff";
            man[deader].status = "alive";
        }
        allobj[this.index].style.background = "#10df00";
        deader = this.index;
        man[this.index].status = "dead";
        console.log(man);
        manall = JSON.stringify(man);
        sessionStorage.man = manall;
        console.log(manall);
        }
    }
}



$('#butt').click(function () {
    if(deader == undefined){
        alert("没杀人！")
    }else {
        for (var c = 0; c < man.length; c++)
            if (man[c].status == 'alive') {
                man[c].day++;
                console.log(man[c].day);
                manall = JSON.stringify(man);
                sessionStorage.man = manall;
                console.log(manall);
            }
        window.location.href = "js2-6.html";
    }
});
