const imagemDeLike = (curtiu: boolean) => {
  if (!curtiu) return require('../../res/img/s2.png');
  else return require('../../res/img/s2-checked.png');
};

const curtirFoto = (curtiu: boolean, likes: number): any[] => {
  let newLikes = likes;

  curtiu ? newLikes-- : newLikes++;

  return [!curtiu, newLikes];
};

export {imagemDeLike, curtirFoto};
