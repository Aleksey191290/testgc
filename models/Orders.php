<?php
namespace app\models;

use app\models\mail\SendTextMail;
use yii\db\ActiveRecord;

class Orders extends ActiveRecord{
    public static function tableName() {
        return "orders";
    }
    public function getService(){
        return $this -> hasOne(Service::classname(), ['service_id' => 'id']); 
    }
    public function saveOrderConferenceZal(){
        if($this -> save()){
            $from = \yii::$app -> params['infoEmail'];
            $admin = \yii::$app -> params['adminEmail'];
            $admin_name = \yii::$app -> params['infoName'];
            new SendTextMail([$from => $admin_name] , $admin, 'Уведомление о заявке', 'Появилась новая заявка на бронь конференц-зала');
            new SendTextMail([$from => $admin_name], $this -> email, 'Заявка на бронь конференц-зала', 'Ваша заявка принята к рассмотрению');
        }
    }
    public function rules(){
        return [
            [['name', 'email', 'phone'], 'required'],
            [['preferences', 'service_id'], 'safe'],
        ];
    }
    
}