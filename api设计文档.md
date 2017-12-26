1、用户端 
HTML页面 url
1.网站
	1.主页
	url: GET /
	作用：用于展示网站主页内容。
	2.热门分类
	url: GET /hots
	作用：用于展示热门文件页面。
	3.网站文件信息页面
	url: GET /file/:id
	作用：用于展示网站文件信息页面。
2.用户
	3.登录
	url: GEt /user/:action
	action = login
	作用：用于显示用户登录页面。
	4.注册
	url: GEt /user/:action
	action = register
	作用：用于显示注册用户登录页面。
	5.用户主页面
	url: GET /user/:userid
	作用：用于显示用户操作主页面。
	6.用户文件信息页面
	url: GET /user/:userid/file/:fileid
	作用：用于显示具体文件页面。
JSON数据处理 api
1.网站
	1)获取热门文件
	url: /hots
	method: GET
	作用：返回热门文件列表到页面
2.用户
	1)登录
	url: /users
	method: POST
	data: action = login
	作用：用于接收用户登录信息的表单，并对信息进行处理，然后返回“登录成功/用户名或密码错误”到前台
	2)注册
	url: /users
	method: POST
	data: action = register
	作用：用于接收用户注册信息的表单，并对信息进行处理，然后返回“注册成功/改用户已存在”到前台
	4)获取图片列表
	url: /users/:id/image
	method: GET
	作用：用户点击图片栏，在数据库查找图片信息并进行处理，将处理后的图片信息返回到图片栏
	5)获取文档列表
	url: /users/:id/doc
	method: GET
	作用：用户点击文档栏，在数据库查找文档信息并进行处理，将处理后的文档信息返回到文档栏
	6)获取视频列表
	url: /users/:id/video
	method: GET
	作用：用户点击视频栏，在数据库查找视频信息并进行处理，将处理后的视频信息返回到视频栏
	7)获取压缩包列表
	url: /users/:id/zip
	method: GET
	作用：用户点击压缩包栏，在数据库查找压缩包信息并进行处理，将处理后的压缩包信息返回到压缩包栏
	8)获取其他列表
	url: /users/:id/other
	method: GET
	作用：用户点击“其他”栏，在数据库查找其他文件信息并进行处理，将处理后的其他文件信息返回到“其他”栏
3.文件
	
	1)分类读取
	url：/files
	method：GET 
	query：?type=具体文件类型
	作用：返回指定文件类型的文件列表到管理系统客户端
	query：?filter= pending
	作用：返回未审核文件列表到管理系统客户端
	2)上传
	url: /files
	method: POST
	data: action = upload
	作用：用户点击上传按钮，获取上传文件数据进行处理，然后存储进数据库
	3)下载
	url: /files
	method: POST
	data: action = download
	作用：用户点击下载按钮，获取下载文件信息，存储进数据库
	4)删除
	url: /files
	method: POST
	data: action = delete
	作用：用户点击删除按钮，获取对应文件索引，在数据库进行更改/管理员删除指定文件
	5)文件详情
	url: /files/:id
	method: GET
	作用：返回具体文件的文件详细信息
	6）审核文件
	url：/files 
	method：POST 
	data：action=permit&id=具体文件id
	作用：发送请求到服务器，审核通过指定文件
	data：action='reject'
	作用：发送请求到服务器，打回指定文件

2.管理端
HTML页面 url
1.网站
	1.管理系统用户管理页
	url: GET /admin/user
	作用：用于展示管理系统用户管理页。
	2.管理系统文件管理页
	url: GET /admin/file
	作用：用于展示管理系统文件管理页。
	3.网站统计信息页面
	url: GET /admin/site
	作用：用于展示网站统计信息页面。
2.管理员
	1.管理员登录页面
	url: GET /admin/login
	作用：用于展示管理员登录页面。
	2.管理员信息页面
	url: GET /admin/:id
	id = 具体管理员id
	作用：用于展示管理员信息页面。
JSON数据处理 api
1.网站
	1.网站信息
	url: /sites
	method: GET
	作用：网站注册量、访问量、文件上传量、文件下载量信息。
2.管理员
	1.管理员登录
    url: /admins
	method:POST
    data:action=login
	作用:管理员登录
	2.管理员修改密码：
	url: /admins
    method:POST
    data:action=modify
	作用:管理员修改密码
3.用户管理
	1.读取用户
	url：/admins/users
	method: GET 
	作用：读取用户信息
    2.搜索用户
	url：/admin/users?q=:username
	method：GET 
	作用：返回单个用户用户信息
    3.删除用户
	url：/admins/users 
	method：POST  
	data：action=delete
	作用：发生请求到服务器，删除指定用户
    4.权限设置
	url：/admins/users  
	method：POST 
	data：action='change'
	作用：发生请求到服务器，改变指定用户权限
    5.密码重置
	url：/admins/users  
	method：POST 
	data：action='reset'
	作用：发生请求到服务器，重置指定用户密码
