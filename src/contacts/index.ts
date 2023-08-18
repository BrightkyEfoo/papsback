import fs from 'fs';

export const getContact: () => string[] = () => {
  let contacts: string[];
  const data = fs
    .readFileSync('./src/contacts/contacts.txt', {
      encoding: 'utf8',
      flag: 'r',
    })
    .toString()
    .split('\n');
  contacts = data.map(el => {
    return el.substring(1) + '@c.us';
  });
  return contacts;
};
