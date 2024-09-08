import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="px-5 py-3 bg-gradient-to-r from-l-primary to-l-secondary text-d-text font-semibold flex justify-between">
        <Link href={`/`} className="flex p-1">
          <img src="{ glassesIcon }" className="my-auto w-5 me-2"></img>
          Alya
        </Link>
        <div className=" mx-5 w-1/2 flex">
          <input type="text" placeholder="Search..." className="bg-white/70 border border-l-primary/40 text-l-text text-sm rounded-lg block w-full p-2.5" />
          <button className="ms-5 rounded-xl p-3 px-5 bg-l-accent text-d-text font-bold hover:shadow-2xl hover:shadow-l-accent/70">
            Filter
          </button>
        </div>
        <Link href={`/`} className="flex p-1">
          Logout
        </Link>
      </nav>
    </>
  );
}
