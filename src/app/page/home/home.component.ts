//src/app/page/home/home.component.ts
import { Component } from '@angular/core';
import { purchase } from '../../types/purchase';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  data: purchase[] = [];
  ngOnInit(): void {
    fetch('https://purchase-api.onrender.com/purchase')
      .then((res) => res.json())
      .then((result: purchase[]) => {
        this.data = result;
        console.log('Có dữ liệu trả về nè: ', this.data);
      })
      .catch((err) => console.error('Lỗi: ', err));
  }
}
