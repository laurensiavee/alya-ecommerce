import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="px-5 py-3 bg-gradient-to-r from-l-primary to-l-secondary text-d-text font-semibold flex justify-between">
        <Link href={`/`} className="flex p-1">
          <img src="{ glassesIcon }" className="my-auto w-5 me-2"></img>
          Alya
        </Link>
        <Link href={`/`} className="flex p-1">
          Logout
        </Link>
      </nav>
    </>
  );
}
