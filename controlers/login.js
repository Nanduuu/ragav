
let do_login = (req,res)=>{

    if(req.params){
        console.log(req.params)
        res.send("in login");
    }


} 

let do_logout = (req,res)=>{



}

module.exports = {
     do_login : do_login,
    do_logout : do_logout
}
