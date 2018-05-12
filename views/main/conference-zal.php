<?php
use yii\widgets\ActiveForm;
use yii\helpers\Html;
use yii\bootstrap\Modal;

$this -> title = "Конференц-зал";
?>
<div class="zal-container">
    
    <div class="zal-header">Большой конференц-зал</div><hr>
    <ul class="zal-ul">
        <li>Площадь – 86 кв.м.</li>
        <li>Вместимость – 50 чел.</li>
        <li>Цена – от 1 250 руб./час</li>
    </ul>
    <p class="add-margin">Большой зал площадью 86 квадратных метров рассчитан на комфортное 
        размещение 50 человек.&nbsp; Согласно Вашим предпочтениям, возможны разные 
        варианты рассадки:</p>
    <ul class="zal-ul">
        <li>Театр – до 60 чел.</li>
        <li>Класс – 25 чел.</li>
        <li>Круглый стол – 25 чел.</li>
        <li>Буквой «П» - 20 чел.</li>
        <li>Прием – 40 чел.</li>
    </ul>
    <div class="table main-table">
        <table>
        <tbody>
        <tr>
        <th add-margin>Услуга</th>
        <th add-margin>Руб./час*</th>
        <th class="nowrap add-margin">4 часа</th>
        <th class="nowrap add-margin">8 часов</th>
        </tr>
        <tr>
        <td><strong>Конференц-пакет «Эконом»</strong>
        <ul class="zal-ul">
            <li>аренда зала</li>
            <li>проекционный экран</li>
            <li>флипчарт</li>
            <li>маркеры и губка</li>
            <li>кулер с водой</li>
            <li>навигация</li>
            <li>безлимитный доступ к Wi-Fi</li>
        </ul>
        </td>
        <td><strong>1 250</strong></td>
        <td><strong>4 900</strong></td>
        <td><strong>9 600</strong></td>
        </tr>
        <tr>
        <td><strong>Конференц-пакет «Стандарт»</strong>
        <ul class="zal-ul">
            <li>аренда зала</li>
            <li>мультимедийный проектор с лазерной указкой</li>
            <li>проекционный экран</li>
            <li>флипчарт</li>
            <li>маркеры и губка</li>
            <li>кулер с водой</li>
            <li>навигация</li>
            <li>безлимитный доступ к Wi-Fi</li>
        </ul>
        </td>
        <td><strong>1 600</strong></td>
        <td><strong>6 200</strong></td>
        <td><strong>12 000</strong></td>
        </tr>
        <tr>
        <td class="center" colspan="4"><em>*Минимальный срок аренды зала – 2 часа.</em></td>
        </tr>
        </tbody>
    </table>
    </div>
</div>

<?php 
$form = ActiveForm::begin(['options' => ['class' => 'form', 'data-pjax' => true], 
        'action' => ['/main/conference-zal'],
        'fieldConfig' => [
        'template' => '
        {label}{input}{hint}',
            ],
        'validateOnBlur' => false,
        'validateOnChange' => false,
        'validateOnType' => false,
    ]);
Modal::begin([
    'header' => '<div class="order_conference_zal">Заявка</div>',
    'toggleButton' => ['label' => 'Оставить заявку', 'class' => 'button'],
    'footer' => HTML::submitButton("Отправить", ['class' => 'button btn-big form-control']),
]);
    echo $form -> field($orders, 'service_id') -> dropDownList($service) -> label("");
    echo $form -> field($orders, 'name') -> label("Ваше имя");
    echo $form -> field($orders, 'email') -> label("Emai");
    echo $form -> field($orders, 'phone') -> label("Телефон");
    echo $form -> field($orders, 'preferences') -> textarea(['rows' => 4, 'cols' => 10, 'style' => 'resize:none']) -> label("Предпочтения");
    echo 'Нажимая на кнопку "Отправить", я даю <strong>' . HTML::a('согласие на обработку моих персональных данных', ['/license/personalnye-dannye.pdf'], ['target' => '_blank', 'style' => 'text-decoration: none']) . '</strong>';
Modal::end();
ActiveForm::end();
          