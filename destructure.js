const Person = { name:'jahid hassan',age:23,gfName:'Nadia Hossain safa',job:'web Developer',address:'jhawtala'}
//const {name,job}={ name:'jahid hassan',age:23,gfName:'Nadia Hossain safa',job:'web Developer',address:'jhawtala'}
const {name,job}=Person
//const gfName=Person.gfName
const complexObject ={
    name:'abc',
    info:{
        address:'lola road',
        leader:'jaha hadid'

    }
}
const {leader}=complexObject.info
console.log(leader)


//const job=Person.job
//console.log(name,job)
//console.log(name,job)
//console.log(name,job)
//console.log(name,job)
const Friends=['Marzuk russel','oscar wild','ahmad shah abdali','robi tagore']
const [chotoFriend,...oscar]=Friends
console.log(oscar)
