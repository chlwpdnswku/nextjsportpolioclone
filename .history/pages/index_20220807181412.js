import Login from '../component/login';
import AppLayout from '../component/Applayout';

function Home() {
  return (
    <>
      <AppLayout>
        {isLoggedIn && <PostForm />}
        {mainPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </AppLayout>
    </>
  );
}

export default Home;
