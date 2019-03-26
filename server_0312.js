var net = require('net');               //获取模块net、

var server = net.createServer();        //用模块net中的createServer()函数创建一个服务器

server.on('connection',conn =>{         //服务器添加监听事件connection

    conn.on('data',d=>{                 //连接成功之后，conn事件添加监听事件data，输出data的字符串内容
        // console.log(d.toString());

        var lines = d.toString().split('\r\n');
        var firstLine = lines.shift();

        var [method, path, protocol] = firstLine.split(' ');

        var headers = lines.map(it => it.split(': ')).reduce((headers,kv)=>{
            var k = kv[0];
            var v = kv[1];
            headers[k] = v;
            return headers;
        },{})

        console.log(method,path,headers);
        conn.write(                     //无脑响应hello world数据
`HTTP/1.1 200 OOOOK
Content-type: text/html

hello you are visiting ${path}<br>
is ${new Date()} now`
        )
    })
})

server.listen(8080,()=>{                //服务器监听8080端口
    console.log('server listening on port 8080');
})