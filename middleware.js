// MIDDLEWARE------------------------------
// Application level middleware
module.exports = reqFilter = (req, resp, next) => {
    if (!req.query.age){
        resp.send("Please provide age");
    }
    else if (!req.query.age<18){
        resp.send("Must be above 18 to access");
    }
    else
    {
        next(); //always needed to move to main app
    }
};

// this line imposes the check on the entire application. If you want to implement
// it on a specific page, you can pass reqFilter as a parameter to its function
// app.use(reqFilter);