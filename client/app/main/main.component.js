import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
/*import sendgrid from 'sendgrid';
*/export class MainController {

content={
  from: '',
  to: '',
  subject: '',
  message: '',
  key: '',
  showPreview: false,
  preview: ''
};

properties={
  input: '',
  output: '',
  current: '',
  bold: false,
  italics: false,
  underline: false
};

  /*@ngInject*/
  constructor($http, Auth) {
    this.$http = $http;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }

  $onInit() {
    
  }

  changeBold(){
    this.properties.bold = !this.properties.bold;
  }

  changeItalics(){
    this.properties.italics = !this.properties.italics;
  }

  changeUnderLine(){
    this.properties.underline = !this.properties.underline;
  }

  setPreview(){
    this.properties.current = this.content.message.charAt(this.content.message.length-1);
    
    if(this.properties.bold){
      this.properties.current = this.properties.current.bold();
    }
    
    if(this.properties.italics){
      this.properties.current = this.properties.current.italics();
    }
    
    this.content.preview = this.content.preview + this.properties.current;
    console.log(this.content.preview);
  }


  sendEmail(){
    console.log(this.content.from);
    console.log(this.content.to);
    console.log(this.content.subject);
    console.log(this.content.message);
    console.log(this.content.key);
  }
}

export default angular.module('emailerApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;