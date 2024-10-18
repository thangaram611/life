export default function About() {
  return (
    <div className="bg-lightGray min-h-screen">
      <section className="p-8 text-center">
        <h1 className="text-4xl text-darkBlue">Welcome to the About Page</h1>
        <p className="mt-4 text-lightBlue">
          This is the first section of the about page.
        </p>
      </section>
      <section className="p-8 text-center bg-pink">
        <h2 className="text-3xl text-lightGray">About Our App</h2>
        <p className="mt-4">
          Explore the features of this app using the navigation bar.
        </p>
      </section>
    </div>
  );
}
