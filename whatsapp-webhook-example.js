/**
 * Пример простого webhook-а для отправки уведомлений в WhatsApp через Cloud API.
 *
 * Что делает:
 * 1. Принимает POST-запрос с данными формы (имя, телефон, email, сообщение)
 * 2. Отправляет уведомление менеджеру в WhatsApp (номер менеджера задаётся в переменных окружения)
 *
 * Требования:
 * - Node.js 18+ (или Node 16 + пакет node-fetch)
 * - Установить зависимости: express, node-fetch (или использовать fetch в Node 18)
 * - Настроить переменные окружения:
 *   WHATSAPP_ACCESS_TOKEN         - постоянный access token из Meta
 *   WHATSAPP_PHONE_NUMBER_ID      - идентификатор WhatsApp Business номера
 *   WHATSAPP_MANAGER_PHONE        - номер менеджера в международном формате (например, 79001234567)
 *
 * Запуск:
 *   npm install express node-fetch
 *   node whatsapp-webhook-example.js
 *
 * Деплой:
 *   - Vercel / Netlify Functions
 *   - Render / Railway / любой VPS
 */

import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/whatsapp-webhook', async (req, res) => {
    const { name, phone, email, message } = req.body || {};

    if (!name || !phone || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const payload = {
        messaging_product: 'whatsapp',
        to: process.env.WHATSAPP_MANAGER_PHONE,
        type: 'template',
        template: {
            name: 'new_lead_notification', // должен быть заранее одобрен в Meta
            language: { code: 'ru' },
            components: [
                {
                    type: 'body',
                    parameters: [
                        { type: 'text', text: name },
                        { type: 'text', text: phone },
                        { type: 'text', text: email },
                        { type: 'text', text: message || '-' }
                    ]
                }
            ]
        }
    };

    try {
        const response = await fetch(`https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('WhatsApp API error:', errorText);
            return res.status(500).json({ error: 'Failed to send WhatsApp notification' });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Webhook error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`WhatsApp webhook listening on port ${PORT}`);
});

