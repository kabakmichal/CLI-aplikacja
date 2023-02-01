const { program } = require("commander");

program
  .option("-a, --action [String]", "choose action")
  .option("-i, --id [String]", "user id")
  .option("-n, --name [String]", "user name")
  .option("-e, --email [String]", "user email")
  .option("-p, --phone [String]", "user phone");

program.parse(process.argv);

const argv = program.opts();

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const invokeAction = ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      listContacts();
      break;
    case "get":
      getContactById(id);
      break;
    case "add":
      addContact(id);
      break;
    case "remove":
      removeContact(name, email, phone);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);