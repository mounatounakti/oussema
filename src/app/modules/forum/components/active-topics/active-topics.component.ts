import { Component , OnInit} from '@angular/core';

interface topic {
  title: string;
  time: string;
  author: string;
}

@Component({
  selector: 'app-active-topics',
  templateUrl: './active-topics.component.html',
  styleUrls: ['./active-topics.component.sass']
})
export class ActiveTopicsComponent implements OnInit {
  topics: topic[] = [
    {
      title: 'Why Bootstrap 4 is so awesome?',
      time: '39 minutes',
      author: 'AppStrapMaster'
    },{
      title: 'Why Bootstrap 4 is so awesome?',
      time: '39 minutes',
      author: 'AppStrapMaster'
    }
  ];

  constructor() {}

  openModel() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.classList.add('show');
      modalDiv.style.display = 'block';
    }
  }

  closeModel() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.classList.remove('show');
      modalDiv.style.display = 'none';
    }
  }

  ngOnInit(): void {}
}
