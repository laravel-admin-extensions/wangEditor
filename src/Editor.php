<?php

namespace Encore\WangEditor;

use Encore\Admin\Form\Field;

class Editor extends Field\Textarea
{
    protected $view = 'laravel-admin-wangEditor::editor';

    public function render()
    {
        $config = (array) WangEditor::config('config');

        $this->addVariables('config', array_merge([
            'zIndex'              => 100,
            'uploadImgShowBase64' => true,
        ], $config, $this->options));

        return parent::render();
    }
}
