// GAME TEXT
module.exports = {
  RUS: {
    YOUR_CHOICE: 'Ваш выбор?',
    GAMENAME: 'Игра Быки и Коровы!',
    GAME: 'ИГРА:',
    PLAY_AGAIN: 'СЫГРАТЬ ЕЩЕ РАЗ?',
    STATS: 'СТАТИСТИКА',
    MENU_TEXT: 'БЫКИ и КОРОВЫ: ГЛАВНОЕ МЕНЮ',
    MENU_PLAY: 'ИГРАТЬ',
    MENU_DIFF: 'ИЗМЕНИТЬ СЛОЖНОСТЬ (Стандарт: 4, Текущая: %HARDNESS)',
    MENU_LANG: 'ПЕРЕКЛЮЧИТЬ ЯЗЫК (%CURRENT)',
    MENU_SHOWSTATS: 'ПОСМОТРЕТЬ СТАТИСТИКУ',
    MENU_CLEARSTATS: 'ОЧИСТИТЬ СТАТИСТИКУ',
    MENU_SHOWRULES: 'ПРАВИЛА ИГРЫ',
    EXIT: 'ВЫХОД ИЗ ИГРЫ',
    DIFFICULTY_TEXT: 'НАСТРОЙКА СЛОЖНОСТИ ИГРЫ',
    ACCEPT: 'ПРИМЕНИТЬ',
    SPACE: 'ПРОБЕЛ',
    PRESSSPACE: 'Нажмите ПРОБЕЛ для продолжения \n',
    RULES: 'ПРАВИЛА:',
    RULE1: 'Необходимо угадать загаданное компьютером число (цифры не повторяются).',
    RULE2: 'Бык - точное совпадение цифры и её позиции,',
    RULE3: 'Корова - присутствие цифры, но несовпадение её позиции,',
    DEBUG_TEXT: 'ЗАГАДАН КОД: [%CODE]',
    SOLVE_TEXT: 'Угадайте %X-значное число!',
    SOLVE_ERROR: 'Ошибка ввода! Введите %X-значное число без повторов!',
    SOLVE_TURN: '[%INPUT] Быков - %BULLS, коров - %COWS, попробуйте еще раз!',
    SURRENDER: '[ход %TURNS] Игрок сдался! Загадано было число %SECRET.',
    WIN_TEXT1: 'Игрок угадал! [%SECRET].',
    WIN_TEXT2: 'Победа на %TURNS ходу! Игра закончена!',
    STATS_IS_CLEAR: 'СТАТИСТИКА ОЧИЩЕНА',
    NO_STATS: 'Нет доступной статистики для отображения. Сыграйте по меньшей мере одну игру.',
    STATS_SUMMARY: 'ИГР ВСЕГО: %ALL, ПОБЕД: %WINS (%WINRATE), ПОРАЖЕНИЙ: %LOSES',
    WIN: 'ПОБЕДА',
    LOSE: 'ПОРАЖЕНИЕ',
    STAT_TEXT: 'Загадано: [%SECRET], число попыток: %TURNS, сложность: %HARDNESS'
  },
  ENG: {
    YOUR_CHOICE: 'Your choice?',
    GAMENAME: 'Bulls and Cows game!',
    GAME: 'GAME:',
    PLAY_AGAIN: 'DO YOU WANT PLAY AGAIN?',
    STATS: 'GAME STATISTICS',
    MENU_TEXT: 'BULLS & COWS: MAIN MENU',
    MENU_PLAY: 'PLAY',
    MENU_DIFF: 'SETUP DIFFICULTY (Default: 4, Current: %HARDNESS)',
    MENU_LANG: 'CHANGE LANGUAGE (%CURRENT)',
    MENU_SHOWSTATS: 'SHOW STATISTICS',
    MENU_CLEARSTATS: 'CLEAR STATISTICS',
    MENU_SHOWRULES: 'GAME RULES',
    EXIT: 'EXIT',
    DIFFICULTY_TEXT: 'GAME DIFFICULTY SETUP',
    ACCEPT: 'ACCEPT',
    SPACE: 'SPACE',
    PRESSSPACE: 'Press SPACE to continue \n',
    RULES: 'RULES:',
    RULE1: 'Guess the number that randomed by computer (all digits is different).',
    RULE2: 'Bull - match digit is in right position,',
    RULE3: 'Cow - match digit is in different position,',
    DEBUG_TEXT: 'GUESSED CODE: [%CODE]',
    SOLVE_TEXT: 'Guess %X-digits number!',
    SOLVE_ERROR: 'Input error! Input %X-digits number where all digits is different!',
    SOLVE_TURN: '[%INPUT] Bulls - %BULLS, cows - %COWS, try again!',
    SURRENDER: '[turn %TURNS] Player gave up! Guessed number was %SECRET.',
    WIN_TEXT1: 'Player is right! [%SECRET].',
    WIN_TEXT2: 'Win on %TURNS turn! Game is over!',
    STATS_IS_CLEAR: 'STATISTICS CLEARED',
    NO_STATS: 'There are no statistics available to display. Play at least one game.',
    STATS_SUMMARY: 'GAMES TOTAL: %ALL, WINS: %WINS (%WINRATE), LOSES: %LOSES',
    WIN: 'WIN',
    LOSE: 'LOSE',
    STAT_TEXT: 'Guessed: [%SECRET], game turns: %TURNS, difficulty: %HARDNESS'
  }
}