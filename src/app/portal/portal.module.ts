import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideComponent } from './left-side/left-side.component';
import { MatIconModule } from '@angular/material/icon';
import { BotSlideComponent } from './bot-slide/bot-slide.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LeftSideComponent,
    BotSlideComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[LeftSideComponent,BotSlideComponent]
})
export class PortalModule { }
