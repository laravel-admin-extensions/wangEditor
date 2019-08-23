wangEditor extension for laravel-admin
======

这是一个`laravel-admin`扩展，用来将`wangEditor`集成进`laravel-admin`的表单中

## 截图

![wx20180904-103609](https://user-images.githubusercontent.com/1479100/45007036-65573b80-b02e-11e8-8b27-7ced3db47085.png)

## 安装

```bash
composer require laravel-admin-ext/wang-editor
```

然后
```bash
php artisan vendor:publish --tag=laravel-admin-wangEditor
```

## 配置

在`config/admin.php`文件的`extensions`，加上属于这个扩展的一些配置
```php

    'extensions' => [

        'wang-editor' => [
        
            // 如果要关掉这个扩展，设置为false
            'enable' => true,
            
            // 编辑器的配置
            'config' => [
                
            ]
        ]
    ]

```

编辑器的配置可以到[wangEditor文档](https://www.kancloud.cn/wangfupeng/wangeditor3/335776)找到，比如配置上传图片的地址[上传图片](https://www.kancloud.cn/wangfupeng/wangeditor3/335782)

```php
    'config' => [
        // `/upload`接口用来上传文件，上传逻辑要自己实现，可参考下面的`上传图片`
        'uploadImgServer' => '/upload'
    ]
```

## 使用

在form表单中使用它：
```php
$form->editor('content');
```

## 上传图片

图片上传默认使用base64格式化后与文本内容一起存入数据库，如果要上传图片到本地接口，那么下面是这个接口对应的action代码示例：

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Storage;

    public function upload(Request $request)
    {
        $urls = [];

        foreach ($request->file() as $file) {
            $urls[] = Storage::url($file->store('images'));
        }

        return [
            "errno" => 0,
            "data"  => $urls,
        ];
    }

> **Note:** 配置路由指向这个action，存储的disk配置在`config/filesystem.php`中，这个需参考laravel官方文档。

## 支持

如果觉得这个项目帮你节约了时间，不妨支持一下;)

![-1](https://cloud.githubusercontent.com/assets/1479100/23287423/45c68202-fa78-11e6-8125-3e365101a313.jpg)

License
------------
Licensed under [The MIT License (MIT)](LICENSE).
