import Link from "next/link";
import ChildButton from "./components/childButton";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-2xl text-red-500 pl-4">Ma page welcome</h1>     
      <Link href="/about">about </Link>    
      <Link href="/contact">contact </Link> 
      <ChildButton/>
    </div>
  );
}
