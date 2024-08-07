import Label from "./Label";

export default function Dropdown(props) {
    return (
        <>
            <div className="">
                <div>
                    <Label>dropdown</Label>
                    {/* <input type="text" placeholder="..." className="bg-white border border-l-primary/40 text-l-text text-sm rounded-lg block w-full p-2.5" /> */}
                    {/* <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white p-3 text-sm font-semibold hover:shadow-sm hover:shadow-l-primary-40" aria-expanded="true" aria-haspopup="true"> */}
                    <button type="button" className="inline-flex bg-white border border-l-primary/40 text-l-text text-sm rounded-lg block w-full p-2.5" aria-expanded="true" aria-haspopup="true">
                    Dropdown
                    <svg className="ms-1 me-3 -mr-1 h-5 w-5 text-gray-400" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                    </button>
                </div>

                <div className="w-full z-10 origin-top-right rounded-md bg-white shadow-lg shadow-l-primary/20 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="py-1" role="none">
                        <a href="#" className="block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</a>
                        <a href="#" className="block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</a>
                        <a href="#" className="block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">License</a>
                    </div>
                </div>
            </div>
        </>
    );
  }
  