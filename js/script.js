
// header slider

const details = document.querySelectorAll('.details .detail');
const images = document.querySelectorAll('.background img');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

let imagIndex = 0

function prevSlide(){
    imagIndex--;
    imagIndex = imagIndex < 0 ? images.length -1 : imagIndex;

    document.querySelector('.background img.active').classList.remove('active');
    images[imagIndex].classList.add('active');

    document.querySelector('.details .detail.active ').classList.remove('active');
    details[imagIndex].classList.add('active');
}

function NextSlide(){
    imagIndex++;
    imagIndex = imagIndex > images.length -1 ? 0 : imagIndex;

    document.querySelector('.background img.active').classList.remove('active');
    images[imagIndex].classList.add('active');

    document.querySelector('.details .detail.active ').classList.remove('active');
    details[imagIndex].classList.add('active');
}

setInterval(NextSlide , 5000);

arrowLeft.addEventListener('click',prevSlide);
arrowRight.addEventListener('click',NextSlide);

//---------------------------------------------------------------------

// Generate restaurant menus item && display theme

const allProduct =[
    {id:1 , name:'پیتزا ویژه رستوران فدک',image:'image/40.jpg',price:260000,cat:'main-food' , dataFood:'pizza' , count:1},
    {id:2 , name:'پیتزا قارچ و مرغ',image:'image/37.jpg',price:150000,cat:'main-food' , dataFood:'pizza' ,count:1},
    {id:3 , name:'پیتزا قارچ و گوشت',image:'image/36.jpg',price:160000,cat:'main-food' , dataFood:'pizza' ,count:1},
    {id:4 , name:'پیتزا پپرونی',image:'image/38.jpg',price:130000,cat:'main-food' , dataFood:'pizza' ,count:1},
    {id:5 , name:'پیتزا سبزیجات',image:'image/39.jpg',price:130000,cat:'main-food' , dataFood:'pizza' ,count:1},
    {id:6 , name:'پیتزا ایتالیایی',image:'image/40.jpg',price:180000,cat:'main-food' , dataFood:'pizza' ,count:1},
    {id:7 , name:'پیتزا آمریکایی',image:'image/41.jpg',price:200000,cat:'main-food' , dataFood:'pizza' ,count:1},
    {id:8 , name:'پیتزا ناپلی',image:'image/42.jpg',price:180000,cat:'main-food' , dataFood:'pizza' ,count:1},
    {id:9 , name:'پیتزا شیکاگو',image:'image/43.jpg',price:175000,cat:'main-food' , dataFood:'pizza' ,count:1},
    {id:10 , name:'پیتزا نیویورکی',image:'image/44.jpg',price:165000,cat:'main-food' , dataFood:'pizza' ,count:1},
    {id:11 , name:'پیتزا سیسیلی',image:'image/6.jpg',price:140000,cat:'main-food' , dataFood:'pizza' ,count:1},
    {id:12 , name:'هبرگر دو طبقه ',image:'image/32.jpg',price:1750000,cat:'main-food' , dataFood:'hamburger' ,count:1},
    {id:13 , name:'همبرگر معمولی',image:'image/31.jpg',price:80000,cat:'main-food' , dataFood:'hamburger' ,count:1},
    {id:14 , name:'همبرگر قارچ و مرغ',image:'image/33.jpg',price:120000,cat:'main-food' , dataFood:'hamburger' ,count:1},
    {id:15 , name:'همبرگر قارچ و پنیر',image:'image/34.jpg',price:100000,cat:'main-food' , dataFood:'hamburger' ,count:1},
    {id:16 , name:'چیزبرگر',image:'image/35.jpg',price:100000,cat:'main-food' ,dataFood:'hamburger' ,count:1},
    {id:17 , name:'قارچ برگر',image:'image/16.jpg',price:90000,cat:'main-food' ,dataFood:'hamburger' ,count:1},
    {id:18 , name:'دوبل برگر',image:'image/17.jpg',price:150000,cat:'main-food' ,dataFood:'hamburger' ,count:1},
    {id:19 , name:'اسپاگتی مخصوص',image:'image/45.jpg',price:60000,cat:'main-food',dataFood:'spaghetti'  ,count:1},
    {id:20 , name:'اسپاگتی ایتالیایی',image:'image/46.jpg',price:80000,cat:'main-food' , dataFood:'spaghetti',count:1},
    {id:21 , name:'اسپاگتی چینی',image:'image/47.jpg',price:80000,cat:'main-food' , dataFood:'spaghetti',count:1},
    {id:22 , name:'اسپاگتی معمولی',image:'image/48.jpg',price:40000,cat:'main-food' , dataFood:'spaghetti',count:1},
    {id:23 , name:'چلو گوشت',image:'image/77.jfif',price:280000,cat:'main-food' ,dataFood:'riceFood' ,count:1},
    {id:24 , name:'چلو میکس',image:'image/74.jfif',price:160000,cat:'main-food' , dataFood:'riceFood' ,count:1},
    {id:25 , name:'چلو نگینی',image:'image/79.jfif',price:130000,cat:'main-food' , dataFood:'riceFood' ,count:1},
    {id:26 , name:'چلو کباب',image:'image/78.jfif',price:100000,cat:'main-food' , dataFood:'riceFood' ,count:1},
    {id:27 , name:'چلو جوجه',image:'image/80.jfif',price:70000,cat:'main-food' , dataFood:'riceFood' ,count:1},
    {id:28 , name:'چلو قرمه ',image:'image/76.jfif',price:50000,cat:'main-food' , dataFood:'riceFood' ,count:1},
    {id:29, name:'چلو قیمه',image:'image/75.jfif',price:50000,cat:'main-food' , dataFood:'riceFood' ,count:1},
    {id:30, name:'سوپ مخصوص',image:'image/49.jpg',price:50000,cat:'pre-food' , dataFood:'soup' ,count:1},
    {id:31, name:'سوپ جو',image:'image/50.jpg',price:30000,cat:'pre-food' ,dataFood:'soup',count:1},
    {id:32, name:'سالاد چهار فصل',image:'image/66.jpg',price:40000,cat:'pre-food' ,dataFood:'salad',count:1},
    {id:33, name:'سالاد مخصوص',image:'image/67.jpg',price:35000,cat:'pre-food' ,dataFood:'salad',count:1},
    {id:34, name:'سالاد ایتالیایی',image:'image/68.jpg',price:50000,cat:'pre-food' ,dataFood:'salad',count:1},
    {id:35, name:'سالاد اندونزی',image:'image/69.jpg',price:50000,cat:'pre-food' ,dataFood:'salad',count:1},
    {id:36, name:'ماست موسیر',image:'image/64.jpg',price:20000,cat:'pre-food' ,dataFood:'yagert',count:1},
    {id:37, name:'ماست نعنا',image:'image/62.jpg',price:250000,cat:'pre-food' ,dataFood:'yagert',count:1},
    {id:38, name:'ماست تمشک',image:'image/63.jpg',price:40000,cat:'pre-food' ,dataFood:'yagert',count:1},
    {id:39, name:'ماست انبه',image:'image/65.jpg',price:40000,cat:'pre-food' ,dataFood:'yagert',count:1},
    {id:40, name:'دونات توت فرنگی',image:'image/70.jpg',price:40000,cat:'pre-food' ,dataFood:'donute',count:1},
    {id:41, name:'دونات سنگی',image:'image/71.jpg',price:50000,cat:'pre-food' ,dataFood:'donute',count:1},
    {id:42, name:'دونات تمشکی',image:'image/72.jpg',price:50000,cat:'pre-food' ,dataFood:'donute',count:1},
    {id:43, name:'دونات کاراملی',image:'image/73.jpg',price:60000,cat:'pre-food' ,dataFood:'donute',count:1},
    {id:44, name:'کیک شکلاتی',image:'image/52.jpg',price:50000,cat:'post-food' ,dataFood:'cake',count:1},
    {id:45, name:'کیک کارامل شکلاتی',image:'image/53.jpg',price:50000,cat:'post-food' ,dataFood:'cake',count:1},
    {id:46, name:'کیک وانیل و توت فرنگی',image:'image/54.jpg',price:60000,cat:'post-food' ,dataFood:'cake',count:1},
    {id:47, name:'کیک قهوه و تمشک',image:'image/55.jpg',price:80000,cat:'post-food' ,dataFood:'cake',count:1},
    {id:48, name:'کیک کارامل توت فرنگی',image:'image/56.jpg',price:80000,cat:'post-food' ,dataFood:'cake',count:1},
    {id:49, name:'رول کیک وانیل و قهوه',image:'image/57.jpg',price:100000,cat:'post-food' ,dataFood:'cake',count:1},
    {id:50, name:'بستنی شکلاتی',image:'image/81.jpg',price:30000,cat:'post-food' ,dataFood:'iceCream',count:1},
    {id:51, name:'بستنی قیفی',image:'image/82.jpg',price:20000,cat:'post-food' ,dataFood:'iceCream',count:1},
    {id:52, name:'بستنی بیسکوییتی',image:'image/83.jpg',price:30000,cat:'post-food' ,dataFood:'iceCream',count:1},
    {id:53, name:'بستنی رولی میوه ای',image:'image/84.jpg',price:50000,cat:'post-food' ,dataFood:'iceCream',count:1},
    {id:54, name:'بستنی رولی معمولی ',image:'image/85.jpg',price:40000,cat:'post-food' ,dataFood:'iceCream',count:1},
    {id:55, name:'کیک بستنی خانواده',image:'image/86.jpg',price:120000,cat:'post-food' ,dataFood:'iceCream',count:1},
    {id:56, name:'کیک بستنی وانیلی',image:'image/87.jpg',price:60000,cat:'post-food' ,dataFood:'iceCream',count:1},
    {id:57, name:' بستنی وانیل و قهوه',image:'image/88.jpg',price:60000,cat:'post-food' ,dataFood:'iceCream',count:1},
    {id:58, name:' ژله آلبالو و انبه',image:'image/89.jpg',price:60000,cat:'post-food' ,dataFood:'jelly',count:1},
    {id:59, name:' ژله وانیل و انبه',image:'image/90.jpg',price:60000,cat:'post-food' ,dataFood:'jelly',count:1},
    {id:60, name:' ژله آلبالو با تکه های میوه',image:'image/91.jpg',price:100000,cat:'post-food' ,dataFood:'jelly',count:1},
    {id:61, name:' ژله توت فرنگی',image:'image/92.jpg',price:40000,cat:'post-food' ,dataFood:'jelly',count:1},
    {id:62, name:' ژله وانیل و انار',image:'image/93.jpg',price:50000,cat:'post-food' ,dataFood:'jelly',count:1},
    
]

