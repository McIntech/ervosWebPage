<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $from_email = $_POST['email']; // Email del remitente
    $message = $_POST['message']; // Mensaje del remitente

    $to = 'citas@ervos.com.mx'; // Tu dirección de correo electrónico
    $subject = 'Nuevo mensaje desde tu sitio web'; // Asunto del correo

    $headers = "From: " . $from_email . "\r\n";
    $headers .= "Reply-To: " . $from_email . "\r\n";
    $headers .= "Content-type: text/html;charset=UTF-8" . "\r\n";

    // Formatear el mensaje
    $body = "<p>Nuevo mensaje desde el sitio web:</p>";
    $body .= "<p><strong>Email:</strong> {$from_email}</p>";
    $body .= "<p><strong>Mensaje:</strong><br>" . nl2br($message) . "</p>";

    // Enviar correo
    if (mail($to, $subject, $body, $headers)) {
        // Si quieres mostrar un mensaje y después redirigir, tendrás que usar JavaScript para la redirección.
        echo "<script>alert('Mensaje enviado exitosamente.'); window.location.href='/';</script>";
    } else {
        echo "<script>alert('No se pudo enviar el mensaje.'); window.location.href='/';</script>";
    }
    exit; // Asegúrate de que no se ejecute ningún script adicional.
}

?>