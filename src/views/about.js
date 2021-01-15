import React from "react";
import PageWrapper from "./layout/page-wrapper";

export default function HelloMessage ({ text }) {
  return (
    <PageWrapper currentPage="about">
      <h1 className="title">About - {text}</h1>
      <section>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio vitae rem ipsum eos
          voluptas, possimus vel nam saepe nesciunt fuga. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat, in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe, perferendis! Repudiandae, suscipit! Exercitationem animi libero, harum ipsa vero
          dolores culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime velit eos
          tempore illo omnis corrupti modi quisquam ex eveniet! Deserunt quia ullam et ipsum
          recusandae? Dolor placeat inventore soluta, est provident incidunt, nemo nihil
          consequuntur vitae porro, voluptatem magnam quod facere laboriosam tenetur quasi sequi
          unde!
        </p>
        <p>
          Obcaecati facere dignissimos provident velit eveniet ipsam tempore debitis eius error,
          praesentium maiores. Reprehenderit illum officiis quod rerum nihil suscipit culpa. Odit
          sapiente, enim, dolor vel voluptas molestiae vitae eligendi quod illum animi sequi
          voluptates provident sit ad mollitia praesentium? Impedit, reiciendis iure, amet accusamus
          saepe sunt asperiores, facere explicabo aliquam autem laborum quod.
        </p>
      </section>
    </PageWrapper>
  );
}
