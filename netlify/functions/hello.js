exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hola JAMstack, somos el grupo nro 1" }),
  };
};
