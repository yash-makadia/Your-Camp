var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Camp Exotica, Kullu", 
        image: "https://www.holidify.com/images/cmsuploads/compressed/tent-1208201_1920_20190212172038.jpg",
        description: "The Camp Exotica is a perfect weekend getaway option located in Kullu in the Manali district of Himachal Pradesh. The accommodation provided is world class and the tents simply leave you connecting with nature like never before. The location of these tents is such that it gives a panoramic view of the surrounding mountains. The food provided is of fine quality and the incredible view will simply leave you in awe of this adventure. Make sure to take out time for this pleasure full camping trip."
    },
    {
        name: "West Ladakh Camp, Ladakh", 
        image: "https://www.holidify.com/images/cmsuploads/compressed/24366507140_38f32204a4_z_20190212174301.jpg",
        description: "If you are planning to go on a trekking trip to Ladakh, you can make it even more adventurous by camping at the West Ladakh Camp. This beautiful campsite is sprawled across 20 acres of ranch and is ideally situated close to the Indus River. The tents are so placed that these are surrounded by apricot and willow trees which nest the migratory birds. You can set your base here and go trekking in the nearby region and visit the Buddhist Monasteries. The food served here is authentic Tibetan and Ladakhi food making it a unique culinary experience."
    },
    {
        name: "Nameri Eco Camp, Assam", 
        image: "https://www.holidify.com/images/cmsuploads/compressed/4877785757_958e85201d_z_20190212174518.jpg",
        description: "Going by the name one thing must be clear that it is a 100% eco-friendly camp. This camp has become one of the most sought after because of its superb location and the environmental protection efforts. It is located in the district of Sonetpur which is the 3rd National Park of Assam. This camp is not only known for its splendid location but also its various adventure activities. You can go on a hike in the nearby woods or for an exciting rafting session in the Bhoroli River. The best part of this place is the chance of spotting over 300 species of birds. This does sound like a bird lover’s paradise."
    },
    
]; 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;