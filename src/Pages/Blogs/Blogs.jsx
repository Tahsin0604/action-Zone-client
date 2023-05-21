import React from "react";

const Blogs = () => {
  return (
    <div className="custom-container py-6 space-y-6">
      <div className="space-y-3">
        <h1 className="text-lg font-spaceMono font-semibold">
          1.What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p className="font-spaceMono">
          An access token is a a short-lived credential credential that is used
          to access protected resources or perform authorized actions on behalf
          of a user. Access tokens are typically stored on the client-side in
          memory or storage mechanisms like localStorage
          <br />A refresh token is a credential that is used to obtain a new
          access token without requiring the user to re-authenticate. Refresh
          tokens have a longer lifespan. When user access token expired they can
          get a new acces token by refresh. The recommended approach is to store
          refresh tokens securely in an HTTP-only cookie
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="text-lg font-spaceMono font-semibold">
          2.Compare SQL and NoSQL databases?
        </h1>
        <p className="font-spaceMono">
          SQL databases are primarily called Relational Databases. SQL databases
          are based on a structured data model and use tables with predefined
          schemas to store data.
          <br />A NoSQL database has a dynamic schema for unstructured data. A
          NoSQL database has a dynamic schema for unstructured data.
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="text-lg font-spaceMono font-semibold">
          3.What is express js? What is Nest JS ?
        </h1>
        <p className="font-spaceMono">
          Express is a minimal and flexible Node.js framework that provides a
          robust set of features for building web and mobile applications. It is
          a lightweight and unopinionated framework that allows developers to
          create applications with their preferred tools and libraries.
          <br />
          NestJS is a progressive Node.js framework for building efficient,
          scalable, and reliable server-side applications. It is built on top of
          Express.js and provides a more structured way of building applications
          with TypeScript.
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="text-lg font-spaceMono font-semibold">
          4.What is MongoDB aggregate and how does it work ?
        </h1>
        <p className="font-spaceMono">
          Aggregations operations process data records and return computed
          results. Aggregation operations group values from multiple documents
          together, and can perform a variety of operations on the grouped data
          to return a single result.
          <br />
          In mongoDB To perform aggregation operations, we can use:
          <br></br>
          1.Aggregation pipelines, which are the preferred method for performing
          aggregations.
          <br />
          2.Single purpose aggregation methods, which are simple but lack the
          capabilities of an aggregation pipeline.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
