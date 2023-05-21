

const Blog = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-5">
            <h1 className="text-xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className="text-md mt-3">Access token adn refresh token both are two types of token those used to server site authentication system. for security purpose server site issues a token for every user. this token work as credential for access to database. if you have not this token you can not access database. </p>
            <p className="mt-2">
                Access token give a credential for short time and refresh token give a token for long time. access token have expiration data. if access token is expired refresh token give a new access token. for store this we have two way first browser Cookie and local storage.
            </p>
        </div>
    );
};

export default Blog;