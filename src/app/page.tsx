
'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Login from "@/components/login/login";


export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json()
  //     console.log(">>>> check res :", data);
  //   }
  //   fetchData();
  // }, [])
  return (
    <div>
      <Login />
    </div>
  );
}
