import React, { useState } from "react";
 
export const InputForm = () => {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        onChange={handleInput}
        value={name}
      />
      <button type="submit">Submit</button>
      {/* フォームが送信されたら、入力された名前を表示 */}
      {submit && <p>Hello, {name}!</p>}
    </form>
  );
};