const handler = async (m, {conn}) => {
  m.reply(global.preciolatam);
};
handler.command = /^(preciolatam)$/i;
export default handler;

global.preciolatam = `
PLATAFORMAS DISPONIBLES
XNXX GOLD
`;
