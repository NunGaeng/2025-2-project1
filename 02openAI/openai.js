function talk(){
    userquestion = txttalk.value;
    talkdata = {
        "model": aimodel.value,
        "messages": [
          
          { 
            "role": "user", 
            "content": userquestion
          }
        ]
      }
      

    $.ajax({
        type: 'POST',
        url: 'https://api.openai.com/v1/chat/completions',
        headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "
            },
        data: JSON.stringify(talkdata)

    }).done(function(response){
        console.log(response)
        txtMsg.value = '성공\n\n' +
        response.model + '\n' +
        'total token : ' + response.usage.total_token + '\n\n' +
        response.choices[0].message.content

    }).fail(function(error){
        alert('실패했습니다')
        console.log(error)
    });
}

function draw(){
  userquestion = txttalk.value;
  if(userquestion == ""){
    userquestion = "hiphop, cat"
  }
  txtMsg.value = '그리는중입니다'
  talkdata = {
      "prompt" : userquestion,
      "n" : 1,
      "size" : "512x512"
    }
    

  $.ajax({
      type: 'POST',
      url: 'https://api.openai.com/v1/images/generations',
      headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "
          },
      data: JSON.stringify(talkdata)

  }).done(function(response){
      console.log(response)
      txtMsg.value = '성공\n\n'
      aiimage.src = response.data[0].url

  }).fail(function(error){
      console.log(error)
      txtMsg.value = '실패 \n\n' +
        error.responseJSON.error.message
  });
}