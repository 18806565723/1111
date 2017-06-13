/**
 * Created by Administrator on 2017/5/10.
 */

var input = document.getElementById('text');
var but1 = document.getElementById('but1');
var but2 = document.getElementById('but2');
var range = document.getElementById('range');





but1.onclick =function but1num() {
    input.value--;   //让输出栏的值减少
    if (input.value<6){    //少于6就不行了
        alert("过头了！");
        input.value = 6;
    }
    else {
        range.value = input.value;
    }

};


but2.onclick = function but2num() {
    input.value++;   //与上面相反
    if (input.value>18){
        alert("过头了！");
        input.value = 18;
    }
    else {range.value = input.value;}
};



input.onblur = function inputnum() {  //这是个失去焦点事件，属于input文本输出值
    if (input.value < 6) {


        alert("太小了！");
        input.value = 6;
        range.value = 6;
    }
    else if (input.value > 18){
        alert("太大了！");
        input.value = 18;
        range.value = 18;
    }

    else{
        range.value = input.value;    //这里关联了滚动条和输出栏值相同，下面同。
    }
};


range.onchange = function rangenum() {
    input.value = range.value ;  //让滚动条的值与输出值一样
};
console.log(range);


var ul = document.getElementById("ul");
var set = document.getElementById("set");
var play = "";



set.onclick = function setplay() {
    play = "";
    var kill = [];  //杀手数组
    var proo = [];  //平民数组

    if (input.value>=6 && input.value<=10){
        kill.length = 1;
    }
    else if (input.value>=11 && input.value<=16){
        kill.length = 2;
    }

    for (var i = 0; i < kill.length; i++) {
        //生成杀手数组并在控制台打印
        kill[i] = "杀手";
        console.log(kill[i]);
    }

    console.log(kill);
    for (var a = 0; a < (input.value - kill.length); a++) {
        //生成平民数组并在控制台打印
        proo[a] = "平民";
        console.log(proo[a]);
    }

    //下面是数组乱序
    var all = kill.concat(proo);
    var shuffle = function(v){
        for (var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
        return v;

    };
    all = shuffle(all);
    console.log(all);


    //从这开始是分配并写入
    for (var b=0;b<all.length;b++){
        if (all[b] == "杀手"){
            play += "<li><i></i>" + (b + 1) + "号" + "&nbsp;&nbsp;" + all[b] + "</li>";
        }
        else {
            play += "<li><span></span>" + (b + 1) + "号" + "&nbsp;&nbsp;" + all[b] + "</li>";
        }
        ul.innerHTML = play;
    }

    allplay = JSON.stringify(all);
    alert(allplay);
    sessionStorage.all = allplay;
    console.log(allplay);
};



var butt = document.getElementById("butt");
butt.onclick = function butt() {
    if (allplay !== null){
        window.location.href = "js2-3.html";//如果配对就跳转到下一个页面，!= null指不为零
    } else
      alert("没有设置身份！")

};


