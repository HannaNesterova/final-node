
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function MyResolutions({text, editText, deleteText}){
    return(
        <div className={'users_text'}>
            <p>{text}</p>
            <FaEdit onClick={editText} className="button_edit"/>
            <MdDelete onClick={deleteText} className="button_edit"/>
        </div>
    )
}

export default MyResolutions;