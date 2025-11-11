import classes from "./FavCard.module.css";
import Image from "next/image";

export default function FavCard({ id }) {
    return (
        <div className={ classes["fav-card"] }>
            <Image src={ `https://cdn2.thecatapi.com/images/${id}.jpg` } alt="keddy" width={ 300 } height={ 300 } />
        </div>
    );
}