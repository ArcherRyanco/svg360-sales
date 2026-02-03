import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="SVG Digital">
      <Image src={logo} alt="SVG Digital" width={32} height={32} />
    </Link>
  );
}
