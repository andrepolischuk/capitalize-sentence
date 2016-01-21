import test from 'ava';
import capitalize from './index.es5';

const origin = `
  A sentence can include words grouped meaningfully to express a statement,
  question, exclamation, request, command or suggestion. С точки зрения
  пунктуации (§12.2), предложение как законченная единица речи оформляется
  в конце точкой, восклицательным или вопросительным знаками — или многоточием.
`.trim();

const lower = `
  a sentence can include words grouped meaningfully to express a statement,
  question, exclamation, request, command or suggestion. с точки зрения
  пунктуации (§12.2), предложение как законченная единица речи оформляется
  в конце точкой, восклицательным или вопросительным знаками — или многоточием.
`.trim();

test(t => {
  t.is(capitalize(origin), origin);
  t.is(capitalize(lower), origin);
});
