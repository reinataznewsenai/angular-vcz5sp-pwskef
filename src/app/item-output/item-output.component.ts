import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent  {
  itens = ["Pizza","Pastel","Hamburguer","Coxinha","Rizoli","Bolinho de Carne","Bolinho de Queijo","Misto Quente","Cachorro Quente","Salame Quente","Salame com Queijo","Queijo Quente"]
  //--------------------- Componente 1 ---------------------//
  @ViewChild('newItem') comida:any;
  addNewItem(value:string){
    this.itens.push(value);
    this.comida.nativeElement.value = "";
  }
  remove(){
    this.comida.nativeElement.value = "";
  }
  removeItens(){
    while(this.itens.length > 0){
      this.itens.pop();
    }
  }
}


