import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videosSchima = new Schema({
         videoFile:{
            type:String, //cloudnary url
            required:true,
        },

        thumbnail:{
           type:String, //cloudnary url
           required:true,
        },
        owner:{
              type:Schema.Types.ObjectId,
              ref:"User"

             },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        duration:{
           type:Number,
           required:true,
        },
        views:{
           type:Number,
           default:0,
        },
        isPublised:{
           type:Boolean,
           default:true,
        }

},{timestamps:true})

videosSchima.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videosSchima)