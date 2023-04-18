function Home(){
  return (
    <center><Card
      txtcolor="white"
      bgcolor="danger"
      header="Fraud EZ Bank"
      title="Welcome to FEZB"
      text="Enjoy all of our services like security-less online banking"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    /></center>   
  );  
}
