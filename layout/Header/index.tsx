import styled from "styled-components";
import { Button } from "../../components/Button";
import Image from "next/image"
import Link from "next/link"
import globalStyles from "../../styles/globalStyles";

const StyledHeader = styled.header`
    background: ${globalStyles.color.white};
    box-shadow: 0px 2px 2px 0px rgba(173, 181, 189, 0.16);
    width: 100%;
    color: ${globalStyles.color.gray};
    padding: 0px 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    .container {
        display: flex;
        justify-content: space-between;
    }
    
    .logo {
        display: inline-flex;
    }
    
    ul {
        display: flex;
        align-items: center;
        gap: 30px;
        list-style: none;
    }
`

export const Header = () => {

    return (
        <StyledHeader>
            <div className='container'>
            <Link href="">
                <a className="logo"><Image src="/images/logo.svg" height={80} width={80} alt="logo" /></a>
            </Link>
            <ul>
                <li>
                    <Link href="">
                        <a>Jelajahi Kategori</a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a>Riset & Artikel</a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a>Tentang Kami</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a><Button text="Masuk" color="#1F7AE0" /></a>
                    </Link>
                </li>
            </ul>
            </div>
        </StyledHeader>
    )
}
