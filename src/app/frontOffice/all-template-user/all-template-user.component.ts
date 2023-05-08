import { Component } from '@angular/core';

@Component({
  selector: 'app-all-template-user',
  templateUrl: './all-template-user.component.html',
  styleUrls: ['./all-template-user.component.css']
})
export class AllTemplateUserComponent {


  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/FrontOffice/vendor/modernizr/modernizr.min.js');


    this.loadScriptsInOrder([
      '/assets/FrontOffice/vendor/plugins/js/plugins.min.js',
      '/assets/FrontOffice/vendor/plugins/js/plugins.min.js',
    '/assets/FrontOffice/js/theme.js',
    '/assets/FrontOffice/js/view.home.js',
    'js/examples/examples.forms.js',
    '/assets/FrontOffice/js/theme.init.js'

    ],
     () => {
      console.log('All scripts have finished loading');
    });
  }

  public loadScriptsInOrder(urls: (string | undefined)[], callback: () => void) {
    if (urls.length > 0) {
      const url = urls.shift();
      if (url) {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          this.loadScriptsInOrder(urls, callback);
        };
        document.body.appendChild(script);
      } else {
        this.loadScriptsInOrder(urls, callback);
      }
    } else {
      callback();
    }
  }
  public loadScript(url: string): void {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
  }
}
