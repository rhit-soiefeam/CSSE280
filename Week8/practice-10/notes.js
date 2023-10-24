const getNotes = function() {
    return 'Your notes ..'
}
const duplicateNotes = notes.filter(function(note){
    return note.title ===title// quality operator - zero items if no duplicates
})
if (duplicateNotes.length === 0) {
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
console.log('New note added');
}
else {
    console.log('Title is taken')
}

module.exports = getNotes;