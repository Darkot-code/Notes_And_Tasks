const notesControler = {};

const Note = require('../models/note');

notesControler.getNotes = async (req, res)=> {
    const notes = await Note.find(); 
    res.json(notes);
};

notesControler.createNote = async(req, res)=> {

    const { title, content, date, author } = req.body;

    const newNote = new Note({

        title: title,
        content : content,
        date : date,
        author : author

    });
    await newNote.save();
    res.json({message: 'note saved'}
)};



notesControler.getNote = async(req, res)=> {
    const note = await Note.findById(req.params.id);
    res.json(note)
};

notesControler.updateNote = async (req, res)=> {
    const  {title, content, author} = req.body;
   await Note.findOneAndUpdate({_id: req.params.id}, {
       title,
        content,
        author
    })
    res.json({message: 'note aupdated'}
    )};


// elimina nota por id 
notesControler.deleteNote = async (req, res)=> {
    
     await Note.findOneAndDelete(req.params.id);
    res.json({message: 'delete Notes '})
};


module.exports = notesControler;