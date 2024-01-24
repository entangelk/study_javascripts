// fetch() 기본 문법

// async (params) => {
// try{
//    let response = await fetch(url, options);
// } catch(error){
//     console.log(`Error Message : ${error.message}`);
// };
// }

// from data.go.kr wiht loan rate (get 같이 그냥 받기만할때)
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
rate_list.addEventListener('click', async (event) => {
    let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=U7qOOR4KMrkRvFHfQjd8XQh1DJraaYLetyiqIfNiJEsrwG%2BHRWhPpfVffZDjB0aJtFc9eSmc6tR1iWQat2Stew%3D%3D&pageNo=1&numOfRows=30&dataType=JSON`;
    let options = {}; // python dict
    try{
       let response = await fetch(url, options); // send
       let result = await response.json();
       console.log(`response result : ${result}`); // response

       let content = document.querySelector("#rent-loan-rate-info_rate-list_contents")
       content.innerHTML = result["header"]["resultMsg"];
    } catch(error){
        console.log(`Error Message : ${error.message}`);
    };
    }
    );

    // datalab_shoppinginsite from naver api (post 등 뭔가 보내고 받아야할때)
    let shopping_insite = document.querySelector("#datalab_shoppinginsite");
    shopping_insite.addEventListener('click', async (event) => {
        let url = `https://openapi.naver.com/v1/datalab/shopping/categories`;
        let data = {
            "startDate": "2023-08-01",
            "endDate": "2023-09-30",
            "timeUnit": "month",
            "category": [
                {"name": "패션의류", "param": [ "50000000"]},
                {"name": "화장품/미용", "param": [ "50000002"]}
            ],
            "device": "pc",
            "gender": "f",
            "ages": [ "20",  "30"]
          }
        let options = {
            method : 'POST'
            , headers : {
                'X-Naver-Client-Id' : 'UO2S9XsZaoMlGjRKN8Ut'
                , 'X-Naver-Client-Secret' : 'a9tB6EspHA'
                , 'Content-Type' : 'application/json'
            }
            , body : JSON.stringify(data)
        }; // python dict
        try{
           let response = await fetch(url, options); // send
           let result = await response.json();
           console.log(`response result : ${result}`); // response
    
           let content = document.querySelector("#datalab_shoppinginsite_contents")
           content.innerHTML = result["endDate"];
        } catch(error){
            console.log(`Error Message : ${error.message}`);
        };
        });