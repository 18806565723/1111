/**
 * Created by Administrator on 2017/5/26.
 */


var manall = sessionStorage.man;
var man = JSON.parse(manall);
console.log(man);
var play = '';//存放玩家身份牌信息
for (var a = 0; a< man.length; a++) {
    play += '<div class="content-0">' + '<div class="content-1 ">' + '<div class="content-1-1">'
        + '<p id="p1">' + man[a].identity + '</p>' + '</div>' + '<div class="content-1-2">' +
        '<p id="p2" >' + man[a].num + "号" + '</p>' + '</div>' + '</div>' + '</div>';//定义每个div的添加方式
    $('.content').eq(0).html(play);//把div写入html
}


var allobj = document.getElementsByClassName("content-1");
var mangg = 0;//存放死亡玩家人数
var deader;//死亡玩家号码
for (var b = 0; b<man.length; b++) {
    if (man[b].status == 'dead' || man[b].status == 'over') {
        allobj[b].style.background = "#cccccc";
        allobj[b].style.cursor = "not-allowed";
        mangg++;
        console.log(mangg);
    }
}



for (var c = 0; c<allobj.length; c++) {
    allobj[c].index = c;
    allobj[c].onclick = function () {
        if (man[this.index].status == 'dead' || man[this.index].status == 'over') {
        } else {
            if (deader != undefined){
                allobj[deader].style.background = "#ffffff";
                man[deader].status = "alive";
            }
            allobj[this.index].style.background = "#10df00";
            deader = this.index;
            man[this.index].status = 'over';
            console.log(man);
            manall = JSON.stringify(man);
            sessionStorage.mana = manall;
            console.log(manall);
        }
    }
}
//判断是否有选身份
$('#butt').click(
    function () {
        if (deader == undefined) {
            alert("还没投票呢！");
        } else {
            manall = JSON.stringify(man);
            sessionStorage.man = manall;
            console.log(manall);
            window.location.href = "js2-6.html";
        }
    }
);
