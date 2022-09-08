import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget () {
    return (
        <faCartArrowDown cartContent={21} color="secondary">
        <div>
            <FontAwesomeIcon icon={ faCartArrowDown } />
        </div>
        </faCartArrowDown>
    );
}