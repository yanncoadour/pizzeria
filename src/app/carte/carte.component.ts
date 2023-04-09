import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../services/pizza.service";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit{
  menuItems : any = {
    pizzas : [],
    pastas : [],
    desserts : []
  }
  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getMenuItems().subscribe((data) => {
      this.menuItems = data;
    });
  }
}
