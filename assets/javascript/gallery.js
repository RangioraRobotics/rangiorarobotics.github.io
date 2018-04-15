// Get the image body
const imagepage = document.getElementById('img-images-col');
const videopage = document.getElementById('img-videos');

// Create refrences
const dbRefImages = firebase.database().ref().child('images');
const dbRefVideos = firebase.database().ref().child('videos');


// Image Added
// dbRefImages.on('child_added', snap => {
//   imagepage.append(snap.val());
//
// });


dbRefImages.on('child_added', snap => {
  const imgdiv = document.createElement('div');
  $(imgdiv).addClass("card");
  $(imgdiv).addClass("text-white");
  $(imgdiv).addClass("bg-dark");
  const imgoverlay = document.createElement('div');
  $(imgoverlay).addClass("card-img-overlay");
  const imgtitle = document.createElement("h5");
  $(imgtitle).addClass("card-title");
  $(imgtitle).text(snap.key);

  imgoverlay.appendChild(imgtitle);

  const img = document.createElement('img');

  $(img).addClass("card-img");
  $(img).attr("src", snap.val());

  imgdiv.appendChild(imgoverlay);
  imgdiv.appendChild(img);
  imgdiv.id = snap.key;
  imagepage.appendChild(imgdiv);
});



// Image Changed
// dbRefImages.on('child_changed', snap => {
//   const imgcha = document.getElementById(snap.key);
//   liChanged.innerText = snap.val();
// });
// Image removed
dbRefImages.on('child_removed', snap => {
  const imgtoremove = document.getElementById(snap.key);
  imgtoremove.remove();
});







////////////////////
//     VIDEOS    //
///////////////////
dbRefVideos.on('child_added', snapvid => {
  const viddiv = document.createElement('iframe');
  $(viddiv).attr("allowfullscreen", "true");

  $(viddiv).attr("src", snapvid.val());

  viddiv.id = snapvid.key;
  videopage.appendChild(viddiv);
});



// Image Changed
// dbRefImages.on('child_changed', snap => {
//   const imgcha = document.getElementById(snap.key);
//   liChanged.innerText = snap.val();
// });
// Image removed
dbRefVideos.on('child_removed', snapvid => {
  const vidtoremove = document.getElementById(snapvid.key);
  vidtoremove.remove();
});
