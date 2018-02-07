require(['config'],function(){
    require(['jquery'],function($){
        function vcode(){
            var res="";
            for(var i=0;i<4;i++){
                res+=parseInt(Math.random()*10);
            }
            return res;
        }
        var yzcode=document.getElementById("vcode");
        var yzm=vcode();
        yzcode.innerHTML=yzm;
        $('.actbtn').on('click',function(){
            var username = $('#username').val();
            var password = $('#password').val();
            var password2 = $('#password2').val();
            // var phone = $('#phone').val();
            var code = $('#code').val();

            // var phone = document.getElementById('phone').value;
            var reg = /^1[34578]\d{9}$/i
            if(username === ''){
                alert('手机号不能为空');
                return false;
            }
            else if(!reg.test(username)){
                alert('手机号不合法');
                return false;
            }

            if(code === ''){
                alert('请输入验证码');
                return false;
            }
            else if(code != yzm){
                alert('验证码不正确');
                return false;
            }

            if(password === ''){
                alert('密码不能为空');
                return false;
            }

            if(password != password2){
                alert('两次密码不一致');
                return false;
            }
            console.log(666)
            console.log(username,password);
            // 发起ajax请求
            $.ajax({
                // hardcode
                // type:"get",
                url:'../api/reg.php',
                data:{
                    username:username,
                    password:password
                },
                success:function(data){
                    console.log(data);
                    if(data === 'fail'){
                        alert('用户已存在，请登录');
                        return;
                    }else if(data === 'success'){
                        location.href = '../index.html';
                    }
                    // else if(data === 'error'){
                    //     alert('密码或账号不正确');
                    //     return false;
                    // }

                    
                }
            })
        })
    })
})