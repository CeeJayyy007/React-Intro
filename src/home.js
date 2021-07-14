import { useState } from "react";


const Home = () => {

    const [blogs, setBlogs] = useState(
        [{title: "My new website", body: "Body of the new blog", author: "Jack Sparrow", id: 1},
        {title: "My new blog news", body: "Body of the new blog", author: "Jack Bauer", id: 2},
        {title: "My new FAQ", body: "Body of the new blog", author: "Jack Black", id: 3},   
    ]);
    const handleClick = () => {
        
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                </div>

            ))}
            
            
            
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;