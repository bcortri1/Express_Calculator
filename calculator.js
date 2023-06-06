const express = require('express');
const ExpressError = require("./error.js")
const { mean, median, mode } = require("./math.js")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log('App on port 3000');
})



app.get('/mean', function (request, response, next) {
    try {
        if (request.query.nums) {
            const { nums } = request.query
            let numArr = nums.split(',');
            let value = mean(numArr);
            let operation = "mean";

            if (typeof value === String){
                throw new ExpressError(value, 400)
            }
            return response.json({ operation: operation, value: value });
        }
        else {
            throw new ExpressError(`No numbers provided`, 400)
        }
    }
    catch (err) {
        return next(err);
    }
});

app.get('/median', function (request, response, next) {
    try {
        if (request.query.nums) {
            const { nums } = request.query
            let numArr = nums.split(',');
            let value = median(numArr);
            let operation = "median";

            if (typeof value === String){
                throw new ExpressError(value, 400)
            }
            return response.json({ operation: operation, value: value });
        }
        else {
            throw new ExpressError(`No numbers provided`, 400)
        }
    }
    catch (err) {
        return next(err);
    }
});

app.get('/mode', function (request, response, next) {
    try {
        if (request.query.nums) {
            const { nums } = request.query
            let numArr = nums.split(',');
            let value = mode(numArr);
            let operation = "mode";

            if (typeof value === String){
                if( value === "No Mode"){
                    return response.json({ operation: operation, value: value });
                }
                else{
                    throw new ExpressError(value, 400);
                }
            }
            return response.json({ operation: operation, value: value });
        }
        else {
            throw new ExpressError(`No numbers provided`, 400)
        }
    }
    catch (err) {
        return next(err);
    }
});

app.get('/all', function (request, response, next) {
    try {
        if (request.query.nums) {
            const { nums } = request.query
            let value = 0;

            nums.split(',').forEach(val => {
                let num = Number(val)
                if (num != num) {
                    throw new ExpressError(`${val} is not a number`, 400)
                }

                value = value + num
            });
            value = value / nums.split(',').length
            operation = "mean";
            return response.json({ operation: operation, value: value });
        }
        else {
            throw new ExpressError(`No numbers provided`, 400)
        }
    }
    catch (err) {
        return next(err);
    }
});

app.use(function (err, req, res, next) {

    let status = err.status || 500;
    let message = err.message;


    return res.status(status).json({
        error: { message, status }
    });
});