const preFoodList = document.querySelector('.menu-cards.pre-food');
const mainFoodList = document.querySelector('.menu-cards.main-food');
const postFoodList = document.querySelector('.menu-cards.post-food');

let newCard ;

allProduct.forEach((product)=>{
    if(product.cat == 'pre-food'){
        newCard = `<div class="card" data-food="${product.dataFood}"> 
        <card class="card-content">
            <div class="image">
                <img src="${product.image}" alt="تصویر آیتم منو" class="menu-card-image">
            </div>
            <div class="details">
                <div class="title-price">
                    <h4>${product.name}</h4>
                </div>
                <p>محتویات : پنیر پیتزا ، قارچ ، مرغ ، پنیر پیتزا ، پنیر گودا ، فلفل دلمه ، زیتون</p>
                <div class="price-button">
                    <span class="price">${product.price} تومان</span>
                    <button class="buy-btn" onclick="addToCart(this)">سفارش</button>
                </div>
            </div>
        </card>
        </div>`
        preFoodList.innerHTML += newCard;
    }
    if(product.cat == 'main-food'){
        newCard = `<div class="card" data-food="${product.dataFood}"> 
        <card class="card-content">
            <div class="image">
                <img src="${product.image}" alt="تصویر آیتم منو" class="menu-card-image">
            </div>
            <div class="details">
                <div class="title-price">
                    <h4>${product.name}</h4>
                </div>
                <p>محتویات : پنیر پیتزا ، قارچ ، مرغ ، پنیر پیتزا ، پنیر گودا ، فلفل دلمه ، زیتون</p>
                <div class="price-button">
                    <span class="price">${product.price} تومان</span>
                    <button class="buy-btn" onclick="addToCart(this)">سفارش</button>
                </div>
            </div>
        </card>
        </div>`
        mainFoodList.innerHTML += newCard;
    }
    if(product.cat == 'post-food'){
        newCard = `<div class="card" data-food="${product.dataFood}"> 
        <card class="card-content">
            <div class="image">
                <img src="${product.image}" alt="تصویر آیتم منو" class="menu-card-image">
            </div>
            <div class="details">
                <div class="title-price">
                    <h4>${product.name}</h4>
                </div>
                <p>محتویات : پنیر پیتزا ، قارچ ، مرغ ، پنیر پیتزا ، پنیر گودا ، فلفل دلمه ، زیتون</p>
                <div class="price-button">
                    <span class="price">${product.price} تومان</span>
                    <button class="buy-btn" onclick="addToCart(this)">سفارش</button>
                </div>
            </div>
        </card>
        </div>`
        postFoodList.innerHTML += newCard;
    }
})

