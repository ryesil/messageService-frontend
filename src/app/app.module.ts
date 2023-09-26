import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessageListComponent } from './message-list/message-list.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HomeComponent } from './home/home.component';
import { NewMessageComponent } from './new-message/new-message.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { DataStorageService } from './shared/data-storage.service';
import { TimestamService } from './shared/timestam.service';
import { MessageDetailComponent } from './message-list/message-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'messages',component:MessageListComponent},
  {path:'messages/:id', component: MessageDetailComponent},
  {path:'new', component:NewMessageComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageListComponent,
    HomeComponent,
    NewMessageComponent,
    MessageDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    DateInputsModule,
    BrowserAnimationsModule,
    GridModule,
    DropDownsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [DataStorageService, TimestamService],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
