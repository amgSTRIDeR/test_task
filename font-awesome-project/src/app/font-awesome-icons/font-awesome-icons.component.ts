import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-font-awesome-icons',
  templateUrl: './font-awesome-icons.component.html',
  styleUrls: ['./font-awesome-icons.component.scss'],
})
export class FontAwesomeIconsComponent implements OnInit {
  public fontAwesomeIcon: any;
  public iconList = [];
  public iconsQueue = [];
  private interval: any;

  ngOnInit(): void {
    const iconLibrary = new FaIconLibrary();
    iconLibrary.addIconPacks(fas);
    const fasIconLibrary = Object.values(iconLibrary)[0].fas;
    this.iconList = Object.values(fasIconLibrary);
  }

  getFontAwesomeIcon() {
    const randomIndex = Math.floor(Math.random() * this.iconList.length);
    this.iconsQueue.push(this.iconList[randomIndex]);
    this.showIconFromQueu();
  }

  showIconFromQueu() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.fontAwesomeIcon = this.iconsQueue.shift();
        if (!this.iconsQueue.length) {
          clearInterval(this.interval);
          this.interval = 0;
        }
      }, 3000);
    }
  }
}
