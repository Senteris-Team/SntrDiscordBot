exports.run = (client, message, args) => {
  message.reply(
  "Game roles - игровые роли. На самом деле это могут быть и не игровые роли. Ну да лана!\n"+
  "Это роли, которые выдаются автоматически с помощью реакций на сообшение.\n"+
  "Всё что вам надо - создать роли, добавить эмоджи с их названиями и написать сообщение! Ну ещё настроить всё там да..\n"+
  "Отправьте сообщение в чат, где желательно никто не может писать. После этого укажите его id с помощью команды `ChangeRoleMessage`\n"+
  "Ну а также укажите id канала, где было написано это сообщение с помощью команды `ChangeRoleChannel`\n"+
  "И укажите ещё id 'game roles' с помощью команд `AddGameRole` или `ChangeGameRoles`\n"+
  "Ну собсна и всё. Можете добавить реакции первым, чтобы другим не нужно было их искать!\n"+
  "Также проверьте что там выдаст команда `showsettings` ! Если имя у какой-то роли 'unknown' - вы где-то накасячили. Ну или кидайте issue на github, если вы уверены что у вас прямые руки.");
}