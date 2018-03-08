import React from 'react';
import InputForm from './input-form';
import Counter from './counter';
import './container.css';

export default function Container() {
  const title = "Make your guess!";
  return (
    <div className="container">
      <h2>{title}</h2>
      <InputForm />
      <Counter />
    </div>
  );
}