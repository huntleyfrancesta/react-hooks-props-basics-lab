return (
  <div>
    <NavBar />
    <Home username={user.name} city={user.city} color={user.color} />
    <About bio={user.bio} links={user.links} />
  </div>
);


export default App;