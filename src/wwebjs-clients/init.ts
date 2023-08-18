import wwebjs from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';


export const initClients: (number: number) => { client: wwebjs.Client; isRunning: boolean }[] = (
  number: number
) => {
  const clients: { client: wwebjs.Client; isRunning: boolean }[] = [];
  for (let i = 0; i < number; i++) {
    clients.push({
      client: new wwebjs.Client({
        authStrategy: new wwebjs.LocalAuth({ clientId: 'client-' + i }),
        puppeteer: {
          args: ['--no-sandbox'],
        },
      }),
      isRunning: false,
    });
  }
  // console.log('clients', clients)
  clients.forEach((client, i) => {
    client.client.on('qr', qr => {
      console.log(`client ${i}`);
      qrcode.generate(qr, { small: true });
      console.log(
        '============================================================'
      );
    });

    client.client.on('ready', () => {
      console.log(`client ${i} ready`);
    });
    client.client.initialize();
  });
  return clients;
};
