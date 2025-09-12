function talk(){

    talkdata = {
        "model": "gpt-5-nano",
        "messages": [
          
          { 
            "role": "user", 
            "content": "30만원 이하로 차기 좋은 세이코 시계를 추천해줘" 
          }
        ]
      }
      

    $.ajax({
        type: 'POST',
        url: 'https://api.openai.com/v1/chat/completions',
        headers: {
                "ContentType": "application/json",
                "Authorization": "Bearer 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"
            },
        data: JSON.stringify(talkdata)

    }).done(function(response){
        console.log(response)

    }).fail(function(error){
        alert('실패했습니다')
        console.log(error)
    });
}

talk()