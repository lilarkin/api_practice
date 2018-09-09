module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        // createt the note here.  Post executes the callback
        /*
        console.log(req.body)
        res.send('Hello')
        */
        // the json is grabbing the values of the keys from postman
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, (err,result) => {
            if (err) {
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};