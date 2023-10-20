const reviews = [
    {
        name: 'Susan Samit',
        job: 'Web Developer',
        img:'./assets/person-1.jpeg',
        text:'Susan Smith is a talented web developer known for creating engaging and user-friendly websites. Her expertise spans both front-end and back-end development, and she is committed to staying at the forefront of web technology trends.',
    },
    {
        name:'Anna Johnson',
        job:'Web Designer',
        img:'./assets/person-2.jpg',
        text:'Anna Johnson, a skilled web designer, seamlessly blends creativity and technical expertise to craft visually appealing, user-friendly websites. Her commitment to staying current with design trends and dedication to seamless online experiences make her a valuable asset in the digital realm.',
    },
    {
        name:'Peter John',
        job:'Virtual Assistant',
        img:'./assets/person-3.jpg',
        text:'Meet Peter John, a seasoned virtual assistant with a passion for efficiency and organization. With a wealth of experience in providing remote administrative support, Peter John is dedicated to helping clients streamline their tasks, manage their schedules, and achieve their goals. He is your go-to professional for a wide range of virtual assistance needs.',
    },
    {
        name:'Bill Anderson',
        job:'Digital Marketing',
        img:'./assets/person-4.jpg',
        text:'Bill Anderson is a seasoned digital marketing professional with a proven track record of driving online success. With extensive experience in SEO, content marketing, and social media strategies, Bill combines innovation and data-driven insights to help businesses thrive in the digital landscape. His expertise makes him a valuable asset in achieving online marketing objectives.',
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const randomButton = document.querySelector('.random-btn');

let currValue = 0 ;

function showPerson(person){
    const item = reviews[person];
    img.src =item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

function next(){
    currValue++;
    if(currValue > reviews.length -1){
        currValue = 0;
    }
    showPerson(currValue);
}

function prev(){
    currValue--;
    if(currValue < 0){
        currValue = reviews.length - 1;
    }
    showPerson(currValue);
}

function random(){
    currValue = randomGenerator();
    showPerson(currValue);
}

function randomGenerator(){
    let random = Math.floor(Math.random() * reviews.length);
    while(random == currValue){
        random = Math.floor(Math.random() * reviews.length);
    }
    return random;
}