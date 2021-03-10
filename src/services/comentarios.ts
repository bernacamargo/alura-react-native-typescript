function criaComentario(comentario: string, userName: string) {
  const newComentario: Comentario = {
    date: new Date().toString(),
    text: comentario,
    userName: userName,
  };

  return newComentario;
}

export default criaComentario;
