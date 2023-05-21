

const Blog = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-5 py-10">
            <div>
                <h1 className="text-xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="text-md mt-3">Access token adn refresh token both are two types of token those used to server site authentication system. for security purpose server site issues a token for every user. this token work as credential for access to database. if you have not this token you can not access database. </p>
                <p className="mt-2">
                    Access token give a credential for short time and refresh token give a token for long time. access token have expiration data. if access token is expired refresh token give a new access token. for store this we have two way first browser Cookie and local storage.
                </p>
            </div>
            <div className="mt-10">
                <h3 className="text-xl font-bold">Compare SQL and NoSQL databases</h3>
                <p className="text-md mt-3">
                    SQL and NoSQL are the two types of database management system. SQL means Structured Query Language and NoSQL means Not only SQL;
                </p>
                <p className="mt-2">
                    SQL follow realatinal data model it is organized data to row and column and create a relation between row and column.SQL used in applications where structured data and complex queries are prevalent
                </p>
                <p className="mt-2">
                    NoSQl NoSQL databases use a flexible schema or schema-less approach. follows  non relational model. NoSQL organize data by key value pairs.

                </p>
            </div>

            <div className="mt-10">
                <h1 className="text-xl font-bold">What is express js? What is Nest JS</h1>
                <p className="mt-3 ">
                    express js is a minimal and flexible framework of node js. it is handle node js api calling easiest way. this is use for server site application. it provide set of features to build web application. such as : Routing, middleware, Tempesting, etc.
                </p>
                <p className="mt-2">
                    Nest js is a framework for build efficient and scalable server site application using node js. it is provide fully support of typeScript. it is combined with Object Oriented Programming, Functional Programming, functional Reactive Programming. it also provide more feature like: Expressive syntax,Middleware support,Powerful routing,Testing etc.
                </p>
            </div>

            <div className="mt-10">
                <h1 className="text-xl font-bold">what is mongodb aggreegation?</h1>
                <p className="mt-3">  Mongodb aggregation is a powerful framework of mongob. it is allows to complex data analysis  and transformation. aggregation pipeline is a series of data prosecing and transforming. such as matching, projecting, grouping, sorting etc.</p>
            </div>
        </div>
    );
};

export default Blog;