import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {correspondencesStatusLookup, correspondencesTableInfoLookup} from '../../../../config/Lookups';
import {CoresspondenceService} from '../../../../services/coresspondence/coresspondence.service';
import {UtilService} from '../../../../services/util/util.service';
import {Language, TranslationService} from 'angular-l10n';
import {API_URLS} from '../../../../config/AppConfig';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {fileObject} from '../../../../config/Lookups';
import { FileUploader } from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

declare var $;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

	uploader: FileUploader = new FileUploader({url:URL});
  @Language() lang: string;
	@Input() newCorrespondenceForm: FormGroup;
  @Input() errors: any;
	@Output() newCorrespondenceFormChange: EventEmitter<any> = new EventEmitter<any>();
	
	tasksForm: FormGroup;
	files: fileObject[] = [];
	correspondencesStatus: any[] = correspondencesStatusLookup;
	correspondencesTable: any = correspondencesTableInfoLookup;
	loading;
	@Input() targetName;
	public tasks=[];
	public addTask = false;
	public addAttachment = false;
	public _status = "";

	constructor(private builder: FormBuilder, private util: UtilService,
		 private coresspondenceService: CoresspondenceService, public _translationService: TranslationService) {
	  this._translationService.translationChanged().subscribe(() => {
	       
	  });
	}



  ngOnInit() {
		if ( this.newCorrespondenceForm) {
					this.tasksForm = this.builder.group({
						name: [''],
						perfomer: [''],
						priority2: [''],
						// date1: [''],
						// date2: ['', Validators.required],
						// source: [''],
						// description: [''],
						// person: ['']
					});
					this.newCorrespondenceForm = this.builder.group({
						...this.newCorrespondenceForm.controls,
						...this.tasksForm.controls,
					});
		}
					this.newCorrespondenceFormChange.emit(this.newCorrespondenceForm);
					this.tasksForm.valueChanges.subscribe( val => {
						this.newCorrespondenceFormChange.emit({
							form: this.newCorrespondenceForm,
							mainInfoValid: this.tasksForm.valid});
					});
	}
	 


	getData() {
	    this.loading = true;
	    this.util.getResources(API_URLS.correspondences).subscribe( result => {
	      this.correspondencesTable.data = result;
	      this.correspondencesStatus = this.coresspondenceService.getCorrespondencesTypes(result, correspondencesStatusLookup);
	      this._status = this.correspondencesStatus[0].title;
	      this.loading = false;
	    },
	      (error) => { this.loading = false; } ,
	      () => {this.loading = false; }
	      );
		}
		handle(event){
			console.log(event);
		}
		
	public addTasks(){
		this.tasks=[
		{
		  "_id": "5be97dc88d8c9f5db903b7d8",
		  "title":"يحتاج الى معاينة",
		  "index": 0,
		  "priority": 12,
		  "status": "assigned",
		  "sender": "مجدي",
		  "to": "عبدالله",
		  "cc": "خالد, محمود",
		  "needAction": true,
		  "createdDate": "Wednesday, April 23, 2014 7:25 PM",
		  "relatedActions": ["replied","forwarded","attachment","tasks","related","recalled","substitution"],
		  "keyords": "done",
		  "number": 3404,
		  "template": [
		    {
		      "name":"طلب مساعدة"
		    },
		    {
		      "url": "Ohio.com"
		    }
		  ],
		  "shortDesc": "Commodo excepteur proident velit officia. Laboris veniam velit ut tempor nisi ullamco.",
		  "redirectInst": "magna proident et ipsum do",
		  "redirectComment": "Irure minim deserunt magna qui adipisicing id Lorem officia."
		},
		{
		  "_id": "5be97dc8fd7424f082a36aba",
		  "title":"يحتاج الى معاينة",
		  "index": 1,
		  "priority": 14,
		  "status": "done",
		  "sender": "مجدي",
		  "to": "عبدالله",
		  "cc": "خالد, محمود",
		  "needAction": true,
		  "createdDate": "Thursday, September 29, 2016 10:10 PM",
		  "relatedActions": ["replied","forwarded","attachment","tasks","related","recalled","substitution"],
		  "keyords": "done",
		  "number": 4736,
		  "template": [
		    {
		      "name":"طلب مساعدة"
		    },
		    {
		      "url": "Mississippi.com"
		    }
		  ],
		  "shortDesc": "Tempor dolore tempor mollit ullamco ex tempor enim qui ullamco. Sit enim cillum pariatur consequat sunt duis.",
		  "redirectInst": "nisi anim quis cupidatat ut",
		  "redirectComment": "Veniam cillum fugiat ut enim Lorem eiusmod voluptate consequat ullamco."
		},
		{
		  "_id": "5be97dc8605da7387e2995c5",
		  "title":"يحتاج الى معاينة",
		  "index": 2,
		  "priority": 3,
		  "status": "new",
		  "sender": "مجدي",
		  "to": "عبدالله",
		  "cc": "خالد, محمود",
		  "needAction": false,
		  "createdDate": "Friday, October 6, 2017 5:19 AM",
		  "relatedActions": ["replied","forwarded","attachment","tasks","related","recalled","substitution"],
		  "keyords": "assigned",
		  "number": 2785,
		  "template": [
		    {
		      "name":"طلب مساعدة"
		    },
		    {
		      "url": "Pennsylvania.com"
		    }
		  ],
		  "shortDesc": "Consectetur anim est id magna et proident eu magna eiusmod reprehenderit Lorem irure ad aliquip. Aliqua est laborum commodo cupidatat eiusmod exercitation deserunt quis veniam ad nostrud ex in.",
		  "redirectInst": "non occaecat aliqua non et",
		  "redirectComment": "Aute incididunt eu Lorem Lorem culpa qui incididunt."
		},
		{
		  "_id": "5be97dc89c44184632227814",
		  "title":"يحتاج الى معاينة",
		  "index": 3,
		  "priority": 12,
		  "status": "done",
		  "sender": "مجدي",
		  "to": "عبدالله",
		  "cc": "خالد, محمود",
		  "needAction": false,
		  "createdDate": "Tuesday, April 7, 2015 1:51 AM",
		  "relatedActions": ["replied","forwarded","attachment","tasks","related","recalled","substitution"],
		  "keyords": "waiting",
		  "number": 3557,
		  "template": [
		    {
		      "name":"طلب مساعدة"
		    },
		    {
		      "url": "Colorado.com"
		    }
		  ],
		  "shortDesc": "Ut aliquip officia nostrud enim incididunt elit adipisicing deserunt aute. Esse cillum amet tempor dolore.",
		  "redirectInst": "minim excepteur ut id aliqua",
		  "redirectComment": "Esse ad aliqua enim dolor velit ipsum sint."
		}
		];

		this.addTask = false;

	}

	handleUploaders(event) {    
		//remove duplicate files
		this.uploader.queue = this.uploader.queue.filter((file, index, self) =>
		index === self.findIndex((t) => (
			file.file.name === t.file.name        
			))  
		) 
	for(let file of this.uploader.queue) {
			if(!file.isUploaded) {
				file.upload();                         
				this.files.push(file._file);
			}
		} 
				
	}

	downloadFile(file, index) {
		if (window.navigator.msSaveOrOpenBlob) {
		 navigator.msSaveBlob(file, file.name);
		} else {
		 const downloadLink = document.createElement("a");
		 downloadLink.style.display = "none";
		 document.body.appendChild(downloadLink);
		 const fileItem = this.uploader.queue[index];
		 const url = (window.URL) ? window.URL.createObjectURL(fileItem._file) :
			(window as any).webkitURL.createObjectURL(file._file);
		 downloadLink.setAttribute("href", url);
		 downloadLink.setAttribute("download", file.name);
		 downloadLink.click();
		 document.body.removeChild(downloadLink);
		}
	}

deleteFile(index) {
	this.files.splice(index, 1);
	this.uploader.queue.splice(index,1);
}

 
		

}
