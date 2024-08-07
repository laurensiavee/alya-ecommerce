import Input from "./Input";
import Label from "./Label";

export default function Autocomplete(props) {
    return (
        <>
            <div className="">
                <div>
                    <Input aria-expanded="true" aria-haspopup="true">Autocompete</Input>
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
  