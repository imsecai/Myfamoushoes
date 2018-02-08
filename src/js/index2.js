require(['config'],function(){
    require(['jquery'],function($){
        var productList = document.querySelector('.product_list');

        $.ajax({

                url:'../api/goodslist.php',
                data:{
                    username:username,
                    password:password
                },
                success:function(data){
                    console.log(data);
                }
            })


    })

})