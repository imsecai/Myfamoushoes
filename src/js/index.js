// document.addEventListener('DOMContentLoaded',function(){
//     var lf_cat = document.querySelector(".lf_cat");
//     var category = document.querySelector(".category-menu-nav");

//     var nav_nanzi = document.querySelector("#nav_nanzi");
//     var nav_nvzi = document.querySelector("#nvzi");
//     var nav_ertong = document.querySelector("#nav_ertong");

//     var nav_nanzi2 = document.querySelector("#nav_nanzi_pop");
//     var nav_nvzi2 = document.querySelector("#nav_nvzi_pop");
//     var nav_ertong2 = document.querySelector("#nav_ertong_pop");

//     var cat_ydxie = document.querySelector("#cat_ydxie");
//     var cat_ydxie_pop = document.querySelector("#cat_ydxie_pop");

//     var cat_ydfu = document.querySelector("#cat_ydfu");
//     var cat_ydfu_pop = document.querySelector("#cat_ydfu_pop");

//     var cat_paobu = document.querySelector("#cat_paobu");
//     var cat_lanqiu = document.querySelector("#cat_lanqiu");
//     var cat_zuqiu = document.querySelector("#cat_zuqiu");
//     var cat_baobao = document.querySelector("#cat_baobao");

//     lf_cat.onmouseenter = function(){
//         category.style.display = 'block';
//     }

//     category.onmouseleave = function(){
//         category.style.display = 'none';
//     }

//     nav_nanzi.onmouseenter = function(){
//         nav_nanzi2.style.display = 'block';
//         nav_nvzi2.style.display = 'none';
//     }

//     nav_nanzi2.onmouseleave = function(){
//         nav_nanzi2.style.display = 'none';
//     }

//     nav_nvzi.onmouseenter = function(){
//         nav_nvzi2.style.display = 'block';
//         nav_nanzi2.style.display = 'none';
//     }

//     nav_nvzi2.onmouseleave = function(){
//         nav_nvzi2.style.display = 'none';
//     }

//     cat_ydxie.onmouseenter = function(){
//         cat_ydxie_pop.style.display = 'block';
//         cat_ydfu_pop.style.display = 'none';
//     }

//     cat_ydxie_pop.onmouseleave = function(){
//         cat_ydxie_pop.style.display = 'none';
//     }

//     cat_ydfu.onmouseenter = function(){
//         cat_ydfu_pop.style.display = 'block';
//         cat_ydxie_pop.style.display = 'none';
//     }

//     cat_ydfu_pop.onmouseleave = function(){
//         cat_ydfu_pop.style.display = 'none';
//     }

//     cat_paobu.onmouseenter = function(){
//         cat_ydxie_pop.style.display = 'block';
//         cat_ydfu_pop.style.display = 'none';
//     }

//     cat_lanqiu.onmouseenter = function(){
//         cat_ydfu_pop.style.display = 'block';
//         cat_ydxie_pop.style.display = 'none';
//     }

//     cat_zuqiu.onmouseenter = function(){
//         cat_ydxie_pop.style.display = 'block';
//         cat_ydfu_pop.style.display = 'none';
//     }

//     cat_baobao.onmouseenter = function(){
//         cat_ydfu_pop.style.display = 'block';
//         cat_ydxie_pop.style.display = 'none';
//     }

// });

require(['config'],function(){
    require(['jquery','banner','head'],function($){
        $('#header').load('../html/header.html #pageheader');
        $('#footer').load('../html/footer.html #footer');
        $(function(){
            $('#dowebok').easyFader();
        });

        // var productList = document.querySelector('.product_list');
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            // data:{
            //     username:username,
            //     password:password
            // },
            success:function(data){
                console.log(data);
                var box =$.map(data,function(item,idx){
                    var imgurl = item.imgurl.slice(2,-2);
                    return `<dl data-id="${item.id}">
                    <dt>
                        <a>
                            <img src="${imgurl}">
                        </a>
                    </dt>
                    <dd data-id="${item.id}">
                        <a>
                            <ul>
                                <li class="r1">${item.goodsprice}</li>
                                <li class="r2">${item.goodsname}</li>
                                <li class="r3">已售出<i>24</i>件</li>
                                <li class="r4">${item.size}</li>
                            </ul>
                        </a>
                    </dd>
                    </dl>`
                })
                $('.product_list').html(box);
            }
        })
        
        $('.product_list').on('click','dl',function(){
            location.href = '../html/detail.html?'+this.dataset.id;
        })
    })
});