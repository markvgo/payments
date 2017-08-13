import {Component, OnInit, ViewChild, ContentChild, ElementRef, Input} from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  @Input("name") name: string;
  test: string;

  @ViewChild('interfaceCanvas') canvasRef: ElementRef;


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



    ctx.rect(25, 25, 200, 200);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
     ctx.fillStyle = '#003300';
    ctx.font = "30px Arial";
    var textHeight = parseInt(ctx.font);
    var textWidth = ctx.measureText(this.name).width;
    ctx.fillText(this.name, (w / 2) - (textWidth / 2), h / 2 );
    //ctx.fillText('1', (w / 2) - (textWidth / 2), (h / 2) + 20  );



  };


  myMethod() {

  };
}
