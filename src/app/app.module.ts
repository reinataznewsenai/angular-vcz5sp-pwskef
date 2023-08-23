import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importação do que vai usar lá na injeção do app-root
import { appC } from './app.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  declarations: [appC, ItemDetailComponent, ItemOutputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appC],
})
export class AppModule {}
