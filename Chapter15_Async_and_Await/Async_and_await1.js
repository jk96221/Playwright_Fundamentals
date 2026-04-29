async function run() {

    let token=await getToken(token);
    console.log(token);
    let user=await getUser(token);
    console.log(user);
        
}