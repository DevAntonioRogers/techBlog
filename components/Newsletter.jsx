const Newsletter = () => {
  return (
    <div className="py-20 mt-10">
      <div className="wrapper newsletter">
        <div className="flex-grow mb-12 lg:mb-0 dark:text-white">
          <h2 className="text-4xl mb-4 font-bold">
            Subscribe to our newsletter
          </h2>
          <p>
            Get all the latest posts delivered straight to
            your inbox
          </p>
        </div>
        <div>
          <form className="newsletter-form">
            <label for="email" className="sr-only">
              email
            </label>
            <input
              className="newsletter-input px-6"
              name="email"
              placeholder="Your email address"
              type="email"
              required
            />
            <button
              className="inline-block h-16 rounded-full bg-sky-400 py-2 px-8 relative flex-grow sm:flex-grow-0 text-white"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
