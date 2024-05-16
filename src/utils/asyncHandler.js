const asyncHandler = (requestHandler)=>{

    ()=>{

        Promise.resolve(requestHandler(req,res,next))
        .catch( (err)=>{
            console.log(err)
        })
    }
}

export {asyncHandler}

// const asyncHandler = (fn)=> async (req,res,next)=>{
//     try {

//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//         success:false,
//         massage:error.massage
//         })}
// }





