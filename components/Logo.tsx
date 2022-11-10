import { BoltIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="my-2 flex items-center space-x-1 text-primary-500">
          <BoltIcon  className="h-8 w-8 flex-shrink-0 mr-3"/>
          <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">Next-js Dev</span>  
        </Link>
    )
}

export default Logo;