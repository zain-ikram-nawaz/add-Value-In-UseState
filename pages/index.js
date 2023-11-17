import Button from "./components/button";
import List from "./components/list";
import { useState } from "react";

export default function Home() {
  const [arr,setArr]=useState(["First item ", "Second item"])

  const AddItems = ()=>{
    // console.log("hello world")
    setArr([...arr,"New Item"])
  }
  return (
    <>
<h1> Hello world</h1>
      <List arr={arr} />
      <Button click= {AddItems}>Add Item</Button>
    </>
  );
}
