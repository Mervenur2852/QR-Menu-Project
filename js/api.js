const fetchMenu = async () => {
  // api istek at
  const res = await fetch("../db.json");
  //api den gelen verileri js nesnesine çevirir
  const data = await res.json();

  // datayı return et

  return data.menu;
};

export default fetchMenu;
