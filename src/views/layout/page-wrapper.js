import React from "react";
import Navbar from "./navbar";

export default function pageWrapper (props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="public/styles.css" />
        <title>SSG - express and JSX</title>
      </head>
      <body>
        <header>
          <Navbar currentPage={props.currentPage} />
        </header>

        <main>{props.children}</main>
      </body>
    </html>
  );
}
