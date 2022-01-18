import styles from "./Header.module.css"
import  Image  from "next/image"
import { CartIcon } from "../../Icons/Icone";
import Link from "next/link";

import useProdutosData from "../../../context/useProduto";


function Header(props) {
    
    const {quantidade} = useProdutosData()

    return (  
     
            <div className={`w-full bg-gradient-to-r from-green-300 to-green-600 h-20 flex items-center
                            shadow-lg shadow-blue-400`}>
                    <Link href={`/`} passHref>
                <span className={`ml-3 p-4 ${styles.image} cursor-pointer`}>
                    <Image src={`https://frexco.com.br/wp-content/uploads/2020/04/logo-frexco-slogan.png`} width={100} height={50}
                    alt="frexco" />
                    </span>
                
                    </Link>
                <span className="flex w-full justify-center text-3xl text-green-50 tracking-widest">HortFruit</span>
                
                <span onClick={props.navegar} className={`cursor-pointer relative
                                    flex ml-auto mr-4 bg-green-200 p-4 rounded-2xl hover:bg-green-600 hover:text-white duration-300
                                `}><CartIcon/><span className="w-3.5 rounded-full absolute flex justify-center items-center
                                p-2  bg-red-500 h-6 bottom-1 text-white left-1">{quantidade}</span></span>
                                
            </div>
      
    );
}

export default Header;