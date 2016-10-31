let login = (userName, password) => {
  if(userName !== 'admin' || password !== 'radical'){
    console.log('incorrect login');
  }
}

login('admin', 'idunno');