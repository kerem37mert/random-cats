'use client'

import classes from "./RandomCat.module.css";
import useFetch from "@/hooks/useFetch";
import useLocalStorage from "@/hooks/useLocalStorage";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

export default function RandomCat() {

    const { value, setValue } = useLocalStorage("favs", []);

    function addFav(item) {
        setValue([...value, item]);
    }

    function removeFav() {
        setValue(prev => prev.slice(0, -1));
    }
    
    const { data, error, isLoading, fetchData } = useFetch();

    if(isLoading) {
       return (
         <div className={ classes.loading }>Yükleniyor</div>
       );
    }

    if(error) {
        return (
            <div>Bir hata oluştu: { error }</div>
        );
    }

    return (
        <div className={ classes["random-cat"] }>
            {
                data && (
                     <Image src={ data[0].url } alt="keddy" width={ 400 } height={ 400 } />
                )
            }
           <div className={ classes.footer }>
                {
                    value.includes(data[0].id) ? (
                        <FaHeart className={ classes["remove-fav"] } onClick={ removeFav } />
                    ) : (
                        <FaRegHeart className={ classes["add-fav"] } onClick={ () => addFav(data[0].id) } />
                    )
                }
                <button className={ classes["generate-btn"] } onClick={ fetchData }>Sonraki Kedi</button>
           </div> 
        </div>
    );
}