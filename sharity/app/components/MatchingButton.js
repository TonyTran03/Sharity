import Link from "next/link";
import "./matching-button.css";


function MatchingButton({link, full, onclick, type, children}) {

    let className = "matching-button" + (full ? " matching-button-full" : "");

    return (

        link ? 
            <Link className={className} href={link}>
                {children}
            </Link>
            :
            <button className={className} type={type} onClick={onclick}>{children}</button>
    );
}

export default MatchingButton;