//con export exportamos el elemento de forma "nombrada"
//es decir lo exportamos con su nombre
export const Note = ({ title, body }) => {
    //console.log(note);
    return (
        <li>
            <p>{title}</p>
            <small>{body}</small>
        </li>
    );
};