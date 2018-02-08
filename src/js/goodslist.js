document.addEventListener('DOMContentLoaded',function(){

     var productList = document.querySelector('.product_list');
     var page = document.querySelector('.page_l');


     var pageNo = 1;
     var qty = 25;

     xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var res = JSON.parse(xhr.responseText);

            console.log(666)
            console.log(res);
            productList.innerHTML = res.data.map(item=>{
                var imgurl = item.imgurl.slice(2,-2);
                return `<dl id="${item.id}">
                <dt>
                    <a>
                        <img src="${imgurl}">
                    </a>
                </dt>
                <dd id="${item.id}">
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
            }).join('');


            var page_len = Math.ceil(res.total/qty);
            page.innerHTML = '';
            for (var i = 0; i < page_len; i++) {
              
                var span = document.createElement('span');
                span.innerText = i + 1;
                if(i+1 === pageNo){
                    span.className = 'active';
                }
                page.appendChild(span);
            }
        }
     }
     xhr.open('get',`http://localhost:2018/api/goodslist.php?pageNo=${pageNo}&qty=${qty}`,true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.send();


    console.log(page);
    page.onclick = function(e){
        if(e.target.tagName.toLowerCase() === 'span'){
            pageNo = e.target.innerText*1;
           
            //重新建立与服务器的连接，发起AJAX请求
            xhr.open('get',`http://localhost:2018/api/goodslist.php?pageNo=${pageNo}&qty=${qty}`,true);
            xhr.send();
        }
    }
    $()
})