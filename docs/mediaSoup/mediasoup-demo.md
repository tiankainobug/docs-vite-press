

### Mediasoup-demo 启动步骤

#### 一.本人环境

系统：macos13.6.3

node: v16.20.2

npm:8.19.4

#### 二.下载代码

git 下载代码：

> git clone git@github.com:versatica/mediasoup-demo.git

#### 三.代码介绍

下载下来的代码里包含`app`、`server`两个文件夹。

server 是流媒体服务端，也就是后端服务。

app 是前端服务。

#### 四.代码运行

首先我们启动**服务端**。



进入 server 下，创建 cert 文件夹，然后创建密钥：

```bash
cd server
mkdir certs
cd certs
openssl genrsa -out privkey.pem 2048
openssl req -new -key privkey.pem -out csr.pem
openssl x509 -req -in csr.pem -signkey privkey.pem -out fullchain.pem
```

上面的代码依次执行。



然后我们开始按照依赖

```bash
npm install --legacy-peer-deps 
```

这里会比较漫长，最好是搭建代理来安装。



安装好依赖后，我们需要修改配置文件

> cp config.example.js config.js

在 server 目录下面进行操作。



最后我们启动 server

> MEDIASOUP_ANNOUNCED_IP=172.20.232.54 npm start

上面的 172.20.232.54 替换为自己的 ip地址。

这样如果不出意外的话 :) ,我们服务端就启动成功了。

（有意外欢迎咨询）



开始启动**前端**

前端启动比较简单，进入 app 目录下，按照依赖，启动就好了。

```
cd app
npm install
npm start
```

#### 五.效果展示

![123](https://tiankai-1308241476.cos.ap-nanjing.myqcloud.com/typora/123.png)