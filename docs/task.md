
# HTML页面

## 首页与分类页面

| url | 方法 | 说明 | 
| --- | --- | --- | 
| / | GET | 首页 | 
| /hots | GET | 热门 | 
| /file/:id | GET | 文件详情 |

## 用户页

| url | 方法 | 说明 | 
| --- | --- | --- |
| /user/:register | GET | 用户注册 | 
| /user/:login | GET | 用户登录 | 
| /user/:logout | GET | 用户退出 | 
| /user/:home | GET | 用户主页 | 
| /user/file/:id | GET | 拥有的文件 |

# 管理后台

## 管理员

方法： GET

| URL | 说明 |  |  | 
| --- | --- | --- | --- |
| /admin/login | 管理员登录 | | |
| /admin/dashboard | 管理员仪表盘 |  |
| /admin/files | 文件管理 |  |
| /admin/users | 用户管理 |  |
| /admin/site/state | 网站状态 |  |

# api
## /users

方法： POST

| 操作 | 参数 | 说明 | | | 
| --- | --- | --- | --- | --- |
| action=register | username, password, confirm | 用户注册 | | |
| action=login | username, password | 用户登录 | | |
| action=logout |  | 用户退出 | | |

## /users/:id

方法： GET

获取用户列表

### /users/:id/files

方法： GET

| 参数 | 说明 |
| --- | --- | 
| query | 所有用户文件 |
| ?type=image | 用户图片 | 
| ?type=doc | 用户文档 | 
| ?type=video | 用户视频 | 
| ?type=zip | 用户压缩文件 | 
| ?type=other | 用户其它文件 | 

## /files

方法： GET
| 参数 | 说明 |
| --- | --- |
| ? | 所有文件 | 
| type=(video\|image\|doc\|zip\|other) | 根据类型文件下载 | 


方法： POST

| 操作 | 参数 | 说明 | | | 
| --- | --- | --- | --- | --- |
| action=upload |  | 文件上传 | | |
| action=download |  | 文件下载 | | |
| action=delete |  | 文件删除 | | |
| action=accept |  | 文件接收 | | |
| action=reject |  | 文件拒绝 | | |

## /sites

方法：GET

获取注册用户数，访问量，文件上传，下载信息

## /admins

| 操作 | 参数 | 说明 |  |  | 
| --- | --- | --- | --- | --- |
| action=login |  | 管理员登录 | | |
| action=modify |  | 管理员修改信息 | | |
| action=logout |  | 管理员退出 | | |

### /admins/users

方法： GET

| 参数 | 说明 |
| --- | --- |
| query | 所有用户文件 | 
| ?name=:username,?id=:userid | 返回用户信息 | 

方法： POST

| 操作 | 参数 | 说明 |  |  | 
| --- | --- | --- | --- | --- |
| action=delete |  | 删除用户 | | |
| action=update |  | 更新用户 | | |
| action=reset |  | 重置用户密码 | | |






