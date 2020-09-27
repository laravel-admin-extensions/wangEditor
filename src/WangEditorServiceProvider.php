<?php

namespace Encore\WangEditor;

use Encore\Admin\Assets;
use Encore\Admin\Form;
use Illuminate\Support\ServiceProvider;

class WangEditorServiceProvider extends ServiceProvider
{
    /**
     * {@inheritdoc}
     */
    public function boot(WangEditor $extension)
    {
        if (! WangEditor::boot()) {
            return ;
        }

        if ($views = $extension->views()) {
            $this->loadViewsFrom($views, 'laravel-admin-wangEditor');
        }

        Assets::define('wangEditor', [
            'js'     => 'https://cdn.jsdelivr.net/npm/wangeditor@3.1.1/release/wangEditor.min.js',
            'export' => 'wangEditor',
        ]);

        Form::extend('editor', Editor::class);
    }
}
