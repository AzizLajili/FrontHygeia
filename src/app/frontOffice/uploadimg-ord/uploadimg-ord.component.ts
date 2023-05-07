import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import {ActivatedRoute} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-uploadimg-ord',
  templateUrl: './uploadimg-ord.component.html',
  styleUrls: ['./uploadimg-ord.component.css']
})
export class UploadimgOrdComponent implements OnInit{
  headers: any = {
    'Access-Control-Allow-Origin': 'http://localhost:8080/*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  }
  config = {
    headers: this.headers
  }
  constructor(private route:ActivatedRoute) {
    this.getOrdonnances();
  }

  ngOnInit(): void {
    this.selectedOrdonnanceId=+this.route.snapshot.params['idord'];
    }
  // @ts-ignore
  fileInput: File ;
  uploadfile(event:any){
    console.log(event)
    this.fileInput=event.target.files[0];
  }
  ordonnances: any[] = [];
  selectedOrdonnanceId!: number;
  getOrdonnances() {
    axios.get('http://localhost:8080/Ordonnance/retrieveAll')
      .then(response => {
        this.ordonnances = response.data;
      })
      .catch(error => {
        console.log(error);
        alert('Failed to retrieve Ordonnances');
      });
  }
  sendFile(){
    if (this.fileInput!=null && this.fileInput!=undefined ){
      console.log(this.fileInput)
      let formData=new FormData();
      formData.append("file",this.fileInput)
      axios.post(`http://localhost:8080/Ordonnance/upload/${this.selectedOrdonnanceId}`,formData)
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Image uploaded successfully',
            // text: `with the ID  ${response.data.id}`
          });        })
        .catch(error => {
          console.log(error);
          alert('Failed to upload Ordonnance image');
        });
    }
    }
    downloadFile(){
      if (!this.selectedOrdonnanceId) {
        alert('Please select an Ordonnance');
        return;
      }
      axios.get(`http://localhost:8080/Ordonnance/download/${this.selectedOrdonnanceId}`, {
        responseType: 'arraybuffer'
      })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `Ordonnance_${this.selectedOrdonnanceId}.jpg`);
          document.body.appendChild(link);
          link.click();
        })
        .catch(error => {
          console.log(error);
          alert('Failed to download Ordonnance image');
        });
    }
    }



