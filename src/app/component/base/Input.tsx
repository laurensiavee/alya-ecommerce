import Label from "./Label";

export default function Input(props) {
    return (
        <>
            <Label>{props.children}</Label>
            <input type="text" placeholder="..." className="bg-white border border-l-primary/40 text-l-text text-sm rounded-lg block w-full p-2.5" />
        </>
    );
  }
  