import useBlogPosts from "./Hook";

function HomePage() {
  const { posts, isLoading, isError, navigate } = useBlogPosts();

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
        <button onClick={() => navigate(`/post/create`)}>Create Post</button>
      </div>
      <div className="board">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button
                  className="view-button"
                  onClick={() => navigate(`/post/view/${post.id}`)}
                >
                  View post
                </button>
                <button
                  className="edit-button"
                  onClick={() => navigate(`/post/edit/${post.id}`)}
                >
                  Edit post
                </button>
              </div>

              <button className="delete-button">x</button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
