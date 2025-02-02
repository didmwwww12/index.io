<?php
    //Подключение библиотеки php
    use PHPMailer/PHPMailer/PHPMailer;
    use PHPMailer/PHPMailer/Exception;
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    //Базовая настройка файла
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';

    //Включаем теги внутри php
    $mail->IsHTML(true);

    //Отправка письма а именно: от кого,кому и тема письма
    $mail->setFrom('maxgamer20777@gmail.com','Макс Ваковский');
    $mail->addAddres('max2gamer2007@gmail.com');
    $mail->Subject = 'Новый заказ на пиньяту';

    //Тело письма
    $body = '<h1>Добрый день от сайта.Новый заказ на пиньяту получен. Ждем действий с вашей стороны. Вот информация:</h1>';

    //Имя и фамилия
    if(trim(!empty($_POST['firstName']))){
        $body .= '<p><strong>Имя:</strong> '.$_POST['firstName']. '</p>';
    }
    if(trim(!empty($_POST['lastName']))){
        $body .= '<p><strong>Фамилия:</strong> '.$_POST['lastName']. '</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body .= '<p><strong>Телефон:</strong> '.$_POST['phone']. '</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body .= '<p><strong>Почта заказчика:</strong> '.$_POST['email']. '</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body .= '<p><strong>Пиньята,которую выбрал заказчик звучит так:</strong> '.$_POST['message']. '</p>';
    }
    $mail->Body = $body;

    //Отправка формы
    if(!$mail->send()){
        $message = 'Ошибка';
    } else {
          $message = 'Данные отправлены!';
    }
    $response = ['message' => $message];
    header('Contend-type:application/json');
?>