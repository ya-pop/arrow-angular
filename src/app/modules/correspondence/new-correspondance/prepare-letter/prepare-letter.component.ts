import { Component, ViewChild ,AfterViewChecked} from '@angular/core';
import {CKEditorComponent} from 'ng2-ckeditor';
 
@Component({
  selector: 'app-prepare-letter',
  templateUrl: './prepare-letter.component.html',
  styleUrls: ['./prepare-letter.component.scss']
})
export class PrepareLetterComponent implements AfterViewChecked {
	ckeditorContent: string = '<p>ahmed magdy</p>';
	@ViewChild(CKEditorComponent) ckeditor : CKEditorComponent;

  constructor() { }

  ngAfterViewChecked() {
  	let editor  = this.ckeditor.instance;
  	editor.config.height = '400'
//   	editor.config.toolbar = [
//     { name: 'basicstyles', items: [ 'FontSize','Styles', 'Font', 'Table' , 'Bold', 'Italic' ] },
//     {name: 'list',items:['Insert/Remove Numbered List']}
// ];
	editor.config.toolbarGroups = [
	    { name: 'paragraph',   groups: [ 'list', 'indent', 'align'] },
    { name: 'basicstyles', groups: [ 'basicstyles' ] },
    { name: 'styles', groups: [ 'styles','insert' ] },
 
	];
  	editor.config.removeButtons = 'Save,Templates,Source,Find,Replace,Scayt,SelectAll,Forms,Links,Radio,Flash,Smiley,Iframe,Horizontalrule'
  	console.log(editor.config)
  }

}
