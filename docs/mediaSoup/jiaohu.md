##### 交互逻辑：

##### `第一轮`

**客户端**

1. 客户端新建 websocket 连接（url+roomId）
2. 客户端设置监听 ws 消息



**服务端**

> roomMap > room > member > transportInfo

1. 设置定时任务，每隔 5 秒检测发送服务器情况、检测服务器带宽是否充足
2. 通过 roomMap 创建 worker 通道 (`mediaSoup.createWorker`)
3. work 调用 createWebRtcServer(`worker.createWebRtcServer`)
4. 初始化 room 信息
5. 初始化 websocket 连接，发送 authorization 消息
6. 设置监听消息



##### `第二轮`

**客户端**

1. 客户端收到authorization消息，发送join 消息

**服务端**

1. 服务端收到 join 消息，开始处理
2. room 中加入该成员，获取对应 router 的 rtpCapabilities（`router.rtpCapabilities`）
3. 向客户端发送 join 消息，传递 rtpCapabilities
4. 发送通知消息 notified 



##### `第三轮`

客户端：

1. 收到 join 消息，拿到 rtpCapabilities，开始处理
2. 客户端 load（`device.load({ routerRtpCapabilities })`）
3. 给服务端发送 createTransport 消息

服务端：

1. 收到 createTransport 消息，开始处理
2. 调用 router.createWebRtcTransport，返回一个 `transport` 对象。
3. transport包含`id、iceParameters、iceCandidates、dtlsParameters、sctpParameters`
4. 创建 consume（`transport.consume`）
5. 发送newConsumer消息，传递 consume 信息





