import {
  Component,
  HostListener,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'somgroup';
  slides = [
    { image: '../assets/images/portfolio-img1.jpg' },
    { image: '../assets/images/portfolio-img2.jpg' },
    { image: '../assets/images/portfolio-img3.jpg' },
    { image: '../assets/images/portfolio-img4.jpg' },
  ];

  @ViewChild('enquiryFormDialog', { static: false })
  enquiryFormDialog: TemplateRef<unknown>;

  constructor(
    private translate: TranslateService,
    private wowService: NgwWowService,
    private dialog: MatDialog
  ) {
    this.wowService.init();
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    // this.wowService.init();
  }

  // contact us eenquiry form dialog open
  openEnquiryForm() {
    this.dialog.open(this.enquiryFormDialog);
  }
}
