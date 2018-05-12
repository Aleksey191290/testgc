<?php
namespace app\controllers;
use \yii;
use yii\base\Controller;
use app\models\Orders;
use app\models\Service;

class MainController extends Controller{
   public function actionIndex(){ 
       return $this ->render('index');
   }
   public function actionAbout(){
       return $this -> render('about');
   }
   public function actionNumbers(){
       return $this -> render('numbers');
   }
   public function actionActions(){
       return $this -> render('actions');
   }
   public function actionContacts(){
       return $this -> render('contacts');
   }
   public function actionOther(){
       return $this -> render('other');
   }
   public function actionConferenceZal(){
       $orders = new Orders();
       $service = new Service();
       $service_list = $service -> getServiceList();
       if($orders -> load(yii::$app -> request -> post()) && $orders -> validate()){
            $orders -> saveOrderConferenceZal();
       }
       return $this -> render("conference-zal", ["orders" => $orders, "service" => $service_list]);
   }
}
