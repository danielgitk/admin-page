import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiResponse } from "../interfaces";
import { RequestService } from "../request.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authed: boolean = false;
  errors: string[];

  constructor(private http: RequestService, private router: Router) {}

  checkAuth() {
    return localStorage.getItem("token") ? true : false;
  }

  /**
   * Login request
   * 
   * @param username 
   * @param password 
   */
  login(email: string, password: string) {
    console.log("dersenal");
    
    this.http
      .post("api/auth/login", { email, password }, false)
      .subscribe(response => {
        if (response.success) {
          this.authed = true;
          console.log("token:",response.data.token);
          localStorage.setItem("token", response.data.token);
          this.router.navigate(["/dashboard"]);
        }

        this.errors = response.errors || [];

        return response;
      });
  }
}
