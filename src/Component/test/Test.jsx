// TestComponent.jsx
import React from 'react';
import { useLoaderData } from 'react-router-dom';

function TestComponent() {
  const data = useLoaderData();
  return (
    <div>
      <h1>Test Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TestComponent;

export const testLoader = async () => {
  const response = await fetch('https://api.github.com/users/prottoychakraborty');
  return response.json();
};
