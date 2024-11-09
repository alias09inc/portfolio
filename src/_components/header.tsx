export default function () {
    return (
      <>
        <header className="justify-center sticky top-0 w-full bg-white/30 backdrop-filter backdrop-blur-md backdrop-brightness-100 backdrop-opacity-50">
          <div className="flex items-center px-12 md:ml-[10vw] md:mr-[10vw]">
            <a href="/" className="text-4xl text-blue-600 font-caveat ml-8">
              aliAs.com
            </a>
            <div className="h-8 w-px mx-6"></div>
            <nav className="flex flex-row">
              <a href="/skills" className="text-lg text-gray-700 font-mono">
                Skills
              </a>
              <a href="/works" className="text-lg text-gray-700 font-mono ml-4">
                Works
              </a>
              <a href="/contact" className="text-lg text-gray-700 font-mono ml-4">
                Contact
              </a>
            </nav>
          </div>
        </header>
      </>
    );
  }