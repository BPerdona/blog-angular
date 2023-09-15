import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string = "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png"

  @Input()
  cardTitle: string = "Titulo Genérico"

  @Input()
  id: string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
