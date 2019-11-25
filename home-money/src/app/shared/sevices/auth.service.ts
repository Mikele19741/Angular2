export class AuthService{

private IsAuthentificated=false;
  login()
  {
      this.IsAuthentificated=true;
  }

  logout()
  {
      this.IsAuthentificated=false;
      window.localStorage.clear();
  }
  isLoggedIn() : boolean
  {
        return  this.IsAuthentificated;
  }
}