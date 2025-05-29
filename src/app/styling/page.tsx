'use client'
import DefaultButton from "@/component/Default/DefaultButton";
import DefaultInput from "@/component/Default/DefaultInput";
import DefaultSelect from "@/component/Default/DefaultSelect";
import { useState } from "react";

const StylingPage = () => {
  const [dummy, setDummy] = useState('');

  return (
    <>
    <div>
      <div className="bg-primary-darker mb-2">tes1</div>
      <div className="bg-primary-dark mb-2">tes1</div>
      <div className="bg-primary mb-2">tes1</div>
      <div className="bg-primary-light mb-2">tes1</div>
      <div className="bg-primary-lighter mb-2">tes1</div>
      <div className="bg-secondary-darker mb-2">tes1</div>
      <div className="bg-secondary-dark mb-2">tes1</div>
      <div className="bg-secondary mb-2">tes1</div>
      <div className="bg-secondary-light mb-2">tes1</div>
      <div className="bg-secondary-lighter mb-2">tes1</div>
      <div className="bg-tertiary-darker mb-2">tes1</div>
      <div className="bg-tertiary-dark mb-2">tes1</div>
      <div className="bg-tertiary mb-2">tes1</div>
      <div className="bg-tertiary-light mb-2">tes1</div>
      <div className="bg-tertiary-lighter mb-2">tes1</div>
      <div className="bg-accent-darker mb-2">tes1</div>
      <div className="bg-accent-dark mb-2">tes1</div>
      <div className="bg-accent mb-2">tes1</div>
      <div className="bg-accent-light mb-2">tes1</div>
      <div className="bg-accent-lighter mb-2">tes1</div>

      <div className="bg-success mb-2">tes1</div>
      <div className="bg-warning mb-2">tes1</div>
      <div className="bg-error mb-2">tes1</div>
    </div>
      <div className="bg-default-bg">
        <h1 className="text-xl font-semibold text-primary-text-dark">Components</h1>

        <div className="my-5">
          <h1 className="text-lg font-semibold text-primary-text-dark">Button</h1>
          <div className="flex flex-row gap-3 my-3">
            <DefaultButton onClick={() => alert("Button clicked!")} color="primary">Add to Cart</DefaultButton>
            <DefaultButton onClick={() => alert("Button clicked!")} color="secondary">Add to Cart</DefaultButton>
            <DefaultButton onClick={() => alert("Button clicked!")} color="tertiary">Add to Cart</DefaultButton>
          </div>
          <div className="flex flex-row gap-3 my-3">
            <DefaultButton onClick={() => alert("Button clicked!")} color="primaryGradient">Add to Cart</DefaultButton>
            <DefaultButton onClick={() => alert("Button clicked!")} color="secondaryGradient">Add to Cart</DefaultButton>
            <DefaultButton onClick={() => alert("Button clicked!")} color="tertiaryGradient">Add to Cart</DefaultButton>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-lg font-semibold text-primary-text-dark">Text</h1>
            <div className="text-primary-text-dark">primary text dark</div>
            <div className="text-primary-text">primary text</div>
            <div className="text-secondary-text">secondary text</div>
            <div className="text-tertiary-text">tertiary text</div>
        </div>
        <div className="my-5">
          <h1 className="text-lg font-semibold text-primary-text-dark">Input</h1>
          <p>value: {dummy}</p>
          <DefaultInput title="tes" placeholder="input tes" value={dummy} onChange={(e) => setDummy(e.target.value)}/>
        </div>
        <div className="my-5">
          <h1 className="text-lg font-semibold text-primary-text-dark">Select</h1>
          <p>value: {dummy}</p>
          <DefaultSelect title="tes" options={[{value:"tes1", label:"tes1"}, {value:"tes2", label:"tes2"}]} placeholder="input tes" value={dummy} onChange={(e) => setDummy(e.target.value)}/>
        </div>
      </div>
    </>
  )
}

export default StylingPage;
