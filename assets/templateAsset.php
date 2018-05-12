<?php
namespace app\assets;

use yii\web\AssetBundle;

class templateAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'http://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic&subset=latin,cyrillic',
        'http://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700&subset=latin,cyrillic',
        "/css/lightview.css",
        "/css/jquery-ui.min.css",
        "/css/style.css",
        "/css/responsive.css",
        
    ];
    public $js = [
        "/js/jquery-ui.min.js",
        "/js/simpslider.js",
        "/js/lightview.js",
        "/js/script.js",
    ];
    public $depends = [
        'app\assets\AppAsset',
    ];
}