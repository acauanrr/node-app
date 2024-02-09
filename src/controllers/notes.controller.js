const notesCtrl = {};

const Note = require("../models/Note");

notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

notesCtrl.createNewNode = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  newNote.user = req.user.id; // guardando dados do usuario em cada nota
  await newNote.save();
  req.flash("success_msg", "Note Added Successfully");
  res.redirect("/notes");
};

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id }).sort({
    createdAt: "desc",
  }); //Mongodb
  // console.log(req.user);
  res.render("notes/all-notes", { notes, nameUser: req.user.name });
};

notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/notes");
  }
  res.render("notes/edit-note", { note });
};

notesCtrl.updateNote = async (req, res) => {
  // console.log(req.body);
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Note Updated Successfully");
  res.redirect("/notes");
};

notesCtrl.deleteNote = async (req, res) => {
  // res.send('Delete note');
  await Note.findByIdAndDelete(req.params.id); //Mongodb
  req.flash("success_msg", "Note Deleted Successfully");
  res.redirect("/notes");
};

module.exports = notesCtrl;
