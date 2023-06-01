const yargs = require("yargs");

const { connection, client } = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie, updateAll, findMovie, findOneMovie } = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    if (yargsObj.add) {
        await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor});
        console.log("successfully added new document to db")
    } else if (yargsObj.list){
        await listMovies(collection)
    } else if (yargsObj.update) {
        await updateMovie(collection, yargsObj);
    } else if (yargsObj.delete) {
        await deleteMovie(collection, {title: yargsObj.title, actor: yargsObj.actor});
    } else if (yargsObj.updateall) {
        await updateAll(collection, yargsObj);
    } else if (yargsObj.findtitle) {
        await findMovie(collection, {title: yargsObj.title});
    } else if (yargsObj.findactor) {
        await findMovie(collection, {actor: yargsObj.actor});
    } else if (yargsObj.findonetitle) {
        await findOneMovie(collection, {title: yargsObj.title});
    } else if (yargsObj.findoneactor) {
        await findOneMovie(collection, {actor: yargsObj.actor});
    } else {
        console.log("Incorrect Command")
    }
    await client.close();
};

app(yargs.argv);

// node src/app.js --add --title="this" --actor="that"
// node src/app.js --delete --actor="Paul"
// node src/app.js --update --title=null --newtitle="" --newactor="Dave"
// node src/app.js --updateall --title="whatever" --newtitle="test" --newactor="test2" 
// node src/app.js --findtitle --title="Spiderman" 
// node src/app.js --findactor --actor="that" 
// node src/app.js --findonetitle --title="this" 
// node src/app.js --findoneactor --actor="that" 