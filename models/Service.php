<?php
namespace app\models;

use yii\db\ActiveRecord;

class Service extends ActiveRecord{
    public static function tableName() {
        return "service";
    }
    public function getServiceList(){
        $services = Service::find() -> all();
        $list = [];
        foreach($services as $service){
            $list[$service -> id] = $service -> service;
        }
        return $list;
    }
    
}