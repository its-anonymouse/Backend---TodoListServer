const Task = require('../../models/Task');


module.exports = {
    
    createTask:  (req,res,next) => {
        
        const url = req.protocol + '://' + req.get("host");
    
        const task = new Task({
            title:req.body.title,
            description:req.body.description,
            imagePath: url + '/images/' + req.file.filename,
            creator: req.userData.userId,
            // additional feature
            time: req.body.time || 0,
            // =================
        })
    
        task.save().catch(e => {
            res.status(500).json({
                status:{
                    message:e.message,
                    code:500
                }
            });
        })
;

        console.log(task);
    
        res.json({
            status:{
                message:"successful in creating task",
                code:201
            },
            data:task
        })
    }

    
}