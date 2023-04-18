function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
 
  const ctx = React.useContext(UserContext);
  let i = ctx.users.length -1;

  function validate(field, label){
    if (isNaN(field) == true) {
      setStatus( 'Please enter a valid ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (Math.sign(field) == -1) {
      setStatus( 'Please enter a valid ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;

    }
    if (!field) {
      setStatus( 'Please enter a valid ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

  function handleDeposit(){
    if (!validate(deposit, 'deposit')) return;
    ctx.users[i].balance += parseInt(deposit);
    setShow(false);
  }    
  function clearForm(){
    setDeposit('');
    setShow(true);
  }
  
 
  return (
   
    <center><Card
      bgcolor="danger"
      header="Make Deposit"
      status={status}
      body={show ? (  
            
              <>
              <div>Current Balance: ${ctx.users[i].balance}</div>
              Deposit Money<br/>
              <input type="input" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="submit" disabled={!deposit} className="btn btn-light" onClick={handleDeposit}>Submit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <div>You deposited {deposit}</div>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
              </>
            )}
    /></center>
  )
}