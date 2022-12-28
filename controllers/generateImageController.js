const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImageController=async (req,res) =>{
 const {prompt} =req.body

try {

 const response = await openai.createImage({
        prompt,
        n: 1,
        size:'512x512',
      });
const image_url = response.data.data[0].url;
res.json({img:image_url})

} catch (error) {
  res.send(error)  
}

}

module.exports=generateImageController;