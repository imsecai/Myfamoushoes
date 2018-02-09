window.onload = function(){
    render();
    function render(){
        var carlist=[];
        var cookies = document.cookie;
        console.log(cookies);

        if(cookies.length){
            cookies = cookies.split('; ');
            cookies.forEach(function(item){
                var arr = item.split('=');
                if(arr[0] === 'carlist'){
                    carlist = JSON.parse(arr[1]);
                }
            });
        }
        var total=0;
        var save=0;
        var allTotal =0;
        var allSave=0;
        var carTable=document.getElementById('carTable');
        var tbody=document.getElementsByTagName('tbody')[0];
        tbody.innerHTML=carlist.map(function(goods){
            var price = goods.ourprice.split(" ")[1];
            total = goods.number * price;
            save = goods.number * goods.listprice.split(" ")[1]-total;
            allTotal+=total;
            allSave+=save;
            return `
            <tr data-guid='${goods.id}'>
                <td class="goods" ><img src=${goods.imgurl} alt="" />
                <span>${goods.color}</span>
                <p>ID:<span>${goods.id}</span></p><br />
                <p>Size:<span>${goods.size}</span></p>
                </td>
                <!-- 加减数量 -->
                <td class="count">
                    <span class="reduce">-</span>
                    <input type="text" class="count-input" value="${goods.number}" />
                    <span class="add">+</span>
                </td>

                <td class="price">
                <span>${goods.listprice}</span>py6.<br />
                    <span>${goods.ourprice}</span>py6.
                </td>
                <!-- Total price -->
                <td class="subtotal">
                    <span>${total}</span>py6.<br />
                    You save <span>${save}</span>py6.
                </td>
                <!-- remove删除 -->
                <td class="operation">
                    <span class="delete">
                        <button class="delete">&times;</button>
                    </span>
                </td>
            </tr>
            `
        }).join('');

        if(tbody.children.length>0){
           document.getElementsByClassName('checkout')[0].className='aaa checkout';
        }else{
             
             document.getElementsByClassName('checkout')[0].className='checkout';
        }
        document.getElementById('priceTotal').innerHTML=allTotal;
        document.getElementById('saveTotal').innerHTML=allSave;
    document.onclick=function(e){
        var e =e||window.event;
        var target=e.target||e.srcElement;
        var countinput = document.getElementsByClassName('count-input');
        if(target.className=='delete'){
            var currentLi=target.parentNode.parentNode;
            var id=currentLi.parentNode.getAttribute('data-guid');
            console.log(id);
            for(var i=0;i<carlist.length;i++){
                if(carlist[i].id==id){
                    carlist.splice(i,1);
                    break;
                }
            }
            document.cookie = 'carlist=' + JSON.stringify(carlist);
            render();
        }
        if(target.className=='add'){

            var currentLi=target.parentNode.parentNode;

            var id=currentLi.getAttribute('data-guid');
             console.log(id)

            var countinput = countinput.value;
            for(var i=0;i<carlist.length;i++){
                if(carlist[i].id==id){
                   
                    //qty++
                    countinput++;
                    carlist[i].number++;
                    break;
                }
            }
            document.cookie = 'carlist=' + JSON.stringify(carlist);
            render();
        }
        if(target.className=="reduce"){
            var currentLi=target.parentNode.parentNode;

            var id=currentLi.getAttribute('data-guid');
            for(var i=0;i<carlist.length;i++){
                if(carlist[i].id==id){
                   
                    //qty--
                    countinput--;
                    carlist[i].number--;
                    if( carlist[i].number<=0){
                        return;
                    }
                    break;
                }
            }
            document.cookie = 'carlist=' + JSON.stringify(carlist);
            

            render();
        }

    }
        
    }
}