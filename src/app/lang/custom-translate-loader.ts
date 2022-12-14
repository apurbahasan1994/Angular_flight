import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { LangService } from "./servies/lang.service";

export class CustomTranslateLoader implements TranslateLoader{

  constructor(private langService:LangService) {
  }
  getTranslation(lang: string): Observable<Object> {
   return this.langService.geLabels(lang);
  }

}
