wangEditor extension for laravel-admin
======
fork from:https://github.com/laravel-admin-extensions/wangEditor

这个仓库独立出来是给自己使用的，目前 wangEditor 的版本为 4.6.9

``` bash
// 注意：升级后需要重新发布静态资源
php artisan vendor:publish --force --tag=laravel-admin-wangEditor
```

这是一个`laravel-admin`扩展，用来将`wangEditor`集成进`laravel-admin`的表单中

laravel-admin | extension
---- | ---
1.x | 1.x
2.x |2.x

## 安装

```bash
// laravel-admin 1.x
composer require leo-yi/wang-editor

// laravel-admin 2.x (请使用官方)
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

编辑器的配置可以到[wangEditor官网](http://www.wangeditor.com/)

## 使用

在form表单中使用它：
```php
$form->editor('content');
```

License
------------
Licensed under [The MIT License (MIT)](LICENSE).
