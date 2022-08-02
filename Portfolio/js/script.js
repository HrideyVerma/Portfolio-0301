var typed=new Typed('.typing',{
    strings:['Frontend Developer','Graphic Designer' ,'Web Developer','Web Designer'],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})

const nav = document.querySelector(".nav"),
            navList = nav.querySelectorAll("li"),
            totalNavList=navList.length;
            allSections=document.querySelectorAll('.section'),
            totalSections=allSections.length
            for(let i=0;i<totalNavList;i++){
                const a=navList[i].querySelector('a');
                a.addEventListener("click",function(){
                    for(let j=0;j<totalNavList;j++){
                        navList[j].querySelector("a").classList.remove('active');
                    }
                    this.classList.add('active')
                    showSelection(this)
                })
            }
            function showSelection(element){
                for(let i=0;i<totalSections;i++){
                    allSections[i].classList.remove("active")
                }
                const href=(element.getAttribute('href').split("#"));
                const target=href[1];
                document.querySelector("#"+target).classList.add("active")

            }
            function updateNav(element){
                for(let i=0;i<totalNavList;i++){
                navList[i].querySelector("a").classList.remove("active");
                }
                const target=element.split("#")[1];
                console.log(target)
                document.querySelector("#"+target).classList.add("active")
            }
const navTogglerBtn=document.querySelector('.nav-toggler'),
aside=document.querySelector('.aside');
navTogglerBtn.addEventListener('click',()=>{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
}

function showSelection2(element){
    // for(let i=0;i<totalSections;i++){
    //     allSections[i].classList.remove("active")
    // }
    for(let i=0;i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove("active");
    }
    // const href=(element.getAttribute('href').split("#"));
    // const target=href[1];
    document.querySelector("#contact").classList.add("active")
    document.getElementsByClassName("ahhh")[0].classList.add("active")

}

document.querySelectorAll('.hire-me')[0].addEventListener('click',()=>{
    // updateNav(this)
    // console.log()
    showSelection2("#contact")
})
document.querySelectorAll('.hire-me')[1].addEventListener('click',()=>{
    // updateNav(this)
    // console.log(this)
    showSelection2('#contact')
})