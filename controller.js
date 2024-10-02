const students=require('./schema')

exports.addstudents=async(req,res)=>
    {
        // console.log('inside login controller');
        // res.status(200).json('login request recieved')

        const {emailid,studentname,dob,phnum,address}=req.body
    
        try {    
            const existing=await students.findOne({emailid})
            if(existing)
            {
                res.status(406).json('Student already exist')
            }        
            else
            {
                const newstudent=new students({
                emailid,studentname,dob,phnum,address
            })
            await newstudent.save()
            res.status(200).json(newstudent)
         }
        } catch (error) {
            res.status(401).json(`${error}`)
        }
    }

exports.allstudents=async(req,res)=>
{
    try {
        const allstudents=await students.find()
        res.status(200).json(allstudents)

    } catch (error) {
        res.status(401).json(`${error}`)
    }
}

exports.allstudentsbyid=async(req,res)=>
    {
        const {id}=req.params
        try {
            const getallstudents=await students.findById({_id:id})
            res.status(200).json(getallstudents)
    
        } catch (error) {
            res.status(401).json(`${error}`)
        }
    }
    

exports.deletestudents=async(req,res)=>
{
    const {id}=req.params
    try {
        const deleted=await students.findByIdAndDelete({_id:id})
        res.status(200).json(deleted)
    } catch (error) {
        res.status(401).json(`${error}`)
    }
}

exports.editstudent=async(req,res)=>
{
    const {id}=req.params
    const {emailid,studentname,dob,phnum,address}=req.body
    try {
        const edit=await students.findByIdAndUpdate({_id:id},{emailid,studentname,dob,phnum,address})
        await edit.save()
        res.status(200).json(edit)
    } catch (error) {
        res.status(401).json(`${error}`)
    }
}