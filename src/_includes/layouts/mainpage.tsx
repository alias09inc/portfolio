

export default ({ comp, title, children }: Lume.Data, helpers: Lume.Helpers) => (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/css/global.css" />
        <link rel="stylesheet" href="/css/tailwind.css" />
      </head>

      <body>
        <comp.header />
        {/* <header >
          <div className="h-full backdrop-blur-md">
          <h1>{title}</h1>
          </div>
        </header> */}

        <main>
          {children}
        </main>

        <footer>
          <p>© 2021</p>
        </footer>
      </body>

    </html>
  );