//con export exportamos el elemento de forma "nombrada"
//es decir lo exportamos con su nombre
export const Note = ({ id, content, date }) => {
    //console.log(note);
    return (<li><p><small><time>{date}</time></small></p><p>{id}{" - "}{content}</p></li>)
}

// con default lo exportamos pero sin nombre
//donde lo importamos podemos darle el nombre que queramos
export default Note;