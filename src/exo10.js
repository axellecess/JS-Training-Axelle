export function i18n(strings, ...vars) {
  // basic localization utility
  // TODO: replace each text fragment with its translation below, do not touch interpolated values
  return strings.reduce(
    (out, str, i) => `${out}${translations[str]}${vars[i] || ""}`,
    ""
  );
}

const translations = {
  "Hello ": "Bonjour ",
  ", you have ": ", vous avez ",
  " new mails.": " nouveaux messages."
};

// Exemple d'utilisation

const name = "Bob",
  nbMails = 3;

console.log(i18n`Hello ${name}, you have ${nbMails} new mails.`);
