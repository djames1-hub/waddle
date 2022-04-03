const express = require('express');
const app = express();
const AWS = require('aws-sdk');

//load configurations
AWS.config.loadFromPath('./config.json');

//new DynamoDB client
const client = new AWS.DynamoDB.DocumentClient();
const tableName = 'Users';

// port on which the server listens
const port = 3000;

/**
 * Grabs all items for a speicifc table.
 * Should be rarely used if used at all.
 */
app.get("/rows/all", (req, res) => {
    var params = {
        TableName: tableName
    };
    //client.scan() returns all docs in the table
    client.scan(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var items = [];
            for (var i in data.Items)
                items.push(data.Items[i]);

            res.contentType = 'application/json';
            res.send(items);
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
