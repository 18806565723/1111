/**
 * Created by Administrator on 2017/4/26.
 */

var num=[]
var box = document.getElementsByClassName("box");  //拿到所有box.
var color=[];
var num1 = Math.floor(Math.random() *9);
var num2 = Math.floor(Math.random() *9);
var num3 = Math.floor(Math.random() *9);
var ft;


function coop() {
    for (var i=0;i<3;i++){
        num1 = Math.floor(Math.random() *9);
        num2 = Math.floor(Math.random() *9);
        num3 = Math.floor(Math.random() *9);
        color[i]="#" + Math.floor(Math.random() *0xffffff).toString(16)
        }

    if ( num1 == num2 || num2 == num3 || num3 == num1) {
        coop()
        }
}


function cctv(){
    for (var i=0;i<9;i++){
        box[i].style="background: orange";
    }
    if (box[num1] == box[num2] || box[num2] == box[num3] || box[num1] == box[num3])
        {cctv()
            }
}


function boxcolor(){
    cctv();
    coop();
    box[num1].style.backgroundColor = color[0];
    box[num2].style.backgroundColor = color[1];
    box[num3].style.backgroundColor = color[2];

}


var no1 = function () {
    clearInterval(ft);
    ft=setInterval("boxcolor()",600);
};


var no2 = function () {
    clearInterval(ft);
    cctv();

};
