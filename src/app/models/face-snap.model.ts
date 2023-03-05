export class FaceSnap{
  title!: string ;
  description! : string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;
  snapped!: boolean;

  constructor(title: string, description : string, createdDate: Date, snaps: number, imageUrl: string, public location?: string){
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.snaps = snaps;
    this.imageUrl = imageUrl
    this.buttonText  = "oh snap!";
    this.snapped = false;
}

  onAddSnap(){
    if(this.snapped == false){
      this.snaps++;
      this.buttonText = "opps snapped!"
      this.snapped = true;
    }else if(this.snapped == true) {
      this.snapped = false;
      this.buttonText = "oh snap!";
      this.snaps--;
    }
  }
}
