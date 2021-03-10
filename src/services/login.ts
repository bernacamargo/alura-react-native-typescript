async function efetuarLogin(usuario: string, senha: string) {
  const cabecalhoHTTP = {
    method: 'POST',
    body: JSON.stringify({
      userName: usuario,
      password: senha,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
  const response = await fetch(
    'http://10.0.2.2:3030/users/login',
    cabecalhoHTTP,
  );
  console.log(response.status, response.statusText);
  if (response.ok) {
    console.log('DEU BOM!!!');
  } else {
    throw new Error('Não foi possível realizar o login');
  }
  const data = await response.json();

  console.log(data);
}

export default efetuarLogin;
