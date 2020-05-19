var peer = new Peer({key: 'lwjd5qra8257b9'});
window.onload = ()=>{

  peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
    document.getElementById("code").innerText = id;
  });
navigator.mediaDevices.getUserMedia({
    video: true
  }).then((stream) => {document.getElementById("local").srcObject = stream});

  peer.on('call', function(call) {
    navigator.mediaDevices.getUserMedia({
      video:true,
      audio:true
      }).then((stream)=>{
      // document.getElementById("local").srcObject = stream;
      call.answer(stream);
        });
    // Answer the call, providing our mediaStream
});



document.getElementById("connect").addEventListener("click", ()=>{
      let remId = document.getElementById("remoteid").value;
      console.log('Rem id :' +remId);
      navigator.mediaDevices.getUserMedia({
        video:true,
        audio:true
        }).then((stream)=>{
      var call = peer.call(remId,stream);
      call.on('stream', function(stream) {
    // `stream` is the MediaStream of the remote peer.
    // Here you'd add it to an HTML video/canvas element.
    document.getElementById("remote").srcObject = stream;
  });});
});


}


