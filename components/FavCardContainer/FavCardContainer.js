"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import classes from "./FavCardContainer.module.css";
import FavCard from "../FavCard/FavCard";

export default function FavCardContainer() {

    const { value, setValue } = useLocalStorage("favs", []);

    function removeFav(id) {
        setValue(prev => prev.filter(item => item !== id));
    }

    return(
        <div className={ classes["fav-card-container"] }>
            { 
                value.length ? (
                    value.map(item => (
                        <FavCard key={ item } id={ item } onRemove={ removeFav } />
                    )) 
                ) : (
                    <div className={ classes["not-found"] }>
                        Hiç Favori Kedin Yok
                    </div>
                )
            }
        </div>
    )
}