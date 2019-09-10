import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testRouting';

  constructor(private router:Router){

  }
  goProducts(){
    this.router.navigate(['/products'],{queryParams: { order: 'popular'}});
  }

  goUsers(){
    this.router.navigate(['/users'], { queryParamsHandling:'preserve'});
  }
}
