import test from 'ava';
import capitalizeSentence from './index';

const origin = 'A sentence can include 12.1 words grouped meaningfully to express a statement, question, exclamation, request, command or suggestion. С точки зрения пунктуации, предложение как законченная единица речи оформляется в конце точкой, восклицательным или вопросительным знаками — или многоточием.';

const lower = 'a sentence can include 12.1 words grouped meaningfully to express a statement, question, exclamation, request, command or suggestion. С точки зрения пунктуации, предложение как законченная единица речи оформляется в конце точкой, восклицательным или вопросительным знаками — или многоточием.';

const upper = 'A SENTENCE CAN INCLUDE 12.1 WORDS GROUPED MEANINGFULLY TO EXPRESS A STATEMENT, QUESTION, EXCLAMATION, REQUEST, COMMAND OR SUGGESTION. С ТОЧКИ ЗРЕНИЯ ПУНКТУАЦИИ, ПРЕДЛОЖЕНИЕ КАК ЗАКОНЧЕННАЯ ЕДИНИЦА РЕЧИ ОФОРМЛЯЕТСЯ В КОНЦЕ ТОЧКОЙ, ВОСКЛИЦАТЕЛЬНЫМ ИЛИ ВОПРОСИТЕЛЬНЫМ ЗНАКАМИ — ИЛИ МНОГОТОЧИЕМ.';

const mixed = 'a senTENCE Can include 12.1 words grouPED MEAningfully to expreSS A Statement, questiON, EXCLamation, reQuest, command or suggesTION. С тоЧКИ ЗРения пунктуаЦии, ПРЕдложениЕ как законченная единицА РЕЧи офорМЛЯЕТСЯ В КОНЦЕ ТОЧКОЙ, ВОСКЛИЦАТельным иЛи вопросительнЫМ ЗНАКами — или многоточием.';

test('should capitalize each sentence', t => {
  t.plan(4);
  t.true(capitalizeSentence(origin) === origin);
  t.true(capitalizeSentence(lower) === origin);
  t.true(capitalizeSentence(upper) === origin);
  t.true(capitalizeSentence(mixed) === origin);
});
