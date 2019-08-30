const news = [
  {
    tag: 'CSGO',
    title: 'Объявлены обладатели инвайтов на квалификации к DH Masters Malmö 2019',
    text: 'DreamHack представила список приглашенных команд на закрытый этап квалификации для европейского, североамериканского и тихоокеанского регионов к следующему Masters-турниру.',
    xp: 440,
    comments: 2,
    bookmarked: 7,
    viewed: 740,
    created: (() => {
      const newDate = new Date();
      return newDate.setHours(newDate.getHours() - 1);
    })(),
    image: '',
    author: '',
  },
  {
    tag: 'Dota 2',
    title: 'Три игрока ушли из Mineski',
    text: 'Nikolay “Nikobaby” Nikolov сегодня стал свободным агентом: о своем уходе из Весь мир, World Mineski болгарский игрок сообщил в твиттере. По словам комментатора студии Maincast Украина, Ukraine, UA Виталия “v1lat” Волочая, Nikobaby открыт для предложений из других регионов.',
    xp: 440,
    comments: 0,
    bookmarked: 1,
    viewed: 2400,
    created: (() => {
      const newDate = new Date();
      return newDate.setHours(newDate.getHours() - 3);
    })(),
    image: '',
    author: '',
  },
  {
    tag: 'CSGO',
    title: 'DreamEaters vs NRG. Прогноз и ставка Lord Mantis',
    text: 'Стартовый поединок между DreamEaters и NRG многими рассматривается как самый предсказуемый в первом игровом дне Berlin Major. Сыграет команда — молодой СНГ-коллектив, который имеет 15-й посев и пробился на мейджор через Play-in, заняв третье место на СНГ-миноре.',
    xp: 440,
    comments: 5,
    bookmarked: 1,
    viewed: 3700,
    created: (() => {
      const newDate = new Date();
      return newDate.setHours(newDate.getHours() - 3);
    })(),
    image: '',
    author: {
      name: 'Lord Mantis',
      avatar: '',
    },
  },
  {
    tag: 'Dota 2',
    title: 'Прогноз на матч forZe VS DreamEaters',
    text: 'На данный момент forZe располагаются на 21 месте в списке лучших CS:GO-составов по мнению HLTV. Игроки имеют винрейт в 75% за последние 3 месяца, что говорит об их неплохой игровой форме и готовности побеждать в предстоящем матче.',
    xp: 440,
    comments: 2,
    bookmarked: 0,
    viewed: 740,
    created: (() => {
      const newDate = new Date();
      return newDate.setHours(newDate.getHours());
    })(),
    image: '',
    author: '',
  },
];

export default news;
