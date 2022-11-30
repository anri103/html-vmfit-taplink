<?php

/*
 * Форма обратной связи (https://itchief.ru/lessons/php/feedback-form-for-website)
 * Copyright 2016-2020 Alexander Maltsev
 * Licensed under MIT (https://github.com/itchief/feedback-form/blob/master/LICENSE)
 */

header('Content-Type: application/json');

// обработка только ajax запросов (при других запросах завершаем выполнение скрипта)
if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {
  exit();
}
// обработка данных, посланных только методом POST (при остальных методах завершаем выполнение скрипта)
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
  exit();
}

const
MAX_FILE_SIZE = 524288, // максимальный размер файла 512Кбайт (512*1024=524288)
MAIL_FROM = 'info@vmfit.ru', // от какого email будет отправляться письмо
MAIL_FROM_NAME = 'VMFIT.RU', // от какого имени будет отправляться письмо
MAIL_SUBJECT = 'Сообщение с сайта vmfit.ru', // тема письма
MAIL_ADDRESS = 'vikasfit@yandex.ru', // кому необходимо отправить письмо
CC_MAIL_ADDRESS = 'anri1993@yandex.ru', // кому необходимо отправить копию письма
IS_SENDING_MAIL_VIA_SMTP = true, // выполнять отправку писем через SMTP
// Если IS_SENDING_MAIL_VIA_SMTP установлен равным true
MAIL_SMTP_HOST = 'ssl://smtp.beget.com', // SMTP-хост
MAIL_SMTP_PORT = '465', // SMTP-порт
MAIL_SMTP_USERNAME = 'info@vmfit.ru', // здесь нужно указать email пользователя с которого будет отправлять письмо (SMTP-пользователь)
MAIL_SMTP_PASSWORD = 'ASf235bKJh'; // здесь нужно указать пароль от почты (SMTP-пароль)

// PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once('../phpmailer/src/Exception.php');
require_once('../phpmailer/src/PHPMailer.php');
require_once('../phpmailer/src/SMTP.php');

// открываем сессию
session_start();
// переменная, хранящая основной статус обработки формы
$data['result'] = 'success';

/* 1 ЭТАП - ВАЛИДАЦИЯ ДАННЫХ (ЗНАЧЕНИЙ ПОЛЕЙ ФОРМЫ) */
// name
if (isset($_POST['name'])) {
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING); // защита от XSS
  $nameLength = mb_strlen($name, 'UTF-8');
  if ($nameLength < 2) {
    $data['name'] = 'Текст должен быть не короче 2 симв. Длина текста сейчас: ' . $nameLength . ' симв.';
    $data['result'] = 'error';
  } else if ($nameLength > 30) {
    $data['name'] = 'Длина текста не должна превышать 30 симв. (сейчас ' . $nameLength . ' симв.).';
    $data['result'] = 'error';
  }
} else {
  $data['name'] = 'Заполните это поле.';
  $data['result'] = 'error';
}
// валидация поля phone
if (!empty($_POST['phone'])) {
  $phone = preg_replace('/\D/', '', $_POST['phone']); //получить номер телефона (цифры) из строки
  if (!preg_match('/^(8|7)(\d{10})$/', $phone)) {
    $data['phone'] = 'Поле Телефон содержит не корректный номер!';
    $data['result'] = 'error';
  }
}
// пустое поле от ботов
// если значение не пустое, то значит это спам
if (!empty($_POST['captcha'])) {
    $data['result'] = 'error';
}

// отправка формы (данных на почту)
if ($data['result'] == 'success') {

  //формируем тело письма
  $bodyMail = file_get_contents('email.tpl'); // получаем содержимое email шаблона

  // выполняем замену плейсхолдеров реальными значениями
  $bodyMail = str_replace('%email.title%', MAIL_SUBJECT, $bodyMail);
  $bodyMail = str_replace('%email.nameuser%', isset($name) ? $name : '-', $bodyMail);
  $bodyMail = str_replace('%email.message%', isset($message) ? $message : '-', $bodyMail);
  $bodyMail = str_replace('%email.emailuser%', isset($email) ? $email : '-', $bodyMail);
  $bodyMail = str_replace('%email.date%', date('d.m.Y H:i'), $bodyMail);
  $bodyMail = str_replace('%email.phone%', isset($phone) ? $phone : 'не указан', $bodyMail);

  // отправляем письмо с помощью PHPMailer
  $mail = new PHPMailer;
  $mail->CharSet = 'UTF-8';

  /* Отправка письма по SMTP */
  if (IS_SENDING_MAIL_VIA_SMTP === true) {
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = MAIL_SMTP_HOST;
    $mail->Port = MAIL_SMTP_PORT;
    $mail->Username = MAIL_SMTP_USERNAME;
    $mail->Password = MAIL_SMTP_PASSWORD;
  }

  $mail->Encoding = 'base64';
  $mail->IsHTML(true);
  $mail->setFrom(MAIL_FROM, MAIL_FROM_NAME);
  $mail->Subject = MAIL_SUBJECT;
  $mail->Body = $bodyMail;

  $mail->addAddress(MAIL_ADDRESS);
  $mail->AddCC(CC_MAIL_ADDRESS);

  // отправляем письмо
  if (!$mail->send()) {
    $data['result'] = 'error';
  }
}

// сообщаем результат клиенту
echo json_encode($data);