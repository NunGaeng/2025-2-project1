function talk(){
    userquestion = txttalk.value;
    talkdata = {
        "model": "gpt-5-nano",
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

talk()