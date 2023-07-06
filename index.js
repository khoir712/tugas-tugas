const WineController = require("./controllers/WineController");

const command = process.argv[2];

switch (command) {
  case "help":
    console.log("Available commands:");
    console.log("node index.js help");
    console.log("node index.js wines");
    console.log("node index.js add <wine_name>");
    console.log("node index.js sell <wine_id>");
    console.log("node index.js rename <wine_id> <wine_name>");
    console.log("node index.js findById <wine_id>");
    break;
  case "wines":
    WineController.showWines();
    break;
  case "add":
    const wineName = process.argv[3];
    WineController.addWine(wineName);
    break;
  case "sell":
    const wineId = process.argv[3];
    WineController.sellWine(wineId);
    break;
  case "rename":
    const wineIdToUpdate = process.argv[3];
    const newWineName = process.argv[4];
    WineController.renameWine(wineIdToUpdate, newWineName);
    break;
  case "findById":
    const wineIdToFind = process.argv[3];
    WineController.findWineById(wineIdToFind);
    break;
  case "group":
    const wineType = process.argv[3];
    WineController.groupWinesByType(wineType);
    break;
  case "age":
    const sortOrder = process.argv[3];
    WineController.sortWinesByAge(sortOrder);
    break;
  default:
    console.log(
      'Command not found. Use "node index.js help" to see available commands.'
    );
    break;
}
