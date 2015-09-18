import test from 'ava';
import capitalizeSentence from './index';

const origin = 'A sentence can include words grouped meaningfully to express a statement, question, exclamation, request, command or suggestion. С точки зрения пунктуации (§12.2), предложение как законченная единица речи оформляется в конце точкой, восклицательным или вопросительным знаками — или многоточием.';

const lower = 'a sentence can include words grouped meaningfully to express a statement, question, exclamation, request, command or suggestion. с точки зрения пунктуации (§12.2), предложение как законченная единица речи оформляется в конце точкой, восклицательным или вопросительным знаками — или многоточием.';

test('should capitalize each sentence', t => {
  t.plan(2);
  t.true(capitalizeSentence(origin) === origin);
  t.true(capitalizeSentence(lower) === origin);
});
