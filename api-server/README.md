# json-server

> mock API 接口

安装：

```bash
$ npm i -g json-server
```

创建一个 `db.json` 文件，写入以下内容：

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

启动 API 服务：

```bash
$ json-server --watch db.json
```

## 启动 API Server

```bash
$ npm run api
```
