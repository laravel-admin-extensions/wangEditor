<?php

namespace Encore\WangEditor;

use Encore\Admin\Form\Field;

class Editor extends Field
{
    protected $view = 'laravel-admin-wangEditor::editor';

    protected static $js = [
        'vendor/laravel-admin-ext/wang-editor/wangEditor-4.5.2/wangEditor.js',
    ];

    public function render()
    {
        $id = $this->formatName($this->id);

        $config = (array) WangEditor::config('config');

        $config = json_encode(array_merge([
            'fontNames' => [
                '黑体',
                '仿宋',
                '楷体',
                '标楷体',
                '华文仿宋',
                '华文楷体',
                '宋体',
                '微软雅黑',
                'Arial',
                'Tahoma',
                'Verdana',
                'Times New Roman',
                'Courier New',
            ]
        ], $config, $this->options));

        $token = csrf_token();

        $this->script = <<<EOT
(function ($) {

    if ($('#{$this->id}').attr('initialized')) {
        return;
    }

    var E = window.wangEditor
    var editor = new E('#{$this->id}');
    
    editor.config.uploadImgParams = {_token: '$token'}
    
    Object.assign(editor.config, {$config})
    
    editor.config.onchange = function (html) {
        $('#input-$id').val(html);
    }
    editor.create();
    
    $('#{$this->id}').attr('initialized', 1);
})(jQuery);
EOT;
        return parent::render();
    }
}
