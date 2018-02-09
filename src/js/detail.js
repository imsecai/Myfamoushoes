require(['config'],function(){
    require(['jquery','banner','head'],function($){
        var bigbox = location.search.slice(1)
        console.log(bigbox);
        $.ajax({
            url:'../api/detail.php',
            dataType:'json',
            data:{
                id:bigbox
            },
            success:function(data){
                console.log(data);
                $('#goodsimg').attr('src','../'+data[0].imgurl.slice(2,-2));
                $('.goodsname').text(data[0].details);
                $('.price').text(data[0].goodsprice);
                $('#pro_view_more').text(data[0].category);
                $('.goodname').text(data[0].goodsname);
            }
        })

        $che=$('.che');

        $('.btn-buy').on('click',function(){
            console.log(666)
            var $img = $('.goods').children('img');
            var $copyImg = $img.clone();
            
            $copyImg.css({
                position:'absolute',
                left:$img.offset().left,
                top:$img.offset().top,
                width:$img.outerWidth()
            });

            // 把图片写入页面
            $('body').append($copyImg);
            
            $copyImg.animate({
                left:$che.offset().left,
                top:$che.offset().top + $che.height(),
                width:30
            },function(){
            // 动画完成后

            // 删除复制的图片
            $copyImg.remove();

            })
                    
        })
    })
});