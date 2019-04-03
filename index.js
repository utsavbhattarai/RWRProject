const express = require('express');
const app = express();
app.use(express.json());
const port = 3000
const tickets  = [
    {   "id": 1,
        "type": "incident",
        
        },
    //    {
    //     "id": 2,
    //     "created_at": "2015-07-20T22:55:29Z",
    //     "updated_at": "2016-05-05T10:38:52Z",
    //     "type": "incident",
    //     "subject": "MFP not working right",
    //     "description": "PC Load Letter? What does that even mean???",
    //     "priority": "med",
    //     "status": "open",
    //     "recipient": "support_example@selu.edu",
    //     "submitter": "Michael_bolton@selu.edu",
    //     "assignee_id": 235323,
    //     "follower_ids": [235323, 234],
    //     "tags": ["enterprise", "printers"],
    //    },
    //    {
    //     "id": 3,
    //     "created_at": "2015-07-20T22:55:29Z",
    //     "updated_at": "2016-05-05T10:38:52Z",
    //     "type": "incident",
    //     "subject": "MFP not working right",
    //     "description": "PC Load Letter? What does that even mean???",
    //     "priority": "med",
    //     "status": "open",
    //     "recipient": "support_example@selu.edu",
    //     "submitter": "Michael_bolton@selu.edu",
    //     "assignee_id": 235323,
    //     "follower_ids": [235323, 234],
    //     "tags": ["enterprise", "printers"],
    //    },
    //    {
    //     "id": 4,
    //     "created_at": "2015-07-20T22:55:29Z",
    //     "updated_at": "2016-05-05T10:38:52Z",
    //     "type": "incident",
    //     "subject": "MFP not working right",
    //     "description": "PC Load Letter? What does that even mean???",
    //     "priority": "med",
    //     "status": "open",
    //     "recipient": "support_example@selu.edu",
    //     "submitter": "Michael_bolton@selu.edu",
    //     "assignee_id": 235323,
    //     "follower_ids": [235323, 234],
    //     "tags": ["enterprise", "printers"],
    //    },
    //    {
    //     "id": 5,
    //     "created_at": "2015-07-20T22:55:29Z",
    //     "updated_at": "2016-05-05T10:38:52Z",
    //     "type": "incident",
    //     "subject": "MFP not working right",
    //     "description": "PC Load Letter? What does that even mean???",
    //     "priority": "med",
    //     "status": "open",
    //     "recipient": "support_example@selu.edu",
    //     "submitter": "Michael_bolton@selu.edu",
    //     "assignee_id": 235323,
    //     "follower_ids": [235323, 234],
    //     "tags": ["enterprise", "printers"],
    //    },
    //    {
    //     "id": 6,
    //     "created_at": "2015-07-20T22:55:29Z",
    //     "updated_at": "2016-05-05T10:38:52Z",
    //     "type": "incident",
    //     "subject": "MFP not working right",
    //     "description": "PC Load Letter? What does that even mean???",
    //     "priority": "med",
    //     "status": "open",
    //     "recipient": "support_example@selu.edu",
    //     "submitter": "Michael_bolton@selu.edu",
    //     "assignee_id": 235323,
    //     "follower_ids": [235323, 234],
    //     "tags": ["enterprise", "printers"],
    //    },
    //    {
    //     "id": 7,
    //     "created_at": "2015-07-20T22:55:29Z",
    //     "updated_at": "2016-05-05T10:38:52Z",
    //     "type": "incident",
    //     "subject": "MFP not working right",
    //     "description": "PC Load Letter? What does that even mean???",
    //     "priority": "med",
    //     "status": "open",
    //     "recipient": "support_example@selu.edu",
    //     "submitter": "Michael_bolton@selu.edu",
    //     "assignee_id": 235323,
    //     "follower_ids": [235323, 234],
    //     "tags": ["enterprise", "printers"],
    //    },
    //    {
    //     "id": 8,
    //     "created_at": "2015-07-20T22:55:29Z",
    //     "updated_at": "2016-05-05T10:38:52Z",
    //     "type": "incident",
    //     "subject": "MFP not working right",
    //     "description": "PC Load Letter? What does that even mean???",
    //     "priority": "med",
    //     "status": "open",
    //     "recipient": "support_example@selu.edu",
    //     "submitter": "Michael_bolton@selu.edu",
    //     "assignee_id": 235323,
    //     "follower_ids": [235323, 234],
    //     "tags": ["enterprise", "printers"],
    //    },
    //    {
    //     "id": 9,
    //     "created_at": "2015-07-20T22:55:29Z",
    //     "updated_at": "2016-05-05T10:38:52Z",
    //     "type": "incident",
    //     "subject": "MFP not working right",
    //     "description": "PC Load Letter? What does that even mean???",
    //     "priority": "med",
    //     "status": "open",
    //     "recipient": "support_example@selu.edu",
    //     "submitter": "Michael_bolton@selu.edu",
    //     "assignee_id": 235323,
    //     "follower_ids": [235323, 234],
    //     "tags": ["enterprise", "printers"],
    //    },
    //    {
    //     "id": 10,
    //     "created_at": "2015-07-20T22:55:29Z",
    //     "updated_at": "2016-05-05T10:38:52Z",
    //     "type": "incident",
    //     "subject": "MFP not working right",
    //     "description": "PC Load Letter? What does that even mean???",
    //     "priority": "med",
    //     "status": "open",
    //     "recipient": "support_example@selu.edu",
    //     "submitter": "Michael_bolton@selu.edu",
    //     "assignee_id": 235323,
    //     "follower_ids": [235323, 234],
    //     "tags": ["enterprise", "printers"],
    //    },

]

app.get('/', (req, res) => res.send('Welcome to ticket Application!'));
app.get('/rest/list/', (req, res) => res.send(tickets));
app.get('/rest/list/:id', (req, res) => {
    const ticket = tickets.find(c => c.id === parseInt(req.params.id))
    if(!ticket) res.status(404).send("The course with the entered ID is not found!")
    res.send(ticket)
    });
app.post('/rest/ticket/', (req, res) => {
    const ticket = {
        id: tickets.length + 1,
        type: req.body.type
    };
    tickets.push(ticket);
    res.send(ticket); 
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));