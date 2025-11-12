import classes from "./FavCard.module.css";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

export default function FavCard({ id, onRemove }) {
    return (
        <div className={ classes["fav-card"] }>
            <Image src={ `https://cdn2.thecatapi.com/images/${id}.jpg` } alt="keddy" width={ 300 } height={ 300 } />
            <MdDelete className={ classes.remove } onClick={ () => onRemove(id) } />
        </div>
    );
}