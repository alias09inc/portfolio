

export default ({ comp, title, children }: Lume.Data, helpers: Lume.Helpers) => (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/global.css" />
        <link rel="stylesheet" href="/styles/tailwind.css" />
      </head>

      <body>
        <comp.header />

        <main>
          {children}
        </main>

        <comp.footer />
      </body>

    </html>
  );