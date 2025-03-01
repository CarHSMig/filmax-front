import Image from "next/image";
import Link from "next/link";
import NavItem, { NavItemInterface } from "../nav_item";
import SearchBar from "../SearchBar";
import "./index.css";

export default function Navbar() {  
  const items: NavItemInterface[] = [
    {
    url: "/",
    label: "Início"
    },
    {
    url: "/catalog",
    label: "Catalogo"
    },
    {
    url: "/my_list",
    label: "Minha Lista"
    },
    {
    url: "/my_reservations",
    label: "Minhas Reservas"
    }
  ]
  return(
    <header>
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image src="/logo.svg" 
                alt="logo" 
                width={200}
                height={50}
          />
        </Link>
        
        <ul className="nav-items">
          {items.map((item, index) => (
            <NavItem 
            key={index} 
            url={item.url}
            label={item.label} />
          ))}
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
} 