import {Component, OnInit, ViewChild, ContentChild, ElementRef, Input} from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @Input("name") name: string;
  test: string;

  @ViewChild('myCanvas') canvasRef: ElementRef;

  @ContentChild('canvas')  element: any;


  constructor(private dialogService:DialogService) { }

  ngOnInit() {
    console.log(this.name);
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');
    let content: string =
      this.canvasRef.nativeElement;
    console.log(this.canvasRef.nativeElement.innerHTML);

    // this.name = this.canvasRef.nativeElement.getAttribute('name'); // Fill the path

    let w: number = this.canvasRef.nativeElement.width;
    let h: number = this.canvasRef.nativeElement.height;

    ctx.beginPath();
    //
    var centerX = w / 2;
    var centerY = h / 2;
    var radius = 110;

    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    //this.circle(ctx)

    ctx.fillStyle = '#003300';
    ctx.font = "30px Arial";
    var textHeight = parseInt(ctx.font);
    var textWidth = ctx.measureText(this.name).width;
    ctx.fillText(this.name, (w / 2) - (textWidth / 2), h / 2 );
    //ctx.fillText('1', (w / 2) - (textWidth / 2), (h / 2) + 20  );


  };

  circle(ctx) {
    ctx.arc(50, 50, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

  };


   myMethod() {
  //   let disposable = this.dialogService.addDialog(AuthComponent, {
  //     title:this.canvasRef.nativeElement.innerHTML,
  //     message:'Confirm message'})
  //     .subscribe((isConfirmed)=>{
  //       //We get dialog result
  //       if(isConfirmed) {
  //         alert('accepted');
  //       }
  //       else {
  //         alert('declined');
  //       }
  //     });
  //   //We can close dialog calling disposable.unsubscribe();
  //   //If dialog was not closed manually close it by timeout
  //   setTimeout(()=>{
  //     disposable.unsubscribe();
  //   },10000);
  };
}


