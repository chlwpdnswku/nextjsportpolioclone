import Login from '../component/login';
import AppLayout from '../component/Applayout';

function Home() {
  return (
    <>
      <AppLayout>
        {isLoggedIn ? (
          <UserProfile setIsLoggendIn={setIsLoggendIn} />
        ) : (
          <LoginForm setIsLoggendIn={setIsLoggendIn} />
        )}
      </AppLayout>
    </>
  );
}

export default Home;
