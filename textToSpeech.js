const prompt = require ('prompt')

const say = require('say')

prompt.start()

prompt.get(["word"], function (err, result){
    if (err){
        console.log(err)
    }
  say.speak(result.word)
})