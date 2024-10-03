// Put variables in global scope to make them available to the browser console.
let video = document.querySelector("video");

let recordBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");


let recordFlag = false;

let recorder; // store undefine value
const constraints = {
  audio: false,
  video: true,
};

let chunks = []; // media data is stored in chunks


// navigator is a global object where this gives info about the browser
// it is a promise 
navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {

    video.srcObject= stream;

    recorder = new MediaRecorder(stream);
    recorder.addEventListener("start", (e)=>{
        chunks = [];

    })

    recorder.addEventListener('dataavailable', (e)=>{
        chunks.push(e.data);
    })

    // to download the data
    recorder.addEventListener('stop', (e)=>{
        // to convert the media check data to video
        let blob = new Blob(chunks, {type:"video/mp4"});
        let videoURL = URL.createObjectURL(blob);

        // to  download 
        let a = document.createElement('a');
        a.href = videoURL;
        a.download= "stream.mp4";
        a.click();
    })

    // 
    recordBtnCont.addEventListener("click", (e)=>{
      
      if(!recorder) return;
      // meaning og above line means if the value of recorder = true then do'nt do anyrhing
      //and make its value of recordFlag  as reverse
      recordFlag = !recordFlag;
      if(recordFlag){
        // start
        recorder.start();
        recordBtn.classList.add("scale-record");
      }else{
        recorder.stop();
        recordBtn.classList.remove("scale-record");
      }



    })

  });

    
