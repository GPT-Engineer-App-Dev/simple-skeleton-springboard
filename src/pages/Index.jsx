import { useState } from 'react';

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
      </header>
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Home</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">About</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Contact</a></li>
        </ul>
      </nav>
      <main>
        <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(count + 1)}
          >
            Click me
          </button>
          <p className="mt-2">You've clicked the button {count} times.</p>
        </div>
      </main>
      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
