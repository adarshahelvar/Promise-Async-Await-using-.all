console.log('person 1: shows ticket'); 
console.log('person 2: shows ticket'); 

const preMovie = async() =>{
    const wifeBringingTicket = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('ticket'),3000);
    });
// resolve and reject ---  catch and try;
    let ticket;
    try{
          ticket = await wifeBringingTicket;
        //  console.log(` ${ticket}`);
           const getpopcorn=new Promise((resolve, reject)=>resolve('popcorn'));
           const addButter = new Promise((resolve, reject)=>resolve('butter'));
          const coolDrink = new Promise((resolve,reject)=>resolve('Cool Drink'))      
        //   let popcorn= await getpopcorn;
        //    console.log(`husbend purchased ${popcorn}`);
        //   let butter=await addButter;
        //    console.log(` he also asked to add  ${butter}`);
        //  let drink= await coolDrink;
        //   console.log(`and he also bought ${drink}`);

         let [x,y,z]= await Promise.all([getpopcorn,addButter,coolDrink]);
        console.log(` ${x} ${y} ${z}`);
    }catch(e){
        ticket='Cheater wife';
    }
    // const getpopcorn=new Promise((resolve, reject)=>resolve('popcorn'));
    // const addButter = new Promise((resolve, reject)=>resolve('butter'));
    // const coolDrink = new Promise((resolve,reject)=>resolve('Cool Drink'))
    // let ticket = await wifeBringingTicket;
    // console.log(` ${ticket}`);
    // let popcorn= await getpopcorn;
    // console.log(`husbend purchased ${popcorn}`);
    // let butter=await addButter;
    // console.log(` he also asked to add  ${butter}`);
    // let drink= await coolDrink;
    // console.log(`and he also bought ${drink}`);
    return ticket;  
}
preMovie() .then((m)=>console.log(m));
