exports.run = (client, message, args) => {
  message.reply(
  "Ну вот вы и добавили бота. Что теперь?\n"+
  "Ну, а теперь настраивайте создание каналов (VoiceChannelsGuide) и автовыдачу ролей если надо (GameRolesGuide)\n"+
  "После этого вы можете указать канал для логов. Где бот будет писать кто там каналы создавал и т.т. с помощью команды `ChangeLogChannel`\n"+
  "Если вдруг ваш сервер кто-то бустит, вы можете сменить битрейт создаваемый каналов с помощью команды `ChangeBitrate`\n"+
  "Если команды не обязательно писать с такими же пробелами как написано в `help`. Можно написать хоть '!-hElP', команда всё равно сработает!\n\n"+
  "Также что такое `index` или как же удалять white channels/game roles. Это номер WC/GR в списке. Но тут всё считается не с 1, а с 0.\n"+
  "Пример: 'White channels: Main, Games, AFK'. Нам вот не понравился канал 'Main'. Пишем команду '!-removeWC 0'. Результат: 'White channels: Games, AFK'\n"+
  "Как узнать ID чего-то? Включить режим разработчика в discord! Дальше ПКМ по тому что вам нужно и дальше сами поймёте.");
}