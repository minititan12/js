function get(url,callback){
    var req = XMLHttpRequest();
    req.open('get',url);
    req.addEventListener('load',function(e){
        if(req.status < 400){                       //理论上可以用300
            callback(req.responseText);
        }
    })
    xhr.send();
}



//ajax函数调用示例
// ajax('foo.json',{
//     method:'get',
//     headers:{
//         "COntent-Type": 'application/json',
//         "X-Requsted-By": 'ajax helper function',
//     },
//     data:"xxxxxx",
//     success: function(){},
//     error: function(){},
// })
function ajax(url,options){
    var req = new XMLHttpRequest();

    req.open(options.method,url);
    if(options.headers){
        for(let key in options.headers){
            let val = options.headers[key];
            req.setRequestHeader(key,val);
        }
    }

    req.addEventListener('load',function(e){
        if(req.status < 400){
            options.success(req.responseText);
        }else{
            options.error(e);
        }
    })

    req.addEventListener('error',function(e){
        options.error(e);
    })

    req.send(options.data);
}

