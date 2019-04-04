import { Component } from '@angular/core';
@Component({
    selector: 'sample-bind',
    templateUrl: './sample-bind.html',
    styleUrls: ['./sample-bind.css'],
  })

  export class sampleBindComponent {
    counter = 0;
    mouse: string;
    upValues: string = '';
    downValues: string = '';
    keypressValue: string = "";
    x: string = "";
    y: string = '';
    view: string = '';
  
    mouseGoesIn = function(){
      this.mouse = "entered";
    };
    mouseLeft = function(){
      this.mouse = "left";
    }
    imageArray: string[] = [
      "../assets/flower.jpg",
      "../assets/lake.jpg", //extensions are case sensitive
      "../assets/bison.jpg",
    ]
    imageUrl: string = this.imageArray[this.counter];
    changeImg = function(){
      if(this.counter < this.imageArray.length - 1){
        this.counter++;
      }else{
        this.counter = 0;
      }
      this.imageUrl=this.imageArray[this.counter];
    }
    onKeyup(event:any){
      this.upValues = event.key;
      //this.upValues += event.target.value + ' | ';
    }
    onKeydown(event:any){
      this.downValues = event.key;
      //this.downValues += event.target.value + " | ";
    }
    keypress(event:any){
      this.keypressValue = event.key;
      //this.keypressValue += event.target.value + " | ";
    }
    move(event:any){
      this.x = event.clientX;
      this.y = event.clientY;
    }
    underTheScope(event:any){
      if(event.type == "focus"){
        this.view = "the text box is focused";
      }
      else if(event.type == "blur"){
        this.view = "the input box is blurred";
      }
      console.log(event);
    }

    myCustomClass: string='blueBox';
    isTrue = false;
    twoColors: boolean = true;
    myBorder="1px solid black";
    changeColor = function() {
        this.twoColors = !this.twoColors;
    }
    str1: string = "Hello my name is";
    name: string = "Alex";
    str2: string = "I like to";
    likes: string[] = ['hike', 'swim', 'play'];
    isDisabled: boolean = false;
    imageSrc: string = "../assets/angelsLanding.jpg";



    getLikes = function(arr: any){
        let arrString = arr.join(", ");
        return " " + arrString;
    }
    
  }