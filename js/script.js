let listimages = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

let groupimages = document.getElementById('group-images');
let activelement=0;
let childrenimg=[];
let obj;
let clock;

  
for(let i=0; i  < listimages.length; i++) {
    console.log(listimages[i]);

    let image = document.createElement('img');
    childrenimg[i]=image;
     image.setAttribute('src', listimages[i]);
     image.classList.add('ms_Width');
    if(i===activelement){
     image.classList.add('ms_block');
    } else{
        image.classList.add('ms_none');
    }
    groupimages.append(image);
}

let btnnext= document.getElementById('btn-next');
btnnext.addEventListener('click', function(){
    clock = setInterval(function () {
        obj= childrenimg[activelement];
        obj.classList.add('ms_none');
        obj.classList.remove('ms_block');
        activelement++;
        if(activelement===listimages.length){
            activelement=0;
        } else{
            obj= childrenimg[activelement];
            obj.classList.remove('ms_none');
            obj.classList.add('ms_block');
        }  
    }, 3000);
})

let btnprew= document.getElementById('btn-prew');
btnprew.addEventListener('click', function(){
    clock = setInterval(function () {
        obj= childrenimg[activelement];
        obj.classList.add('ms_none');
        obj.classList.remove('ms_block');
        activelement--;
        if(activelement===-1){
            activelement=listimages.length-1;
        } else{
            obj= childrenimg[activelement];
            obj.classList.remove('ms_none');
            obj.classList.add('ms_block');
        }
    }, 3000);
})

let btnpause = document.getElementById('btn-pause');
btnpause.addEventListener('click', function() {
    clearInterval(clock);
})




