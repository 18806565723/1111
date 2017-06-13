/**
 * Created by Administrator on 2017/5/20.
 */

var manall = sessionStorage.man;
var man = JSON.parse(manall);
console.log(man);
var killman = 0;//活着的杀手人数
var people = 0;//活着的平民人数
var ggkillman = 0;//死亡的杀手人数
var ggpeople = 0;//死亡的平民人数

for (a = 0; a< man.length; a++) {
    //计算存活和死亡的杀手人数和平民人数
    if (man[a].identity == '杀手' && man[a].status == 'alive') {
        killman++;
    } else if (man[a].identity == '杀手' && man[a].status == 'over') {
        ggkillman++;
    }
    else if (man[a].identity == '平民' && man[a].status == 'alive') {
        people++;
    } else if (man[a].identity == '平民' && (man[a].status == 'dead' || man[a].status == 'over')) {
        ggpeople++;
    }
}
console.log(killman,people,ggkillman,ggpeople);
$('.p1').html('本轮游戏共抓出杀手' + ggkillman + '人');
if (killman != 0) {
    $('.p2').html('<div><br><br>杀手胜利</div><p><strong>太棒了！你知道么？在杀人游戏中只有20%的杀手取得游戏最终的胜利哦！</strong></p>');
} else {
    $('.p2').html('<div><br><br>平民胜利</div><p><strong>太棒了！你打败了杀手！在杀人游戏中取得了游戏最终的胜利哦！</strong></p>');
}




var chineseNum = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]; //声明一个大写中文数字数组，用于第几天
var a =1;
var b = '';
var c =1;
var d = '';
var day = 1;
var play = '';
//循环生成从第一天至游戏结束的过程中，死亡玩家的死亡方式和真实身份
for (var x = 0; x <=(ggkillman + ggpeople) / 2; x++) {
    for (var j = 0; j < man.length; j++) {
        if (man[j].day == day) {
            if (man[j].status == 'dead') {
                a = man[j].num;
                b = man[j].identity;
            }
            if (man[j].status == 'over') {
                c = man[j].num;
                d = man[j].identity;
            }
        }
    }
    day++;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    if (day ==2 ){
        play += '<div class="p3-main"><h3>第一天</h3><span>0小时07分</span><p>晚上:' +
            a + '号被杀手杀死，' + a + '号是' + b + '</p></div>';
    }
    else if (a!= 0 && b!= 0 && c!= 0 && d!= 0 ) {
        play += '<div class="p3-main"><h3>第' + chineseNum[day - 2] + '天</h3><span>0小时07分</span><p>白天:' + c + '号被全民投票投死，' + c + '号是' + d + '</p><p>晚上:' +
            a + '号被杀手杀死，' + a + '号是' + b + '</p></div>';
    } else {
        play += '<div class="p3-main"><h3>第' + chineseNum[day - 2] + '天</h3><span>0小时07分</span>' +
            '<p>白天:' + c + '号被全民投票投死，' + c + '号是' + d + '</p></div>';
    }
    $('.p3').html(play);
    a = 0;
    b = 0;
    c = 0;
    d = 0;
}


