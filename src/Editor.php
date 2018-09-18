<?php

namespace Encore\WangEditor;

use Encore\Admin\Form\Field;

class Editor extends Field
{
    protected $view = 'laravel-admin-wangEditor::editor';

    protected static $css = [
        'vendor/laravel-admin-ext/wang-editor/wangEditor-3.0.10/release/wangEditor.css',
    ];

    protected static $js = [
        'vendor/laravel-admin-ext/wang-editor/wangEditor-3.0.10/release/wangEditor.js',
    ];

    public function render()
    {
        $name = $this->formatName($this->column);

        $config = (array) WangEditor::config('config');

        $config = json_encode(array_merge([
            'zIndex'              => 0,
            'uploadImgShowBase64' => true,
        ], $config, $this->options));

        $token = csrf_token();

        $this->script = <<<EOT

var E = window.wangEditor
var editor = new E('#{$this->id}');

editor.customConfig.uploadImgParams = {_token: '$token'}

Object.assign(editor.customConfig, {$config})

editor.customConfig.onchange = function (html) {
    $('input[name=$name]').val(html);
}
editor.create()

EOT;
        return parent::render();
    }
}
