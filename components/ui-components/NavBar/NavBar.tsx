import {useRef, useState} from 'react';
import useOnClickOutside from "../../useOnClickOutside";
import styles from "./NavBar.module.css"

import Link from "next/link";

const navData = [
  {
    name: "Editor",
    href: "/editor",
  },
  {
    name: "Results",
    href: "/results",
  },
  {
    name: "Scheduler",
    href: "/scheduler",
  }

];

export default function NavBar() {
  const [isModalOpen, setModalOpen] = useState(false); 
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div>
      <Link href="/">
        <h1 className="">Logo</h1>
      </Link>
      <nav className="">
        {navData.map((n) => {
          return (
            <Link key={n.name} href={n.href}>
              <a>{n.name}</a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
