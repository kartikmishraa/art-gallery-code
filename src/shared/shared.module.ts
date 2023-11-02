import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MaterialModule } from 'src/material/material.module';
import { HighlightRedDirective } from './directives/highlight-red.directive';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchbarComponent,
    HighlightRedDirective,
    CardComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, HighlightRedDirective, CardComponent],
})
export class SharedModule {}
