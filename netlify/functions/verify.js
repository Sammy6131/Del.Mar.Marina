exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const inputPassword = body.password;

  const correctPassword = process.env.PASSWORD;

  if (inputPassword === correctPassword) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ success: false }),
  };
};
