function printmsg(message: string , callback: any): void{
    callback(message)
}
printmsg('welcome Ian' , 'youre login')

console.log(printmsg)