import { Component } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpRequestsService} from '../../Services/http-requests.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';




@Component({
  selector: 'app-configurations-page',
  imports: [
    MatCardContent,
    MatCard,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    _HttpRequestsService
  ],
  templateUrl: './configurations-page.component.html',
  standalone: true,
  styleUrl: './configurations-page.component.css'
})
export class ConfigurationsPageComponent {



  constructor(private httpService:HttpRequestsService, private snackBar: MatSnackBar, private router:Router) {
  }

  configurationForm = new FormGroup({
    maxTicketPoolSize: new FormControl('',[Validators.required]),
    totalTickets: new FormControl('',[Validators.required]),
    vendorReleaseRate: new FormControl('',[Validators.required]),
    customerRetrievalRate: new FormControl('',[Validators.required]),
  });

  configurationsOnSubmit() {
    // this.httpService.sendConfigurations(this.configurationForm.value).subscribe(()=>{
    //   this.snackBar.open('System configured successfully !', 'Undo', {
    //     duration: 3000
    //   });
    //
    //   this.router.navigate(["/dashboard"])
    //
    // })
  }
}
