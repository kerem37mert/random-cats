import classes from "./Title.module.css";

export default function Title({ text }) {
    return (
        <h1 className={ classes.title }>{ text }</h1>
    );
}