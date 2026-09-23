const {app} = require("./app");

const PORT = 3300;

app.listen(PORT, () => {
    console.log(`Báttya figyelj mert lehallgatom a ${PORT} portot`)
})