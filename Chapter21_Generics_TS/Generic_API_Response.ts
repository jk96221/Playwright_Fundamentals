function wrapResponse<T>(statusCode: number, data:T): 
{statusCode: number, data: T}
{
    return {
        statusCode: statusCode,
        data: data
    }
}

const userResponse = wrapResponse<string>(200, "User data");
console.log(userResponse);

const productResponse = wrapResponse<boolean>(404, false);
console.log(productResponse);

const orderResponse = wrapResponse<number>(500, 12345);
console.log(orderResponse);