//------------------------------------------------------------

// show&hide modal menu && filter menus item

const header = document.querySelector('header');
const main = document.querySelector('main');
const menuButton = document.querySelectorAll('.main-menus .card .show-btn');
const modalMenu = document.querySelector('.menu-modal');
const modalCloseBtn = document.querySelector('.menu-modal-close');
const filterButtonBox = document.querySelectorAll('.button-box .button');
const cardList = document.querySelectorAll('.menu-cards');
const menuTitle = document.querySelectorAll('.menu-modal .title h2');


menuButton.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        header.classList.remove('active');
        modalMenu.classList.add('active');

        main.style.filter = 'blur(4px)';

        let mainCat = btn.closest('.card').querySelector('h4').className;

        menuTitle.forEach((title)=>{
            title.style.display = 'block';
            if(!title.classList.contains(mainCat)){
                title.style.display = 'none';
            }
        })

        filterButtonBox.forEach((btn)=>{
            btn.classList.add('active');
            if(!btn.classList.contains(mainCat)){
                btn.classList.remove('active');
            }
        })

        let mainFilterBox = document.querySelector('.button-box .button.active');
        let mainFilterBtn = mainFilterBox.querySelectorAll('button');

        mainFilterBtn.forEach((btn)=>{
            btn.addEventListener('click',()=>{
                document.querySelector('.button-box .button.active button.active').classList.remove('active');
                btn.classList.add('active');
                let cateCard = document.querySelectorAll(`.menu-cards.${mainCat} .card`);
                cateCard.forEach((card)=>{
                    card.style.display = 'block';
                    if(btn.innerHTML == 'بدون فیلتر'){
                        return
                    }else{
                        if(card.dataset.food != btn.id){
                            card.style.display = 'none';
                        }
                    }
                    
                })
            })
        })

        cardList.forEach((list)=>{
            list.style.display = 'flex';
            if(!list.classList.contains(mainCat)){
                list.style.display = 'none';
            }
        })
    })
})

