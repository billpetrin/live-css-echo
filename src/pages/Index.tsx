
const Index = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-light mb-4">Welcome to Live CSS Echo</h1>
          <p className="text-gray-600">
            Edit your HTML and CSS files to see live updates in the browser.
          </p>
        </header>
        
        <main>
          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">Getting Started</h2>
            <p className="text-gray-600 mb-4">
              1. Open your code editor and navigate to:
              <code className="block bg-gray-100 p-4 mt-2 rounded-lg font-mono">
                src/pages/Index.tsx
              </code>
            </p>
            <p className="text-gray-600 mb-4">
              2. Make changes to the HTML structure or CSS classes
            </p>
            <p className="text-gray-600">
              3. Watch as your changes appear instantly in the browser!
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-light mb-4">Try editing me!</h3>
            <p className="text-gray-600">
              This section is styled with Tailwind CSS classes. Feel free to modify them
              and see the changes reflect instantly.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
