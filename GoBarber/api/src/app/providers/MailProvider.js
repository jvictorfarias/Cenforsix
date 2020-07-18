import nodemailer from 'nodemailer';
import { resolve } from 'path';
import ejs from 'ejs';
import { promisify } from 'util';
import mailConfig from '../../config/mail';

class MailProvider {
  constructor() {
    this.transporter = nodemailer.createTransport(mailConfig);
  }

  async sendMail(to, subject, templateData) {
    const templatePath = resolve(
      __dirname,
      '..',
      'views',
      'templates',
      'mail',
      'mail.ejs',
    );

    await this.transporter.sendMail({
      from: {
        name: 'Joao Victor Farias',
        address: 'equipegobarber@gmail.com',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await promisify(ejs.renderFile)(templatePath, templateData),
    });
  }
}

export default new MailProvider();
