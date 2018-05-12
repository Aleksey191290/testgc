<?php
namespace app\models\mail;
use app\models\mail\Mail;

class SendHtmlMail extends Mail{
    public function __construct($from, $to, $subject, $message){
        parent::__construct($from, $to, $subject, $message);
        $this -> initSendMail();
    }
    public function send(){
        \yii::$app -> mailer -> compose() 
        -> setFrom($this -> from)
        -> setTo($this -> to)
        -> setSubject($this -> subject)
        -> setHtmlBody($this -> message)
        -> send();
    }
}