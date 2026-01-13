'use server'

import nodemailer from 'nodemailer'

interface EmailData {
    name: string
    email: string
    message: string
}

export async function sendEmail(data: EmailData) {
    const { name, email, message } = data

    if (!name || !email || !message) {
        return { success: false, message: 'Faltan campos requeridos' }
    }

    // Verificar variables de entorno
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error('Faltan variables de entorno SMTP');
        // En desarrollo, podríamos simular éxito para probar la UI
        if (process.env.NODE_ENV === 'development') {
            console.log('Simulando envío de email (Faltan credenciales SMTP)');
            await new Promise(resolve => setTimeout(resolve, 1000));
            return { success: true, message: 'Simulated success' };
        }
        return { success: false, message: 'Error de configuración del servidor' };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: `"Kansō Web" <${process.env.SMTP_USER}>`,
            to: 'hola@kanso.consulting',
            replyTo: email,
            subject: `Nuevo mensaje de contacto: ${name}`,
            text: `Has recibido un nuevo mensaje desde la web.\n\nNombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr/>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        })
        return { success: true }
    } catch (error) {
        console.error('Error enviando email:', error)
        return { success: false, message: 'Error al enviar el email' }
    }
}
