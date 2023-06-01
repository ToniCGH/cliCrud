exports.addMovie = async (collection, movieObj) => {
    try {
        const addEntry = await collection.insertOne(movieObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (collection) => {
    try {
        const movieList = await collection.find().toArray();
        console.log(movieList);
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (collection, yargsObj) => {
    try {
        const updateResult = await collection.updateOne(
            { title: yargsObj.title },
            { $set: { title: yargsObj.newtitle, actor: yargsObj.newactor } }
        );
        console.log(updateResult);
    } catch (error) {
        console.log(error);
    }
    
};

exports.deleteMovie = async (collection, movieObj) => {
    try {
        const deleteResult = await collection.deleteOne(movieObj);
        console.log(deleteResult);
    } catch (error) {
        console.log(error);
    }
};

exports.updateAll = async (collection, yargsObj) => {
    try {
        const updateAllResult = await collection.updateMany(
            { title: yargsObj.title },
            { $set: { title: yargsObj.newtitle, actor: yargsObj.newactor } }
        );
        console.log(updateAllResult);
    } catch (error) {
        console.log(error);
    }
};

exports.findMovie = async (collection, movieObj) => {
    try {
        const findResult = await collection.find(movieObj).toArray();
        console.log(findResult);
    } catch (error) {
        console.log(error);
    }
};
exports.findOneMovie = async (collection, movieObj) => {
    try {
        const findOneResult = await collection.findOne(movieObj);
        console.log(findOneResult);
    } catch (error) {
        console.log(error);
    }
};

