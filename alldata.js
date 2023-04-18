function AllData() {
  const ctx = React.useContext(UserContext);
  const usersData = ctx.users;


  function createCard(user) {
    const { name, email, password, balance} = user;
    return (
      <center><Card
        header="All Data"
        bgcolor="danger"
        body={
          <>
            <p className="card-text">name: {name}</p>
            <p className="card-text">email: {email}</p>
            <p className="card-text">password: {password}</p>
            <p className="card-text">balance: ${balance}</p>
          </>
        }
      /></center>
    );
  }
  

  const cards = usersData.map(createCard);

  return (
    <div>
      {cards}
    </div>
  );
}