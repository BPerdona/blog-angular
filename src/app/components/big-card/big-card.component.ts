import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string = "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png"

  @Input()
  cardTitle: string = "Card Genérico"

  @Input()
  cardDescription: string = "Descrição Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis non incidunt molestias ratione ab culpa inventore enim sed minus, deleniti quis reiciendis consectetur nulla repellat autem maxime? Autem, ducimus quia?"

  @Input()
  id: string = "0"
  
  constructor() { }

  ngOnInit(): void {
  }

}
