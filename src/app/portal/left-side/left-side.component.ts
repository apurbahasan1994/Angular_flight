import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  langs:Array<string>;
  language:FormGroup;
  constructor(private translateServie:TranslateService,private fb:FormBuilder) {
    translateServie.addLangs(['en_US','fr_FR']);
   }

  ngOnInit(): void {
    this.langs=this.translateServie.getLangs();
    this.language=this.fb.group({
      language:[null]
    });
    const toSelect=this.langs.find(c=>c===localStorage.getItem('language'));
    this.language.get('language')?.setValue(toSelect);
  }
  changeLang(value:string){
    localStorage.setItem('language',value);
    this.translateServie.use(value);
  }
}
