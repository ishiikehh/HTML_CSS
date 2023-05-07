let m1 = document.querySelector('#m1')
let m2 = document.querySelector('#m2')
let f1 = document.querySelector('#f1')
let f2 = document.querySelector('#f2')
let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let b1 = document.querySelector('#b1')
let b2 = document.querySelector('#b2')
let h1 = document.querySelector('#h1')
let h2 = document.querySelector('#h2')
let g1 = document.querySelector('#g1')
let g2 = document.querySelector('#g2')

let mMat = document.querySelector('#mm')
let mFis = document.querySelector('#mf')
let mQui = document.querySelector('#mq')
let mBio = document.querySelector('#mb')
let mHis = document.querySelector('#mh')
let mGeo = document.querySelector('#mg')

let mExatas = document.querySelector('#mE')
let mHuman = document.querySelector('#mH')

setInterval(function medias(){
    let mat = ((m1.value) + (m2.value)) / 2;
    mMat.innerHTML = mat
    console.log(m1.value, m2.value, mat);



    //medias das medias
    var mediaExata = (mMat + mFis + mQui + mBio)/4
    mExatas.innerHTML = mediaExata
    var mediaHuman = (mHis + mGeo)/2
    mHuman.innerHTML = mediaHuman
}, 1000)
