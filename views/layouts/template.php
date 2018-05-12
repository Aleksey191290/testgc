<?php
use yii\helpers\Html;
use yii\widgets\Menu;
use yii\widgets\Pjax;
use app\assets\templateAsset;

templateAsset::register($this);

?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <?php $this->registerMetaTag(['name' => 'keywords', 'content' => '']);
    $this->registerMetaTag(['name' => 'description', 'content' => '']);
    $this -> registerMetaTag(['name' => 'viewport', 'content' => 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no'])
    ?>
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<?php Pjax::begin(); ?>
<div class="wrap">
    <div class="page-top short">
			
        <header>
            <div class="header-top">
                <div class="phones"><a href="tel:+78007005292">+7 800 700 52 92</a> , &nbsp; <a href="tel:+78127035292">+7 812 703 52 92</a></div>
                <br class="just-on-mobile">
                <div class="lang">Русский <i></i> <a href="#">English</a></div>
            </div>
            
            <div class="header-bottom">
                <div class="center">
                    <a class="logo" href="#"></a>
                    <nav class="main-nav">
                        
                        <?php Menu::begin([
                            'items' => [
                                ['label' => 'главная', 'url' => ['/main/index']],
                                ['label' => 'о гостинице', 'url' => ['/main/about']],
                                ['label' => 'номера', 'url' => ['/main/numbers'], 'options' => ['class' => 'has-sub'],
                                    'template' => '<a href="{url}">{label}</a>',
                                    'items' => [
                                        ['label' => 'студия стандарт', 'url' => ['/main/other']],
                                        ['label' => 'студия комфорт', 'url' => ['/main/other']],
                                        ['label' => 'бизнес стандарт', 'url' => ['/main/other']],
                                        ['label' => 'бизнес комфорт', 'url' => ['/main/other']],
                                        ['label' => 'люкс', 'url' => ['/main/other']],
                                        ['label' => 'де люкс', 'url' => ['/main/other']],
                                    ],
                                ],
                                ['label' => 'спецпредложения', 'url' => ['/main/actions']],
                                ['label' => 'Конференц-зал', 'url' => ['/main/conference-zal']],
                                ['label' => 'контакты', 'url' => ['/main/contacts']],
                                ['label' => 'бронирование', 'url' => ['/main/index'], 'options' => ['class' => 'not-on-desctop block']],
                            ],
                            'submenuTemplate' => '<ul class="sub">{items}</ul>',
                        ]);
                        Menu::end(); 
                        ?>
                    </nav>
                    <div class="btn-nav-open"><span>Меню <i></i></span></div>
                    <div class="socials">
                            <a class="fb" href="#"></a>
                            <a class="vk" href="#"></a>
                            <a class="bo" href="#"></a>
                            <a class="ta" href="#"></a>
                    </div>
                </div>
            </div>
        </header>
    

        <div class="btn-reserve-wrap">
            <a href="#" class="btn-reserve">Забронировать номер</a>
        </div>
    </div><!-- .page-top -->
    
    <section class="content-center">

        <div class="inner-page-title"><h1>Бронирование</h1></div>
        <div class="content-wrap mb50">
            <div class="col-2">
                
                     <?= $content ?>
              	 
            </div>
            <div class="col not-on-mobile">
                <div class="widget widget-offers in-sidebar mt10">
                    <h3>Спецпредложения</h3>
                    <div class="item item-long">
                        <h4>Длительное проживание</h4>
                        <a class="conditions" href="#">Условия акции</a>
                    </div>
                    <div class="item item-special">
                        <h4>Специальный тариф</h4>
                        <a class="conditions" href="#">Условия акции</a>
                    </div>
                    <div class="item item-gifts">
                        <h4>Подарки именинникам</h4>
                        <a class="conditions" href="#">Условия акции</a>
                    </div>
                </div>
                <div class="content-title mt45 tablet-line-height-29"><h3>Прямое бронирование</h3></div>
                    <ul class="contacts-list2 mt30">
                        <li class="phone"><span class="just-on-desctop">Телефон:</span> <a href="tel:+78007005292">+7 800 700 52 92</a></li>
                        <li class="phone"><span class="just-on-desctop">Телефон:</span> <a href="tel:+78127005292">+7 812 700 52 92</a></li>
                        <li class="email"><span class="just-on-desctop">Email:</span> <a href="mailto:info@grandcanyon-hotel.ru">info@grandcanyon-hotel.ru</a></li>
                    </ul>
                <div class="content-title mt45"><h3>Адрес</h3></div>
                    <ul class="contacts-list mt30 mb50">
                            <li class="address">Санкт-Петербург,<br class="not-on-desctop"> ул. Шостаковича, 2</li>
                    </ul>
                <div class="widget widget-actions2">
                    <h3>Акции и скидки</h3>
                    <p>Получайте письма о скидках и акциях<br> на вашу почту:</p>
                        <form class="subscribe-form" action="" method="post">
                            <input type="text" name="" value="" placeholder="Введите ваш email">
                            <input type="submit" value="Следить за скидками">
                        </form>
                </div>
            </div>
        </div>

    </section><!-- .content-center -->           
</div>
    
<footer>
    <div class="footer-top">
        <div class="center clearfix">
            <a class="logo" href="#"></a>
            <div class="col1">
                <h3>Контакты:</h3>
                <ul>
                    <li class="address">Russia, St-Petersburg, 196158<br> 3-113, Pulkovskaya st.</li>
                    <li class="phone">тел.: <a href="tel:+78007005292">+7 (800) 700 52 92</a></li>
                    <li class="email"><a href="mailto:info@grandcanyon-hotel.ru">info@grandcanyon-hotel.ru</a></li>
                </ul>
            </div>
            <div class="col2">
                <h3>Меню:</h3>
                <?php Menu::begin(['items' => [
                    ['label' => 'Главная', 'url' => ["/main/index"]],
                    ['label' => 'О гостинице', 'url' => ["/main/about"]],
                    ['label' => 'Номера', 'url' => ["/main/numbers"]],
                    ['label' => 'Спецпредложения', 'url' => ["/main/actions"]],
                    ['label' => 'Конференц-зал', 'url' => ['/main/conference-zal']],
                    ['label' => 'Контакты', 'url' => ["/main/contacts"]],
                ]]);
                Menu::end();
                ?>
            </div>
            <div class="col3">
                <h3>Отзывы гостей:</h3>
                <a class="review" href="#"><img src="/img/footer-review1.png" width="143" height="97" alt=""></a>
                <a class="review" href="#"><img src="/img/footer-review2.png" width="99" height="99" alt=""></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="center">
            <a class="studio" href="#"></a>
            <div class="copyright">© Copyright 2015.&nbsp; Апарт-отель Гранд-Каньон</div>
        </div>
    </div>
</footer>
<?php Pjax::end(); ?>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
