import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponentComponent } from './register-component/register-component.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RegisterComponentComponent
  ],
  exports:[RegisterComponentComponent]
  
  
})
export class RegisterModule { }
