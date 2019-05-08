const express = require('express');
const app = express();
const mongoose = require('mongoose');
var convert = require('xml-js');
var parser = require('xml2json');
var fs = require('fs');


mongoose.connect('mongodb+srv://utsav776:1234@415clusture-hn15o.mongodb.net/test?retryWrites=true', 
{
    useNewUrlParser: true
}, function(error){
    if(error){
        console.log(error);
    }else {
        console.log('Connected to Database');
    }
}
);

var ticketSchema = new mongoose.Schema({
        id: Number,
        created_at: Date,
        updated_at: Date,
        type: String,
        subject: String,
        description: String,
        priority: String,
        status: String,
        recipient: String,
        submitter: String,
        assignee_id: Number,
        follower_ids: [String, String],
        tags: [String, String]
    });

var ticketMode = mongoose.model("Ticket", ticketSchema);
app.use(express.json());
const port = 5000;
const tickets  = [
    {
        "id": 1,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
       },
       {
        "id": 2,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
       },
       {
        "id": 3,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
       },
       {
        "id": 4,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
       },
       {
        "id": 5,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
       },
       {
        "id": 6,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
       },
       {
        "id": 7,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
       },
       {
        "id": 8,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
       },
       {
        "id": 9,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
       },
       {
        "id": 10,
        "created_at": "2015-07-20T22:55:29Z",
        "updated_at": "2016-05-05T10:38:52Z",
        "type": "incident",
        "subject": "MFP not working right",
        "description": "PC Load Letter? What does that even mean???",
        "priority": "med",
        "status": "open",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton@selu.edu",
        "assignee_id": 235323,
        "follower_ids": [235323, 234],
        "tags": ["enterprise", "printers"],
       },
]

app.get('/', (req, res) => res.send('Welcome to ticket Application!'));
//get the ticket information from DB.
app.get('/rest/list/', (req, res) => {

    //res.send(tickets);
    ticketMode.find({}, function(error, data){ //Getting the documents from the collection, and returning it into the variable data, which we send over while rendering the list page.
        if(error){
            console.log("Problem finding data");
            console.log("error")
        }else{
            res.send(data);
        }
        
    });

});
//get specific ticket id from database
app.get('/rest/list/:id', function(req, res) {
    ticketMode.findById(req.params.id).then(doc => {
        if(!doc){return req.status(404).end();}
        return res.status(200).json(doc);
    }).catch(err => console.log(err));
});

// get the xml file from JSON 
app.get('/rest/xml/ticket/:id', function(req, res){
    var options = {compact: true, ignoreComment: true, spaces: 4, fullTagEmptyElement: true};
       ticketMode.findById(req.params.id).then(doc => {
        if(!doc){return req.status(404).end();}
        console.log(doc);
        var stringified = JSON.stringify(doc);
        var xml = convert.json2xml(stringified, options);
        console.log(xml);
        return res.status(200).json(xml);
    }).catch(err => console.log(err));
})

// save the xml to JSON to the server
app.post('/rest/xml/ticket/:id', function(req, res){
    fs.readFile( './ticket.xml', function(err, data) {
        var xml = data.toString();
        var json = convert.xml2json(xml.toString(), {compact: true, spaces: 4})
            //makes a web request and matches to the schema provided.
            var tic = new ticketMode(JSON.parse(json));
            // saves the json from xml
            tic.save(function(err, tic){
                res.send(tic);
            });
        console.log(json);
    });
})
// save information in db
app.post('/rest/ticket/', function(req, res){
    var tic = new ticketMode(req.xml);
    tic.save(function(err, tic){
        res.json(tic);
    });
})

//  delete ticket from  db
app.delete('/rest/ticket/:id', function (req, res){
        ticketMode.findByIdAndRemove(req.params.id).exec().then(doc => {
            if(!doc) {return req.status(404).send('The course with the entered ID is not found!'); } 
            return res.status(204).json(doc);
        }).catch(err => console.log(err));
})

    //update the ticket information in db
app.put('/rest/ticket/:id', function(req, res) {
        var conditions = {_id: req.params.id};

        ticketMode.update(conditions, req.body).then(doc => {
            if(!doc) {return req.status(404).send('The course with the entered ID is not found!'); } 
            return res.status(200).json(doc);
        }).catch(err => console.log(err));
})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`));