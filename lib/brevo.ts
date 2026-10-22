const BREVO_SEND_URL = 'https://api.brevo.com/v3/smtp/email';

export type TransactionalEmail = {
  senderName: string;
  senderEmail: string;
  toEmail: string;
  replyToEmail: string;
  subject: string;
  htmlContent: string;
  textContent: string;
};

type BrevoError = {
  code?: string;
};

export async function sendTransactionalEmail(message: TransactionalEmail): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  if (!apiKey) {
    throw new Error('Missing environment variable: BREVO_API_KEY');
  }

  const response = await fetch(BREVO_SEND_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: { name: message.senderName, email: message.senderEmail },
      to: [{ email: message.toEmail }],
      replyTo: { email: message.replyToEmail },
      subject: message.subject,
      htmlContent: message.htmlContent,
      textContent: message.textContent,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    let code = 'unknown';
    try {
      const data = (await response.json()) as BrevoError;
      if (typeof data.code === 'string') {
        code = data.code;
      }
    } catch {
      code = 'unreadable';
    }
    throw new Error(`Brevo rejected the request (status ${response.status}, code ${code})`);
  }
}