modalCloseBtn.addEventListener('click',()=>{
    modalMenu.classList.remove('active');
    header.classList.add('active');
    main.style.filter = 'blur(0)';
})

//----------------------------------------------------------

// fix navbar on top on scroll

window.addEventListener('scroll',()=>{
    if(window.scrollY > 150){
        return header.classList.add('active')
    }
    header.classList.remove('active');
});

//---------------------------------------------------------

// comment slider 

const comments = document.querySelectorAll('.comment');
const firstComment = document.querySelector('.comment.active');

let commentIndex = 0;

function nextComment(){
    commentIndex++;
    commentIndex = commentIndex > comments.length - 1 ? 0 : commentIndex;
    firstComment.style.marginRight = `-${commentIndex * 150}%`;
}

setInterval(nextComment,3000);

//---------------------------------------------------------------

// responsive menu 

const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
const  resMenu = document.querySelector('.res-menu');
const closeIcon = document.querySelector('.close');
const menuLink = document.querySelectorAll('.res-menu .menu-link');
hamburgerMenuIcon.addEventListener('click',()=>{
    resMenu.classList.add('active');
})

closeIcon.addEventListener('click',()=>{
    resMenu.classList.remove('active');
})

menuLink.forEach((link)=>{
    link.addEventListener('click',()=>{
        resMenu.classList.remove('active');
    })
})
