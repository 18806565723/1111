/**
 * Created by Administrator on 2017/5/20.
 */
var manall = sessionStorage.man;
var man = JSON.parse(manall);
console.log(man);

var killman = 0;//杀手数
var people = 0;//水民数
var mangg = 0;//玩家GG的总数
var play = "";

for (day=1 ; day<man.length; day++){
    for (a=0; a<man.length; a++){
        if (man[a].day == day) {
            if (man[a].status == 'dead') {
                play +='<p>' + man[a].num + "号被杀手干掉了，他的真实身份是" + man[a].identity + '</p>'+'<br>';//定义每个段落
                $('.p1').eq(0).html(play);
            }
            if (man[a].status == "over") {
                play += man[a].num + "号被投票投死了，他的真实身份是" + man[a].identity + '<br>';
                $('.p1').eq(0).html(play);
            }
        }
    }
}

for (b=0;b<man.length; b++){
    if (man[b].status == "dead" || man[b].status == "over"){
        mangg++;
    }
}

console.log(mangg);
sessionStorage.mannum = mangg;


for (var c = 0; c< man.length; c++) {
    if (man[c].status == 'alive') {
        if (man[c].identity == '平民') {
            people++;
        } else {
            killman++;
        }

    }
    }
    console.log(people,killman,mangg);



    if (people <=killman) {
        $('#butt').text('杀手获胜，查看结果').click(function () {
            window.location.href = 'js2-7.html';
        });
    } else if (killman == 0) {
        $('#butt').text('平民获胜，查看结果').click(function () {
            window.location.href = 'js2-7.html';
        });
    } else if ((mangg + 2) % 2 == 0) {
        $('#butt').text('天黑了').click(function () {
            window.location.href = 'js2-9.html';
        });
    } else if ((mangg + 2) % 2 != 0){
        $('#butt').text('第' + (mangg + 3) / 2 + '天').click(function () {
            window.location.href = 'js2-8.html';
        });
    }






