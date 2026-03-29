const ENV=
{
    Base_URL:"https://staging.myapp.com",
    TimeOut: 5000,
    Retries:3,
    Browser:"Chrome"
}

const Expected_Response={
    status:200,
    body:{
        user:{Role:"Admin",Active:true}
    }
}

