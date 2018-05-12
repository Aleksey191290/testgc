<?php
namespace app\models\mail;
use \yii\base\Model;

abstract class Mail extends Model{
    protected $from;
    protected $to;
    protected $subject;
    protected $message;
    
    public function __construct($from, $to, $subject, $message){
        $this -> from = $from;
        $this -> to = $to;
        $this -> subject = $subject;
        $this -> message = $message;
    }
    public function initSendMail(){
        $this -> send();
    }
    abstract function send();
}
