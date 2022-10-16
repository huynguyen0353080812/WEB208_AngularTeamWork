import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/interfaces/user';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ListCate:any= []
  constructor(private categoryService:CategoryService) { }

  toggle: boolean = false;
  toggleUser: boolean = false;
  search: string = ''
  user: any = {}
  isLogged: boolean = false
  ngOnInit(): void {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      this.user = JSON.parse(userInfo)
      console.log('this.user', this.user);

      this.isLogged = true
    }
    this.categoryService.getCategory().subscribe(data=>{
      this.ListCate=data
    })

  }
  handleToggle(value?: string) {
    if (value === 'user') {
      this.toggleUser = !this.toggleUser;
      return
    }
    this.toggle = !this.toggle;
  }


  logout() {
    localStorage.removeItem('user')
  }
}
