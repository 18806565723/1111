/**
 * Created by Administrator on 2017/5/26.
 */

$('#text1').css("display","none");
function myFunction(){
    if ($('#name').val()==''){
        $('#text1').css("display","");
    }else {
        $('#text1').css("display","none");
    }
}


$('#text2').css("display","none");
function b() {
    if ($('#code').val()== ''){
        $('#text2').css("display","");
    }else{
        $('#text2').css("display","none");
    }

}

function c() {
    if ($('#name').val() == '') {
        $('#text1').css("display", "");
    }
    if ($('#code').val() == '') {
        $('#text2').css("display", "");
    }
    if ($('#name').val() == '' && $('#code').val() == ''){
        $('#text1').css("display", "");
        $('#text2').css("display", "");
    }
    if ($('#name').val() != '' && $('#code').val() != ''){
        $.ajax({
            type:'post',
            url:'/carrots-admin-ajax/a/login',
            data:{
                name:$('#name').val(),
                pwd:$('#code').val()
            },
            success:function (data) {
                console.log(data);
                var cba = JSON.parse(data);
                console.log(cba);

                if (cba.message=='success'){
                    console.log(1);
                    window.location.href = "../../html/main.html";
                }
            }
        })
    }
}



