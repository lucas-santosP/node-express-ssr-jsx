import React from "react";
import PageWrapper from "./layout/page-wrapper";

export default function HelloMessage () {
  return (
    <PageWrapper currentPage="home">
      <h1 className="title">Home</h1>

      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, inventore? Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Perspiciatis doloribus ipsa qui adipisci optio,
          praesentium sunt cum assumenda totam quis.
        </p>
      </section>
    </PageWrapper>
  );
}
